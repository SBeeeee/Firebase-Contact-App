import React,{useState,useEffect} from 'react';
import NoContact from './components/NoContact';
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';
import { MdDelete } from "react-icons/md";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiContactsFill } from "react-icons/ri";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { collection, onSnapshot } from "firebase/firestore"; 
import {db} from "./config/firebase";
import { FaRegEdit } from "react-icons/fa";
import AddandUpdateContac from './components/AddandUpdateContac';
import useDis from './hooks/useDis';
function App() {
const [contacts,setContacts]=useState([]);
const {onClose,onOpen,isopen}=useDis();
useEffect(()=>{
  const getContacts=async () =>{
    try{
      const ContactRef=collection(db,"Contact");
      //const ContactSnapshot=await getDocs(ContactRef);
      onSnapshot (ContactRef,(snapshot)=>{
        const contactLists=snapshot.docs.map((doc)=>{
          return{
            id: doc.id,
            ...doc.data()
          };
        });
        setContacts(contactLists);
      })
      
     
    }catch(error){
      console.log(error);
    }
  }
  getContacts();
},[])
const filterContacts=(e)=>{
  const value=e.target.value;
  const ContactRef=collection(db,"Contact");
  onSnapshot (ContactRef,(snapshot)=>{
    const contactLists=snapshot.docs.map((doc)=>{
      return{
        id: doc.id,
        ...doc.data()
      };
    });
    const filtercontacts =contactLists.filter((element)=>
      element.name.toLowerCase().includes(value.toLowerCase())
    )
    setContacts(filtercontacts);
  })
}
  return (
    <>
    <div className="max-w-96 m-auto">
     <Navbar/>
     <Search onOpen={onOpen} filtercontacts={filterContacts}/>
     <div>
     <div>
    {contacts.length > 0 ? (
        contacts.map((element) => (
            <ContactCard key={element.id} element={element} />
        ))
    ) : (
        <NoContact />
    )}
</div>
    </div>
    </div>
   <AddandUpdateContac isopen={isopen} onClose={onClose}/>
   <ToastContainer/>
    </>
  )
}

export default App
