import React,{useState} from 'react'

const ModalPassword = () => {
    
   const [active,setActive]= useState(false)
    
   const handleActive = () => {
       console.log(active)
       setActive(!active)
   }

    
    return (
        <div className={`bg-gradient-to-r from-slate-500 w-full ${active ? 'hidden' :''} h-screen grid place-items-center absolute z-10`}>
            <div className=" w-2/5 h-2/5 bg-white border-black rounded-xl text-center relative bottom-20">
                MODAL PASSWORD
                <button onClick={handleActive} >pulse aqui</button>
            </div>
        </div>
    )
}

export default ModalPassword
