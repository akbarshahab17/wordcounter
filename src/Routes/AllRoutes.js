import { Routes, Route } from "react-router-dom";
import { ChuckNorris } from "../pages/ChuckNorris";
import { PageNotFound } from "../pages/PageNotFound";
import { Home } from "../pages/Home";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chucknorrisjokes" element={<ChuckNorris />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>     
    </>
  )
}
