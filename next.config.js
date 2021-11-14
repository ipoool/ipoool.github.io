module.exports = {
  reactStrictMode: false,
  assetPrefix: "/",
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
