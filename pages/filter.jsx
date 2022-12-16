import { db } from '../db'
import { useState } from 'react'

export const getServerSideProps = async() => {
    const recipes = await db.recipe.findMany()
  
    console.log(recipes)
    
    return {
      props: {
        recipes: JSON.parse(JSON.stringify(recipes))
      }
    }
  }

const Search = ({ recipes }) => {

    const [searchResult, setSearchResult] = useState([])

    const handleSearch = async(e) => {
        const type = e.target.value;

        if (type === "all") {
            setSearchResult(recipes)
        } else {
            setSearchResult(recipes.filter((r) => r.type === type))
        }
    }

    return ( 
        <>
            <div className="text-left my-0 mx-auto max-w-[400px]">
                <select id="type" onChange={handleSearch} className='bg-[rgba(255,255,255,0.2)]'>
                    <option value="all" className='text-[rgb(0,0,0)]'>All Types</option>
                    <option value="veg" className='text-[rgb(0,0,0)]'>Vegetarian</option>
                    <option value="non-veg" className='text-[rgb(0,0,0)]'>Non-Vegetarian</option>
                </select>
            </div>

            <div className="mx-10 mt-10 grid grid-cols-3 gap-[10px]">
                { searchResult.map(recipe => (
                    <a href={`/details/${recipe.id}`} key={recipe.id}>
                    <div className='px-10 py-5 mb-4 bg-[rgba(191,188,188,0.1)] rounded-lg hover:shadow-[5px_5px_8px_rgba(193,191,191)]'>
                        <h1 className='text-xl text-[#ff9900] mb-3'>{ recipe.title }</h1>
                        <h2 className='mb-[6px]'>Ingredients:</h2>
                        <p className='max-h-[70px] overflow-hidden'>{ recipe.ingredients }</p>
                    </div>
                    </a> 
                ))}
            </div>
        </>
     );
}
 
export default Search;