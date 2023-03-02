import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Page1 from "./pages/Page1.js";
import Page404 from "./pages/Page404.js";
import PostDetails from "./pages/PostDetails.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="article/:id" element={<PostDetails/>}/>
      <Route path="/page1" element={<Page1 />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App;

