import { MdDelete } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import {db} from "../config/firebase";
import {deleteDoc,doc} from "firebase/firestore";
import useDis from "../hooks/useDis";
import AddandUpdateContac from "./AddandUpdateContac";
import {toast} from "react-toastify";
function ContactCard({element}){
  const {onClose,onOpen,isopen}=useDis();
  const deletecontact = async (id)=>{
    try{
      await deleteDoc(doc(db,"Contact",id));
      toast.success("Contact Deleted Succesfully");
    }catch(error){
      console.log(error);
    }
  }
    return(<>
    <div key={element.id} className="flex justify-between bg-amber-200 rounded-lg max-w-96 m-2">
        <RiContactsFill className="text-3xl"/><div><div className="text-2xl">{element.name}</div><div >{element.email}</div></div><FaRegEdit onClick={onOpen} className="text-3xl cursor-pointer" />
        <MdDelete onClick={()=>deletecontact(element.id)} className="text-3xl" />
      </div>
      <AddandUpdateContac isupdate element={element} isopen={isopen} onClose={onClose}/>
    </>)
}
export default ContactCard;