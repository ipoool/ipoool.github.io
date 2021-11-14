module.exports = {
  reactStrictMode: false,
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
