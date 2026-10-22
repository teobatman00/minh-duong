import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import React, { Suspense } from "react";
import pageStyles from "@site/src/components/shared/pageLayout.module.css";

function ImageGalleryHeader(): JSX.Element {
  return (
    <header className={pageStyles.header}>
      <div className="container tw-text-center">
        <Heading
          as="h1"
          className={`${pageStyles.title} lg:tw-text-5xl md:tw-text-4xl tw-text-3xl`}
        >
          Thư viện hình ảnh
        </Heading>
        <p className={`${pageStyles.subtitle} ${pageStyles.measureWide}`}>
          Danh sách hình ảnh
        </p>
      </div>
    </header>
  );
}

/** Defer both the gallery UI and the image module until the page needs them. */
const DeferredImageGallery = React.lazy(async () => {
  const [{ default: ImageGallery }, { default: images }] = await Promise.all([
    import("@site/src/components/shared/ImageGallery"),
    import("./_gallery_"),
  ]);
  return {
    default: function GalleryWithImages() {
      return <ImageGallery imgArray={images} />;
    },
  };
});

export default function ImgGallery(): JSX.Element {
  return (
    <Layout title="Thư viện hình ảnh" description="Thư viện hình ảnh">
      <ImageGalleryHeader />
      <main className={pageStyles.main}>
        <Suspense
          fallback={
            <div
              className={`container tw-py-12 tw-text-center ${pageStyles.mutedText}`}
            >
              Đang tải thư viện…
            </div>
          }
        >
          <DeferredImageGallery />
        </Suspense>
      </main>
    </Layout>
  );
}
