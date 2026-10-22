import styles from "./styles.module.css";
import { useEffect } from "react";
import LazyImage from "@site/src/components/shared/LazyImage";
import useInView from "@site/src/lib/hooks/useInView";

interface ImageGalleryPropsType {
  imgArray: Array<{
    alt?: string;
    caption?: string;
    src?: string;
    width?: number;
    height?: number;
    Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  }>;
}

function renderImage(item: {
  alt?: string;
  caption?: string;
  src?: string;
  width?: number;
  height?: number;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
}): import("react").ReactNode {
  return item.Svg ? (
    <item.Svg
      className="tw-h-auto tw-w-full tw-max-w-full"
      role="img"
      aria-label={item.alt}
    />
  ) : (
    <LazyImage
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      data-zoomable="true"
      className="tw-h-auto tw-w-full tw-max-w-full"
      style={
        item.width && item.height
          ? undefined
          : { aspectRatio: "4 / 3", objectFit: "cover" }
      }
    />
  );
}

export default function ImageGallery({
  imgArray,
}: Readonly<ImageGalleryPropsType>): JSX.Element {
  const { ref, inView } = useInView<HTMLDivElement>({
    rootMargin: "250px 0px",
  });

  useEffect(() => {
    const root = ref.current;
    if (!root || !inView) {
      return;
    }

    let cancelled = false;
    let zoom: { detach: () => void } | undefined;

    import("medium-zoom").then(({ default: mediumZoom }) => {
      if (cancelled || !ref.current) {
        return;
      }
      const images = ref.current.querySelectorAll<HTMLImageElement>(
        'img[data-zoomable="true"]'
      );
      if (!images.length) {
        return;
      }
      // Overlay color comes from the global `.medium-zoom-overlay` rule
      // (custom.css) so docs/blog/gallery zooms share one scrim in both themes.
      zoom = mediumZoom(images, {
        margin: 80,
        scrollOffset: 0,
      });
    });

    return () => {
      cancelled = true;
      zoom?.detach();
    };
  }, [imgArray, inView, ref]);

  return (
    <div className="container" ref={ref}>
      <div className="tw-columns-2 sm:tw-columns-3 tw-gap-5 tw-mx-auto tw-space-y-4 tw-pb-20">
        {imgArray.map((item, index) => (
          <div
            className="tw-break-inside-avoid"
            key={item.src ?? item.caption ?? item.alt ?? `gallery-${index}`}
          >
            <figure className={styles.gallery_img_figure}>
              {renderImage(item)}
              {item.caption && <figcaption>{item.caption}</figcaption>}
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
