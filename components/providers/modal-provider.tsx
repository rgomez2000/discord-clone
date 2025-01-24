"use client"

import { useEffect, useState } from "react";

import { CreateServerModal } from "@/components/modals/create-server-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    
    //stops rendering the models on the server side to stop hydration errors
    useEffect(() => {
        setIsMounted(true)
    }, []);
    
    if (!isMounted) {
        return null;
    }
   
    return (
        <>
            <CreateServerModal />
        </>
    )
}