type Images = {
  alt?: string;
  caption?: string;
  src?: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
}

const images: Images[] = [
  {
    alt: "Docusaurus Mountain",
    caption: "Docusaurus Mountain",
    Svg: require("@site/static/img/gallery/undraw_docusaurus_mountain.svg")
      .default,
  },
  {
    alt: "Me",
    caption: "Me",
    src: require("@site/static/img/personal/me.jpg").default,
  },
  {
    alt: "Me",
    caption: "Món ăn Aeon Mall",
    src: require("@site/static/img/personal/25-12-14-aeonmall/photo_2025-12-14_22-15-49.jpg")
      .default,
  },
  {
    alt: "Me",
    caption: "Selfie Aeon Mall",
    src: require("@site/static/img/personal/25-12-14-aeonmall/photo_2025-12-14_22-15-53.jpg")
      .default,
  },
];

export default images;