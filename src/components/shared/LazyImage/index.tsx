import React from "react";

export type LazyImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** Above-the-fold / LCP images: skip lazy loading. */
  eager?: boolean;
};

/**
 * Shared img defaults for deferred loading + async decode.
 * Pass eager for hero/LCP images so the browser fetches them immediately.
 */
export default function LazyImage({
  eager = false,
  loading,
  decoding,
  ...rest
}: LazyImageProps): JSX.Element {
  return (
    <img
      loading={eager ? "eager" : loading ?? "lazy"}
      decoding={eager ? "async" : decoding ?? "async"}
      {...rest}
    />
  );
}
