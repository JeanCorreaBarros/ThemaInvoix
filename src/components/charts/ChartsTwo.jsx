import React from 'react'
import ReactApexChart from 'react-apexcharts';

const ChartsTwo = () => {
    const options = {
        chart: {
          id: 'basic-donut'
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: true,
                  label: 'Total',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#373d3f',
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0)
                  }
                }
              }
            }
          }
        },
        labels: ['Producto A', 'Producto B', 'Producto C', 'Producto D', 'Producto E'],
        colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            return opts.w.config.labels[opts.seriesIndex] + ":  " + val
          }
        }
      };
      const series = [44, 55, 13, 43, 22];
      return (
        <ReactApexChart options={options} series={series} type="donut" height={300} />
      );
}

export default ChartsTwo