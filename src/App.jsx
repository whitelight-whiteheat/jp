  import { useState, useEffect } from "react";
import Splash from "./components/splash screen/Splash";
import Main from "./pages/Main";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./components/homepage/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Main />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Route>
    )
  )
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  }, []);

  return (
    <>
      {loading ?  <Splash />  :  (<RouterProvider router={router}/>)}
    </>
    
  );
}


export default App;
