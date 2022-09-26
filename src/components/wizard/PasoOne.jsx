import React from 'react'

function WindowEmergente(props) {
    const handleNext = ()=>{
        props.siguientePaso();
    }

  return (
    <div className="w-full h-full flex justify-center items-center absolute top-0 left-0 bottom-0 z-[9999] bg-transparent backdrop-blur-sm  ">
        <div className="w-[450px] h-[500px] flex flex-col justify-evenly bg-white border rounded-lg  border-solid border-lime-600">
            <div className=" w-full flex flex-col  items-center text-center">
                <h1 className="font-bold text-2xl">¡Hola 😊, te damos la bienvenida!</h1>
                <p className="px-8">Llena estos campos y ayúdanos a mejorar tu experiencia en GenomaX MD.</p>
            </div>
            <form action="" className="flex flex-col justify-center items-center">
              <div className="flex flex-col w-9/12 h-16 ">
                <input type="text" className="mt-1 h-full px-3 py-2 border border-solid border-slate-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  placeholder="Nombres" />
              </div>
              <div className="flex flex-col w-9/12 h-16 ">
                <input type="text" className="mt-1 h-full px-3 py-2 border border-solid border-slate-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  placeholder="Apellidos" />
              </div>
              <div className="flex flex-col w-9/12 h-16 mt-5">
                <input type="text" className="mt-1 h-full px-3 py-2 border border-solid border-slate-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  placeholder="Documento" />
              </div>
              <div className="flex flex-col w-9/12 h-16 mt-5">
                <select className="mt-1 h-full px-3 py-2 border border-solid border-slate-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" name="" id="">
                  <option selected disabled hidden>Especialidad</option>
                  <option value="">Medicina General</option>
                  <option value="">Odontologia</option>
                  <option value="">Ginecología y obstetricia o tocología</option>
                  <option value="">Otorrinolaringologo</option>
                  <option value="">Oftalmología</option>
                </select>
              </div>
            </form>
            <div className="flex justify-around">
              <button className="w-9/12 h-10 bg-lime-600 shadow-xl text-white border hover:bg-lime-500 border-solid border-lime-700 rounded-md" onClick={handleNext}>Siguiente</button>
            </div>
        </div> 
    </div>
  )
}

export default WindowEmergente
