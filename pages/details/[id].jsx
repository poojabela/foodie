import { db } from '../../db'

export const getServerSideProps = async({ params } ) => {
    const recipe = await db.recipe.findUnique({
        where: {id: params.id}
    });

    return {
        props: {
            recipe: JSON.parse(JSON.stringify(recipe))
        }
    }
}

const Details = ({ recipe }) => {
    return ( 
        <div className="mx-10 mt-3">
            <h1 className='text-[30px] text-center my-5 text-[#ff9900]'>{ recipe.title }</h1>
            <h2 className='text-[20px] mb-[2px]'>Ingridents:</h2>
            <p className='mb-[30px]'>{ recipe.ingredients }</p>
            <h2 className='text-[20px] mb-[2px]'>Instruction:</h2>
            <p>{ recipe.description }</p>
        </div>
     );
}
 
export default Details;