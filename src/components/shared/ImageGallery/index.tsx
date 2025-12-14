import uniqid from "uniqid";
import styles from "./styles.module.css";
import { useEffect, useRef } from "react";
import mediumZoom from "medium-zoom";

interface ImageGalleryPropsType {
  imgArray: Array<{
    alt?: string;
    caption?: string;
    src?: string;
    Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  }>;
}

function renderImage(item: {
  alt?: string;
  caption?: string;
  src?: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
}): import("react").ReactNode {
  return item.Svg ? (
    <item.Svg className="tw-h-auto tw-max-w-full tw-rounded-lg" />
  ) : (
    <img
      src={item.src}
      alt={item.alt}
      data-zoomable="true"
      className="tw-h-auto tw-max-w-full tw-rounded-lg"
    />
  );
}

export default function ImageGallery({
  imgArray,
}: Readonly<ImageGalleryPropsType>): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const images = root.querySelectorAll<HTMLImageElement>(
      'img[data-zoomable="true"]'
    );
    if (!images.length) return;

    const zoom = mediumZoom(images, {
      margin: 80,
      scrollOffset: 0,
    });
    return () => {
      zoom.detach();
    };
  }, [imgArray]);

  return (
    <div className="container" ref={containerRef}>
      <div className="tw-columns-2 sm:tw-columns-3 md:tw-columns-4 lg:tw-columns-5 tw-gap-4 tw-mx-auto tw-space-y-3 tw-pb-28">
        {imgArray.map((item) => (
          <div className="tw-break-inside-avoid" key={uniqid()}>
            <figure className={styles.gallery_img_figure}>
              {renderImage(item)}
              {item.caption && (
                <figcaption className="tw-p-3 md:tw-p-4">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
