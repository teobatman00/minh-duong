import BrowserOnly from '@docusaurus/BrowserOnly';
import {lazy, Suspense} from 'react';

const EarthGlobeScene = lazy(() => import('./EarthGlobe'));

/**
 * Home-page backdrop entry: SSR-safe, code-split Three.js chunk.
 */
export default function EarthGlobe(): JSX.Element {
  return (
    <BrowserOnly fallback={null}>
      {() => (
        <Suspense fallback={null}>
          <EarthGlobeScene />
        </Suspense>
      )}
    </BrowserOnly>
  );
}
