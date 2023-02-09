import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/home";

export const MyRouter = () => {
  return (
    <Routes>
      <Route index element={<Homepage />} />
    </Routes>
  );
};
