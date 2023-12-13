import uniqid from "uniqid";
import styles from "./styles.module.css";

interface ImageGalleryPropsType {
  imgArray: Array<{
    alt?: string;
    caption?: string;
    src?: string;
    Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  }>;
  columnWidth?: number;
  gapSize?: number;
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
      className="tw-h-auto tw-max-w-full tw-rounded-lg"
    />
  );
}

export default function ImageGallery({
  imgArray,
}: Readonly<ImageGalleryPropsType>): JSX.Element {
  return (
    <div className={`container`}>
      <div className="tw-columns-1 sm:tw-columns-2 md:tw-columns-3 lg:tw-columns-4 tw-gap-4 tw-mx-auto tw-space-y-3 tw-pb-28">
        {imgArray.map((item) => (
          <div className="tw-break-inside-avoid" key={uniqid()}>
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
