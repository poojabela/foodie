import Link from "next/link";

const Header = () => {
    return ( 
        <nav className="flex justify-between p-5 sticky">
            <h1 className="text-[#ff9900] text-2xl font-semibold">Foodie</h1>
            <div className="links">
                <Link href="/" className="text-gray-500 px-4 py-3 rounded-md transition delay-200 hover:text-[#fff] hover:bg-[#ff9900]">Home</Link>    
                <Link href="/post" className="text-gray-500 px-4 py-3 rounded-md transition delay-200 hover:text-[#fff] hover:bg-[#ff9900]">Post</Link>
                <Link href="/search" className="text-gray-500 px-4 py-3 rounded-md transition delay-200 hover:text-[#fff] hover:bg-[#ff9900]">Search</Link>
                <Link href="/filter" className="text-gray-500 px-4 py-3 rounded-md transition delay-200 hover:text-[#fff] hover:bg-[#ff9900]">Filter</Link>
            </div> 
        </nav>
     );
}
 
export default Header;  