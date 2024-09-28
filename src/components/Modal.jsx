import React from 'react';
import {createPortal} from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
const Modal = ({isOpen,onClose,children}) => {

  return (
    <>{isOpen &&(
    <> <div
    className="fixed z-50 left-1/2 top-1/2 max-h-72 w-[25vw] bg-white p-4 transform -translate-x-1/2 -translate-y-1/2"
  >
    <div className="flex justify-end">
      <AiOutlineClose onClick={onClose} className="self-end text-2xl" />
    </div>
    {children}
  </div>
  <div
    className="fixed top-0 left-0 z-40 h-screen w-screen backdrop-blur"
    onClick={onClose}
  />
    </>
    )}
    
    </>
)
}

export default Modal
