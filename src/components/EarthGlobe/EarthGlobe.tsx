import {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/** Harbor Ledger teal / ink — soft tech look, not neon. */
const COLORS = {
  wire: 0x4a8fb5, // brand-400
  land: 0x1b5f82, // brand-500
  glow: 0x7fb3d0, // brand-300
  core: 0x0b2634, // brand-900
  accent: 0xb3d1e5, // brand-200
};

type ThreeModule = typeof import('three');

/**
 * Client-only Three.js Earth (wireframe + soft atmosphere).
 * Mount via BrowserOnly / dynamic import so SSR and LCP stay clean.
 */
export default function EarthGlobe(): JSX.Element | null {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [webglReady, setWebglReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) {
      return undefined;
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    // No WebGL when the user prefers reduced motion — CSS fallback stays.
    if (reducedMotion) {
      return undefined;
    }

    let disposed = false;
    let rafId = 0;
    let renderer: import('three').WebGLRenderer | undefined;
    let scene: import('three').Scene | undefined;
    let camera: import('three').PerspectiveCamera | undefined;
    let earthGroup: import('three').Group | undefined;
    let atmosphere: import('three').Mesh | undefined;
    let ring: import('three').Mesh | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let visible = true;
    let pageVisible = !document.hidden;

    const disposables: Array<{dispose: () => void}> = [];
    const track = <T extends {dispose: () => void}>(obj: T): T => {
      disposables.push(obj);
      return obj;
    };

    const cleanup = () => {
      disposed = true;
      if (idleId !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
      cancelAnimationFrame(rafId);
      resizeObserver?.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      intersection?.disconnect();

      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
      }

      for (const d of disposables) {
        d.dispose();
      }
      disposables.length = 0;
      scene?.clear();
      renderer = undefined;
      scene = undefined;
      camera = undefined;
      earthGroup = undefined;
      atmosphere = undefined;
      ring = undefined;
    };

    const onVisibility = () => {
      pageVisible = !document.hidden;
    };

    let intersection: IntersectionObserver | undefined;

    const start = async () => {
      // Defer after first paint so hero avatar/text remain LCP candidates.
      await new Promise<void>((resolve) => {
        if ('requestIdleCallback' in window) {
          idleId = window.requestIdleCallback(() => resolve(), {timeout: 1800});
        } else {
          timeoutId = setTimeout(() => resolve(), 200);
        }
      });

      if (disposed) {
        return;
      }

      let THREE: ThreeModule;
      try {
        THREE = await import('three');
      } catch {
        return;
      }

      if (disposed) {
        return;
      }

      const width = wrap.clientWidth || 640;
      const height = wrap.clientHeight || 480;

      scene = new THREE.Scene();
      // Slightly tighter FOV — panel is a right-side crop, not full hero.
      camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
      camera.position.set(0.15, 0.1, 4.2);

      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
          powerPreference: 'low-power',
        });
      } catch {
        return;
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(width, height, false);
      renderer.setClearColor(0x000000, 0);

      earthGroup = new THREE.Group();
      // Bias into the right panel so the silhouette reads as a side accent.
      earthGroup.position.set(0.2, 0, 0);
      earthGroup.rotation.x = 0.35;
      earthGroup.rotation.z = -0.15;
      scene.add(earthGroup);

      // Soft opaque core
      const coreGeo = track(new THREE.SphereGeometry(1.05, 48, 48));
      const coreMat = track(
        new THREE.MeshBasicMaterial({
          color: COLORS.core,
          transparent: true,
          opacity: 0.55,
        }),
      );
      earthGroup.add(new THREE.Mesh(coreGeo, coreMat));

      // Tech wireframe shell
      const wireGeo = track(new THREE.SphereGeometry(1.08, 36, 28));
      const wireMat = track(
        new THREE.MeshBasicMaterial({
          color: COLORS.wire,
          wireframe: true,
          transparent: true,
          opacity: 0.42,
        }),
      );
      earthGroup.add(new THREE.Mesh(wireGeo, wireMat));

      // Latitude / longitude accents
      const latLng = new THREE.Group();
      const lineMat = track(
        new THREE.LineBasicMaterial({
          color: COLORS.land,
          transparent: true,
          opacity: 0.35,
        }),
      );
      for (let i = -2; i <= 2; i += 1) {
        const phi = (Math.PI / 2) * (i / 3);
        const curve = new THREE.EllipseCurve(
          0,
          0,
          Math.cos(phi) * 1.085,
          Math.cos(phi) * 1.085,
          0,
          2 * Math.PI,
          false,
          0,
        );
        const pts = curve.getPoints(64).map((p) => new THREE.Vector3(p.x, Math.sin(phi) * 1.085, p.y));
        const geo = track(new THREE.BufferGeometry().setFromPoints(pts));
        latLng.add(new THREE.LineLoop(geo, lineMat));
      }
      for (let i = 0; i < 6; i += 1) {
        const theta = (i / 6) * Math.PI;
        const pts: import('three').Vector3[] = [];
        for (let j = 0; j <= 64; j += 1) {
          const t = (j / 64) * Math.PI * 2;
          pts.push(
            new THREE.Vector3(
              Math.sin(t) * Math.cos(theta) * 1.085,
              Math.cos(t) * 1.085,
              Math.sin(t) * Math.sin(theta) * 1.085,
            ),
          );
        }
        const geo = track(new THREE.BufferGeometry().setFromPoints(pts));
        latLng.add(new THREE.LineLoop(geo, lineMat));
      }
      earthGroup.add(latLng);

      // Sparse “data” points on the sphere
      const pointCount = 140;
      const positions = new Float32Array(pointCount * 3);
      for (let i = 0; i < pointCount; i += 1) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const r = 1.095;
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.cos(phi);
        positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      }
      const pointsGeo = track(new THREE.BufferGeometry());
      pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const pointsMat = track(
        new THREE.PointsMaterial({
          color: COLORS.accent,
          size: 0.028,
          transparent: true,
          opacity: 0.65,
          sizeAttenuation: true,
          depthWrite: false,
        }),
      );
      earthGroup.add(new THREE.Points(pointsGeo, pointsMat));

      // Atmosphere shell
      const atmGeo = track(new THREE.SphereGeometry(1.22, 48, 48));
      const atmMat = track(
        new THREE.MeshBasicMaterial({
          color: COLORS.glow,
          transparent: true,
          opacity: 0.1,
          side: THREE.BackSide,
          depthWrite: false,
        }),
      );
      atmosphere = new THREE.Mesh(atmGeo, atmMat);
      atmosphere.position.copy(earthGroup.position);
      scene.add(atmosphere);

      // Subtle orbital ring
      const ringGeo = track(new THREE.TorusGeometry(1.55, 0.008, 8, 100));
      const ringMat = track(
        new THREE.MeshBasicMaterial({
          color: COLORS.wire,
          transparent: true,
          opacity: 0.28,
        }),
      );
      ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(earthGroup.position);
      ring.rotation.x = Math.PI / 2.4;
      ring.rotation.y = 0.35;
      scene.add(ring);

      const resize = () => {
        if (!renderer || !camera || !wrap) {
          return;
        }
        const w = wrap.clientWidth || 1;
        const h = wrap.clientHeight || 1;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setSize(w, h, false);
      };

      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(wrap);

      intersection = new IntersectionObserver(
        ([entry]) => {
          visible = entry?.isIntersecting ?? false;
        },
        {threshold: 0.05},
      );
      intersection.observe(wrap);
      document.addEventListener('visibilitychange', onVisibility);

      let last = performance.now();
      const tick = (now: number) => {
        if (disposed) {
          return;
        }
        rafId = requestAnimationFrame(tick);
        if (!renderer || !scene || !camera || !earthGroup) {
          return;
        }
        if (!visible || !pageVisible) {
          return;
        }

        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;

        earthGroup.rotation.y += dt * 0.12;
        if (atmosphere) {
          atmosphere.rotation.y -= dt * 0.04;
        }
        if (ring) {
          ring.rotation.z += dt * 0.08;
        }

        renderer.render(scene, camera);
      };

      // One initial frame, then animate
      renderer.render(scene, camera);
      if (!disposed) {
        setWebglReady(true);
      }
      rafId = requestAnimationFrame(tick);
    };

    void start();

    return cleanup;
  }, []);

  return (
    <div
      ref={wrapRef}
      className={clsx(styles.wrap, webglReady && styles.wrapLive)}
      aria-hidden="true"
    >
      <div className={styles.fallback} />
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
