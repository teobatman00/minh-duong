import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import images from "./_gallery_";
import React, { Suspense } from "react";

function ImageGalleryHeader(): JSX.Element {
  return (
    <header className="tw-py-16">
      <div className="container tw-text-center">
        <Heading
          as="h1"
          className={`lg:tw-text-5xl md:tw-text-4xl tw-text-2xl`}
        >
          Thư viện hình ảnh
        </Heading>
        <p className="hero__subtitle tw-mt-6 tw-italic">
          Danh sách hình ảnh
        </p>
      </div>
    </header>
  );
}

const ImageGallery = React.lazy(() => import('@site/src/components/shared/ImageGallery'))

export default function ImgGallery(): JSX.Element {
  return (
    <Layout title="Thư viện hình ảnh" description="Thư viện hình ảnh">
      <ImageGalleryHeader />
      <main>
        <Suspense fallback={<div className="container">Loading...</div>}>
          <ImageGallery imgArray={images} />
        </Suspense>
      </main>
    </Layout>
  );
}
