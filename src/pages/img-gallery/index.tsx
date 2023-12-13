import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import images from "./_gallery_";
import ImageGallery from "@site/src/components/shared/ImageGallery";

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
      </div>
    </header>
  );
}

export default function ImgGallery(): JSX.Element {
  return (
    <Layout title="Thư viện hình ảnh" description="Thư viện hình ảnh">
      <ImageGalleryHeader />
      <main>
        <ImageGallery imgArray={images} />
      </main>
    </Layout>
  );
}
