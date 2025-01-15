import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
