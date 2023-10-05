import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-buttons/js/dataTables.buttons";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons-dt/css/buttons.dataTables.css";
import "datatables.net-dt/css/jquery.dataTables.css";
/*import pdfMake from "pdfmake/build/pdfmake";*/
/*import pdfFonts from "pdfmake/build/vfs_fonts";*/



function DataTables({ data, setFechaInit, setFechaFin, fechaInit,fechaFin,filename }) {
  /*pdfMake.vfs = pdfFonts.pdfMake.vfs;*/

  const tableRef = useRef(null);
  if (Array.isArray(data)) {
    console.log("es un array")
  } else {
    console.log("No es un array")
  }

  const tableData = data.map(objeto => Object.values(objeto));
  const handleFechaInit = (e) => {
    setFechaInit(e.target.value)
  }
  const handleFechaFin = (e) => {
    setFechaFin(e.target.value)
  }



  useEffect(() => {
    if (!data || !Array.isArray(data)) return; // Comprobar antes de usar la data

    if ($.fn.DataTable.isDataTable("#myTable")) {
      // Si ya existe, destruir la tabla para poder volver a inicializarla
      $("#myTable").DataTable().destroy();
    }

    $(tableRef.current).dataTable({
      deferRender: true,
      scroller: true,
      scrollX: true,
      autoWidth: false,
      pageLength: 10,
      columns: [
        { title: "Numero" },
        { title: "Cliente" },
        { title: "Creacion" },
        { title: "Vencimiento" },
        { title: "Total" },
        { title: "Cobrado" },
        { title: "Por cobrar" },
        { title: "Estado" },
        { title: "Acciones" },
      ],
      data: tableData,
      language: {
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ elementos por página",
        zeroRecords: "¡Aun no has creado tu primera!",
        info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
        infoEmpty: "Mostrando 0 a 0 de 0 registros",
        infoFiltered: "(filtrado de _MAX_ registros totales)",
        paginate: {
          first: "Primera",
          last: "Última",
          next: "Siguiente",
          previous: "Anterior",
        },
      },
      dom: "Bfrtip",
      buttons: ["copy", "excel", "csv", "pdf", "print"],
    });
  }, [data]);


  return (
    <>
      <div className=" flex justify-start mb-5 gap-3">
        <div className="flex flex-col">
          <label htmlFor=""> Fecha Creacion</label>
          <input className="border border-sky-500 rounded-[2px] px-2" onChange={(e) => handleFechaInit(e)} type="date" placeholder="Fecha Init" value={fechaInit} />
        </div>
        <div className="flex flex-col">
          <label htmlFor=""> Fecha Vencimiento</label>
          <input className="border border-sky-500 rounded-[2px] px-2" onChange={(e) => handleFechaFin(e)} type="date" placeholder="Fecha Fin" value={fechaFin} />
        </div>
        <div className="flex justify-center items-center mt-5">
          {/*<BtnExcel data={data} filename={filename}/>*/}
        </div>
      </div>
      <table ref={tableRef} id="myTable" className="w-full stripe"></table>
    </>
  );
}

export default DataTables;