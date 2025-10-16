import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/home.tsx";


const Router = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
          </Routes>
      </BrowserRouter >
    </>
  );
};

export default Router;