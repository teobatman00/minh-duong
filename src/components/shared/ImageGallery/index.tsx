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
  const columns = [[], [], [], []];
  imgArray.forEach((item, i) => columns[i % 4].push(item));

  return (
    <div
      className={`container tw-grid tw-grid-cols-1 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-4 tw-my-4`}
    >
      {columns.map((column, i) => (
        <div key={uniqid()} className="tw-grid tw-gap-4">
          {column.map((item) => (
            <div key={uniqid()}>
              <figure className={styles.gallery_img_figure}>
                {renderImage(item)}
                {item.caption ? <figcaption>{item.caption}</figcaption> : ""}
              </figure>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
