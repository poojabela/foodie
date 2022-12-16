import { db } from '../db'

export const getServerSideProps = async() => {
  const recipes = await db.recipe.findMany()

  console.log(recipes)
  
  return {
    props: {
      recipes: JSON.parse(JSON.stringify(recipes))
    }
  }
}


export default function Home({ recipes }) {
  return (
    <div className="mx-10 mt-3 grid grid-cols-3 gap-[10px]">
      { recipes.map(recipe => (
        <a href={`/details/${recipe.id}`} key={recipe.id}>
          <div className='px-10 py-5 mb-4 bg-[rgba(191,188,188,0.1)] rounded-lg hover:shadow-[5px_5px_8px_rgba(193,191,191)]'>
            <h1 className='text-xl text-[#ff9900] mb-3'>{ recipe.title }</h1>
            <h2 className='mb-[6px]'>Ingredients:</h2>
            <p className='max-h-[70px] overflow-hidden'>{ recipe.ingredients }</p>
          </div>
        </a> 
      ))}
    </div>
  )
}
