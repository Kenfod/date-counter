module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      // Applies your logic: "cheap-module-source-map" in dev, "source-map" in prod
      webpackConfig.devtool =
        env === "development" ? "cheap-module-source-map" : "source-map";

      return webpackConfig;
    },
  },
};
