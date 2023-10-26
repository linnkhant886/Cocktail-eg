import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Isload from "../Components/Loading";


const SingleCock = () => {
  const { id } = useParams();
  const [cocktail, Setcocktail] = useState([]);
  const [Loading,SetLoading] = useState(true)


  const fetchdata = async () => {

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { drinks } = await response.json();
    // console.log({drinks})
    Setcocktail(drinks[0]);
    console.log(drinks[0]);
    SetLoading(false)
  };

  useEffect(() => {
    fetchdata();
  }, []);


  if (Loading) {
    return <Isload/>
  }
  
  return (
    <div className=" flex flex-col justify-center items-center gap-6  mt-24 ">
      <div className=" space-y-3">
        <Link to="/">
          <button class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-1 px-4 border border-blue-700 rounded">
            Back to Home
          </button>
        </Link>
        <h1 className=" font-bold text-center text-2xl">
          {" "}
          {cocktail.strDrink}
        </h1>
      </div>

      <div className=" flex items-center gap-10 w-[60%]">
        <img src={cocktail.strDrinkThumb} className=" shadow-md border border-teal-200 object-cover h-[370px]" alt="" />

        <div className=" font-thin text-left ">

          <p className=" my-5 p-1  font-mono  ">
            <span className=" my-5 p-1 bg-teal-200 rounded-md">Name:</span> {cocktail.strDrink}
          </p>
          <p className=" my-5 p-1  font-mono  ">
            <span className=" my-5 p-1 bg-teal-200 rounded-md">Catagory:</span> {cocktail.strCategory}
          </p>
          <p className=" my-5 p-1 font-mono ">
            <span className=" my-5 p-1 bg-teal-200 rounded-md">info:</span> {cocktail.strAlcoholic}
          </p>
          <p className=" my-5 p-1 font-mono ">
            <span className=" my-5 p-1 bg-teal-200 rounded-md">glass:</span> {cocktail.strGlass}
          </p>
          <p className=" my-5 p-1 font-mono ">
            <span className=" my-5 p-1 bg-teal-200 rounded-md">instruction:</span> {cocktail.strInstructions}
          </p>

          
          
        </div>
      </div>
    </div>
  );
};

export default SingleCock;
