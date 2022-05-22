import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage";
import Page1Page from "./pages/Page1Page";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Page1Page />} />
      </Routes>
    </BrowserRouter>
  );
}