module.exports = {
  reactStrictMode: false,
  basePath: "/ipoool.io",
  assetPrefix: "/ipoool.io/",
  images: {
    domains: ["storage.googleapis.com"],
  },
  exportPathMap: async function () {
    return {
      "/": {
        page: "/",
      },
    };
  },
};
