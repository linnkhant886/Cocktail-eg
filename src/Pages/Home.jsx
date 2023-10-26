import React from 'react'
import Search from "../Components/Search"
import CocktailList from "../Components/CocktailList"

const Home = () => {
  return (
    <div className=' flex flex-col justify-center '>

      <Search></Search>
      <CocktailList></CocktailList>
    </div>
  )
}

export default Home