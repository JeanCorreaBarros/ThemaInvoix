import React,{useState} from 'react'

const Alert = (props) => {

    const [error,setError]=useState(false)
  return (
    <>
            <div className=" w-2/5 h-2/5 bg-white border-black rounded-xl text-center relative bottom-20">
               <div className="mt-5">
                   <h3>{props.error}</h3>
               </div>
                <button 
                    type="button"
                    onClick={()=>setError(!error)  }
                    className='mt-32 rounded-md ring-2 w-40 h-10 text-sky-400 '
                >
                    Guardar Cambios 
                </button>
            </div>
        </>
  )
}

export default Alert