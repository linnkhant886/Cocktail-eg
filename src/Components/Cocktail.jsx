import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ strDrink, strDrinkThumb, strAlcoholic, strGlass,idDrink }) => {
  return (
    <div
      className=" mx-auto   shadow-lg border  border-teal-200 p-4 cursor-pointer 
    hover:scale-110 transition-all ease-out duration-300"
    >
      <img src={strDrinkThumb} className=" h-[270px] object-cover" alt="" />
      <div className=" space-y-2 pt-4 pb-3">

        <h1 className=" font-bold ">{strDrink}</h1>
        <h2 className=" font-semibold italic  ">{strGlass}</h2>

        <h1 className=" font-thin text-gray-600">{strAlcoholic} </h1>
      </div >

      <Link to={`/cocktail/${idDrink}`}>
        <button class="bg-teal-600  hover:bg-teal-700 text-white font-bold py-1 px-4 border border-blue-700 rounded">
          Detail
        </button>
      </Link>
    </div>
  );
};

export default Cocktail;
