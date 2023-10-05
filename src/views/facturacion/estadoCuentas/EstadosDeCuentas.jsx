import React from 'react'
import TablaPagosRecibidos from '../../../components/tablas/TablaPagosRecibidos';
import TableEstadoCuentas from '../../../components/tablas/TableEstadoCuentas';

const EstadosDeCuentas = () => {
  return (
    <main className="">
      <div className="px-16 mt-5 flex justify-between">
        <h2 className="font-bold text-3xl">Estado de Cuentas</h2>
        <div>
          <button href="/invoice/add" type="button" class="hidden sm:inline-flex items-center justify-center text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs px-5 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"><svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg><a href="/invoice/add">Nueva Factura</a></button>
        </div>
      </div>
      <div class="pt-6 px-4">
        <div class="mb-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
          <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <TableEstadoCuentas/>
          </div>
        </div>

      </div>
    </main>
  )
}

export default EstadosDeCuentas