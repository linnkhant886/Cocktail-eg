import React from "react";
import { useGlobalContext } from "../Content/StateContent";
import Isload from "./Loading";
import Cocktail from "./Cocktail";

const CocktailList = () => {
  const { Loading, cocktail } = useGlobalContext();
  // console.log(cocktail);

  if (Loading) {
    return <Isload></Isload>;
  }
  if (cocktail.length < 1) {
    return (
      <h2 className=" h-full text-center font-semibold  mt-8">
        "There is no Cocktail Match with you result"
      </h2>
    );
  }
  return (
    <div>
      <h1 className=" font-bold  text-2xl text-center mb-10">Cocktail</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10  items-center md:w-[60%] mx-auto">
        {cocktail.map((cocklist) => {
          return <Cocktail key={cocklist.id} {...cocklist}></Cocktail>;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
