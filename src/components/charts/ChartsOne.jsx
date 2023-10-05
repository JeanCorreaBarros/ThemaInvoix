import React from "react";
import ReactApexChart from 'react-apexcharts';



/*const ChartsOne = ({ventas}) => {
    const options = {
        chart: {
            id: 'basic-bar'
        },
        xaxis: {
            categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']
        }
    };
    const series = [{
        name: 'Ventas',
        data: [30, 40, 35, 50, 49, 60]
    }];
    return (
        <ReactApexChart options={options} series={series} type="bar" height={300} />
    );
};*/
/*const ChartsOne = ({ ventas }) => {
    const options = {
        chart: {
            id: 'basic-bar'
        },
        xaxis: {
            categories: ventas.dash_monthly_sales.map(sale => sale.mes.toLowerCase()) // Convertir el nombre del mes a minúsculas
        }
    };

    const series = [{
        name: 'Ventas',
        data: ventas.dash_monthly_sales.map(sale => sale.total)
    }];

    return (
        <ReactApexChart options={options} series={series} type="bar" height={300} />
    );
};*/

const ChartsOne = ({ ventas }) => {
    const options = {
        chart: {
            id: 'basic-bar'
        },
        xaxis: {
            categories: ventas.dash_monthly_sales.map(sale => sale.mes.toLowerCase())
        }
    };

    const series = [{
        name: 'Ventas',
        data: ventas.dash_monthly_sales.map(sale => Math.round(sale.total)) // Redondear los decimales y formatear el total con comas separando los miles
    }];

    return (
        <ReactApexChart options={options} series={series} type="bar" height={300} />
    );
};





export default ChartsOne;