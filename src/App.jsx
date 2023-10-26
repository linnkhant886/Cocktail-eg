import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SingleCock from "./Pages/SingleCock";
import Error from "./Pages/Error";

const App = () => {
  return (
    <div>
      <Navbar />

      {/* <h1 className="text-3xl font-bold text-red-500">Hello world!</h1> */}
      {/* <Router> */}
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/cocktail/:id' element={<SingleCock></SingleCock>} />
        <Route path='*' element={<Error></Error>} />
      </Routes>
    {/* </Router> */}


      

    </div>
  );
};

export default App;
