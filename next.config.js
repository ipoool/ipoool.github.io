module.exports = {
  reactStrictMode: false,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    domains: ["storage.googleapis.com"],
  },
  //   exportPathMap: async function () {
  //     return {
  //       "/": {
  //         page: "/",
  //       },
  //     };
  //   },
};
