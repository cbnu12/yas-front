import { createProxyMiddleware } from "http-proxy-middleware";

const BASE_URL = "http://211.208.125.180:8000/api";

module.exports = (app: any) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: BASE_URL,
      changeOrigin: true,
      //   pathRewrite: {
      //     "^/api": "",
      //   },
    })
  );
};
