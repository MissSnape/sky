import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
