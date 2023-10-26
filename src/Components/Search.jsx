import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../Content/StateContent";

const Search = () => {
  const { SetSearch } = useGlobalContext();

  const searchvalue = useRef("")

  const SubmitHandler = (e) =>{
    e.preventDefault()
  }
   
  
  // useEffect(()=> {
  //   searchvalue.current.focus()
  //  },[])
  
  const focusInput = () => {
    searchvalue.current.focus();
  };

  const CurrentChange = () =>{
    const app = searchvalue.current.value
    SetSearch(app)
  }
  return (
    <div
      class="relative mb-3 w-[50%] mx-auto border border-teal-100  rounded-lg p-5 shadow-lg  mt-28 bg-slate-100"
      data-te-input-wrapper-init
    >
      <div>
        <form action=""  className=" text-center " onClick={focusInput} onSubmit={SubmitHandler}>

        <label  className="  text-2xl  font-semibold ">
            Search Your Favourite Cocktail
          </label>
          <input
            
            ref={searchvalue}
            onChange={CurrentChange}
            type="search"
            class="peer mt-6 border  border-teal-200 block  bg-gray-50 min-h-[auto] 
            w-full rounded  bg-transparent px-3 py-[0.32rem] 
             "
            
             placeholder="Search"
          />
          
        </form>
      </div>
    </div>
  );
};

export default Search;
