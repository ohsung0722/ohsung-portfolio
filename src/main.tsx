import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppProviders } from "./app/providers";
import { App } from "./App";

function normalizeBasename(baseUrl: string) {
  // Vite base가 "./"이면 BASE_URL이 "/./" 같은 값으로 나오는 경우가 있어서 정리
  if (baseUrl === "./" || baseUrl === "/./" || baseUrl === "/.") return "/";
  // 보통 "/ohsung-portfolio/" 형태 -> Router basename은 끝 슬래시 없이도 OK
  if (baseUrl.endsWith("/")) return baseUrl.slice(0, -1);
  return baseUrl;
}

const basename = normalizeBasename(import.meta.env.BASE_URL);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <AppProviders>
        <App />
      </AppProviders>
    </BrowserRouter>
  </React.StrictMode>,
);
