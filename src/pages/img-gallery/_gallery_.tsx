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
    Svg: require("@site/static/img/gallery/undraw_docusaurus_mountain.svg").default
  },
  {
    alt: "Me",
    caption: "Me",
    src: require("@site/static/img/personal/me.jpg").default
  },
  {
    alt: "Docusaurus Tree",
    caption: "Docusaurus Tree",
    Svg: require("@site/static/img/gallery/undraw_docusaurus_tree.svg").default
  },
  {
    alt: "Me",
    caption: "Me",
    src: require("@site/static/img/personal/me.jpg").default
  },
  {
    alt: "Me",
    caption: "Me",
    src: require("@site/static/img/personal/me.jpg").default
  },
  {
    alt: "Me",
    caption: "Me",
    src: require("@site/static/img/personal/me.jpg").default
  },
  {
    alt: "Me",
    caption: "Me",
    src: require("@site/static/img/docusaurus.png").default
  },
]

export default images;