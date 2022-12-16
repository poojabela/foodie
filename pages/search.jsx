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
        e.preventDefault();

        const formData = new FormData(e.target)
        const q = formData.get('search').toLocaleLowerCase();

        const result = await recipes.filter(recipe => recipe.title.toLowerCase().includes(q))
        console.log(result)
        setSearchResult(result)
    }

    return ( 
        <div className="text-left my-0 mx-auto max-w-[400px]">
            <form onSubmit={handleSearch}>
                <input 
                type="search" 
                id="search"
                name='search'
                placeholder="Enter recipe name"
                className='px-[60px] py-[5px] bg-[rgba(255,255,255,0.2)]'
                />
                <button type='submit' className='px-[10px] py-[5px] bg-[#ff9900]'>search</button>
            </form>

            <div className="mx-10 mt-3 grid grid-cols-3 gap-[10px]">
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
        </div>
     );
}
 
export default Search;