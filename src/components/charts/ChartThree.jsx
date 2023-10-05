import React from 'react'
import ReactApexChart from 'react-apexcharts';

const ChartThree = () => {
    const options = {
        chart: {
          id: 'basic-area'
        },
        xaxis: {
          categories: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
        },
        colors: ['#008FFB', '#FF4560'],
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: ['#008FFB', '#FF4560'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100, 100, 100]
          },
        }
      };
      const series = [{
        name: 'Facturas Tipo  A',
        data: [30, 40, 35, 55, 49, 60, 70]
      }, {
        name: 'Facturas Tipo  B',
        data: [65, 30, 25, 35, 40, 50, 20]
      }];
      return (
        <ReactApexChart options={options} series={series} type="area" height={350} />
      );
}

export default ChartThree