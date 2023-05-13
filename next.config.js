/** @type {import('next').NextConfig} */
const path = require("path");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  mode: "production",
  disable: false,
});

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "api.lorem.space",
      "placeimg.com",
      "wixmp.com",
      "img.freepik.com",
      "empresas.blogthinkbig.com",
      "cdn.pixabay.com",
      "c8.alamy.com",
      "scontent.fxry1-2.fna.fbcdn.net",
      "picsum.photos",
      "m.media-amazon.com",
      "pixabay.com",
      "images.pexels.com",
      "images.unsplash.com",
      "encrypted-tbn0.gstatic.com",
      "i.stack.imgur.com",
      "khersonregion.com",
      "www.pexels.com",
      "iso.500px.com",
      "www.google.com",
      "images.app.goo.gl",
      "greenforest.com.ua",
      "www.visitdubai.com",
      "upload.wikimedia.org",
      "cdn.britannica.com",
      "hips.hearstapps.com",
      "i.stack.imgur.com",
      "static.wikia.nocookie.net",
      "hips.hearstapps.com",
      "static.wikia.nocookie.net",
      "i.pinimg.com",
      "static.bhphoto.com",
      "sopas.com",
      "shoes.com",
      "adidas.com",
      "placeimge.com",
      "elaco.vteximg.com.br",
    ],
  },
};

module.exports = withPWA(nextConfig);
