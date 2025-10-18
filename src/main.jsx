import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "antd/dist/reset.css";
import QueryProvider from "./app/QueryProvider";
import ListingsPage from "./entities/listings/ListingsPage";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListingsPage />} />
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  </React.StrictMode>
);
