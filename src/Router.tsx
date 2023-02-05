import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SelectedPost } from "./pages/SelectedPost";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/post/:postId" element={<SelectedPost />}/>
    </Routes>
  )
}