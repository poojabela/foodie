import Router from "next/router";

const Post = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);

        fetch('api/create', {
            method: 'POST',
            body: JSON.stringify({
                title: formData.get('title'),
                ingredients: formData.get('ingredients'),
                description: formData.get('description'),
                type: formData.get('type')
            })
        }).then(() => {
            Router.push('/')
        });
    }

    return ( 
        <div className="text-left my-0 mx-auto max-w-[400px]">
            <h1 className="text-center text-[30px] mb-[30px] text-[#ff9900]">Post your recipe</h1>

            <form onSubmit={ handleSubmit }>

                <label htmlFor="title" className="text-[18px] mb-1">Title:</label>
                <input 
                type="text"
                name="title"
                id="title"
                placeholder="Enter the title"
                required
                className="block py-[5px] px-[90px] mb-5 bg-[rgba(191,188,188,0.1)]"
                />

                <label htmlFor="ingredients" className="text-[18px] mb-1">Ingredients</label>
                <textarea type="text"
                name="ingredients"
                id="ingredients"
                placeholder="Enter the ingerdients"
                required
                className="block py-[90px] px-[100px] mb-5 bg-[rgba(191,188,188,0.1)]"
                />

                <label htmlFor="description" className="text-[18px] mb-1">Instruction:</label>
                <textarea type="text"
                name="description"
                id="description"
                placeholder="Enter the instruction"
                required
                className="block py-[90px] px-[100px] mb-5 bg-[rgba(191,188,188,0.1)]"
                />

                <label htmlFor="type" className="text-[18px] mb-1 block">Type of dish:</label>  

                <input
                type="radio"
                name="type"
                id="veg"
                value="veg"
                required
                />
                <label for="veg" className="ml-1 mr-4">Veg</label>

                <input
                type="radio"
                name="type"
                id="non-veg"
                value="non-veg"
                required
                />
                <label for="non-veg" className="ml-1">Non-Veg</label>

                <button type="submit" className="block py-3 px-5 bg-[#ff9900] mt-5 rounded">Post</button>

            </form>
        </div>
     );
}
 
export default Post;