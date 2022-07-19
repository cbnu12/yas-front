const { createProxyMiddleware } = require("http-proxy-middleware");

const BASE_URL = "http://211.208.125.180:8000/api";

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: BASE_URL,
      changeOrigin: true,
      pathRewrite: (path) => {
        return path.replace(`/api`, "");
      },
    })
  );
};
