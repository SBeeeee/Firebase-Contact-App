import { FiSearch } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
function Search({onOpen,filtercontacts}){
    return(<>
    <div className="flex relative">
    <FiSearch className="absolute text-white text-2xl ml-3 mt-1 "/>
        <input onChange={(e)=>filtercontacts(e)} type="search" className="border-2 border-white w-80 ml-2 rounded-lg h-[6.5vh] text-white bg-transparent pl-6"></input>
        <CiCirclePlus onClick={onOpen} className="text-4xl ml-2 text-black bg-white rounded-full cursor-pointer"/>
        </div>
    </>)
}
export default Search;