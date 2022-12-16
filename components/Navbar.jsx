const Header = () => {
    return ( 
        <nav className="flex justify-between p-5 sticky">
            <h1 className="text-[#ff9900] text-2xl font-semibold">Foodie</h1>
            <div className="links">
                <a href="/" className="text-gray-500 px-4 py-3 rounded-md transition delay-200 hover:text-[#fff] hover:bg-[#ff9900]">Home</a>    
                <a href="/post" className="text-gray-500 px-4 py-3 rounded-md transition delay-200 hover:text-[#fff] hover:bg-[#ff9900]">Post</a>
                <a href="/search" className="text-gray-500 px-4 py-3 rounded-md transition delay-200 hover:text-[#fff] hover:bg-[#ff9900]">Search</a>
                <a href="/filter" className="text-gray-500 px-4 py-3 rounded-md transition delay-200 hover:text-[#fff] hover:bg-[#ff9900]">Filter</a>
            </div> 
        </nav>
     );
}
 
export default Header;  