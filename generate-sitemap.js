import { SitemapStream, streamToPromise } from "sitemap";
import { writeFile } from "fs/promises";

const siteUrl = "https://www.thecoolaxolotl.com";

const pages = [
  "/",
  "/parcours",
  "/portfolio",
  "/prestations",
  "/contact",
  "/mentions-légales",
  "/Politique-de-confidentialité",
];

const sitemap = new SitemapStream({ hostname: siteUrl });

pages.forEach((page) => {
  sitemap.write({ url: page, changefreq: "daily", priority: 0.8 });
});

sitemap.end();

streamToPromise(sitemap).then(async (data) => {
  await writeFile("public/sitemap.xml", data);
  console.log("✅ Sitemap généré !");
});
