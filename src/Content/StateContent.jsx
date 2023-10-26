import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import CocktailList from "../Components/CocktailList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [Loading,SetLoading] = useState(false)
  const [Search ,SetSearch] = useState("")
  const [cocktail,Setcocktail] = useState([])


  useEffect( () => {
    fetchdrink()
  },[Search])

const fetchdrink = async() =>{
  SetLoading(true)

  try {
    const response = await fetch(`${url}${Search}`)
    const {drinks} = await response.json()
   
    // console.log(drinks)
    Setcocktail(drinks)
    // SetLoading(true)
     

    if (drinks) {
      Setcocktail(drinks)

    }else{
      Setcocktail([])
    }
    SetLoading(false) 
  } 
  
  catch (error) {
    SetLoading(false)
    console.log(error)    
  }

}
  return <AppContext.Provider value={{
    Loading,
    Search,
    SetSearch,
    
    cocktail


  }}>
    {children}
    </AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };