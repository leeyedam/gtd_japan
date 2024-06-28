require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./sitemapRoutes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return new Sitemap(router)
    .build("https://gtdgolf.co.kr")
    .save("./public/sitemap.xml"); // sitemap.xml 파일이 생성될 위치입니다.
}

generateSitemap();
