const imgModules = import.meta.glob(
  "/src/assets/images/*.jpg",
  {
    eager: true,
    import: "default"
  }
);

function getImgUrl(fileName) {
  const path = `/src/assets/images/${fileName}.jpg`;
  return imgModules[path] || "/empty.jpg";
}

const svgModules = import.meta.glob(
  "../assets/icons/*.svg",
  {
    eager: true,
    query: "?react",
    import: "default"
  }
);

const svgMap = Object.fromEntries(
  Object.entries(svgModules).map(([path, component]) => [
    path.split("/").pop().replace(".svg", ""),
    component
  ])
);

export { getImgUrl, svgMap };