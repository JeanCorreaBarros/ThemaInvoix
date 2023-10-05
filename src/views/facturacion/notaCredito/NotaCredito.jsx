import React,{ useState, useEffect } from 'react'
import TableNotasCredito from '../../../components/tablas/TableNotasCredito'
import ModalFiltroFactura from '../../../components/modals/ModalFiltroFactura';


const NotaCredito = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show)
  }
  return (
    <main className="">
      <div className="px-16 mt-5 flex justify-between">
        <h2 className="font-bold text-3xl">Notas Credito</h2>
        <div className='hidden'>
          <button href="#" type="button" class="hidden sm:inline-flex items-center justify-center text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs px-5 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"><svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg><a href="#">Nueva Nota Credito</a></button>
        </div>
      </div>
      <div class="pt-6 px-4">
        <div class="mb-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
          <div class="bg-white h-full shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div class="flex items-center justify-end pb-3 pt-2 pr-2 sticky top-0">
              <div className=' hidden '>
                <button id="dropdownRadioButton" /*onClick={() => handleShow()}*/ data-dropdown-toggle="dropdownRadio" class=" inline-flex items-center w-24 justify-around text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                  <span>Filtro</span>
                  <svg class="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              </div>
            </div>
            <TableNotasCredito />
          </div>
        </div>
      </div>
      <ModalFiltroFactura show={show} setShow={setShow} />
    </main>
  )
}

export default NotaCredito