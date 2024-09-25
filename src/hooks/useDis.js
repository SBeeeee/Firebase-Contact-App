import { useState } from "react";
import React from 'react'

const useDis = () => {
    const [isopen, setIsopen] = useState(false);
    const onOpen = () => {
        setIsopen(true);
    }
    const onClose = () => {
        setIsopen(false)
    }
    return {onClose,onOpen,isopen}
}

export default useDis
