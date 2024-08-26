import { useContext, useState } from "react";
import { createContext } from "react";
import Toast from '../components/Toast'

const AppContext=createContext()

export const AppContextProvider=({children})=>{
    const [toast,setToast]=useState()
    const showToast=({toast})=>{
        setToast(toast)
        console.log()
    }

    return(

    <AppContext.Provider value={{showToast}}>
      {toast && ( <Toast type={toast.type} onClose={()=>setToast()} message={toast.message} />)}
        {children}
    </AppContext.Provider>
    )
}

export const useAppContext=()=>{
    const context=useContext(AppContext)
    return context
}