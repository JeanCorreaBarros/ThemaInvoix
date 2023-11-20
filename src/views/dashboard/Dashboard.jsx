import React, { useState, useEffect } from "react";
import './styles.css'
import ChartsOne from "../../components/charts/ChartsOne";
import ChartsTwo from "../../components/charts/ChartsTwo";
import ChartThree from "../../components/charts/ChartThree";

const Dashboard = () => {



  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  const [ventas, setVentas] = useState([]);
  useEffect(() => {
    const fetchVentas = async () => {
      const token = sessionStorage.getItem('token');
      try {
        const response = await fetch('https://api.invoix.co/v1/monthly-sales', {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        });
        if (response.ok) {
          const data = await response.json();
          setVentas(data);
          console.log(data)
        } else {
          console.error('Error al obtener las ventas mensuales');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    fetchVentas();
  }, []);


  const arrayDatos = {
    "dash_monthly_sales": [
      {
        "mes": "mayo",
        "anio": 2023,
        "total": 10236060
      }
    ]
  };
  
  
  


  if (isLoading) {
    return (
      <div className="loader">
        <div class="boxes">
          <div class="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="">
      <div class="pt-6 px-4">
        <div class="mb-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
          <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <ChartThree />
          </div>
        </div>

        <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
          <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <ChartsOne ventas={arrayDatos} />
          </div>

          <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  ">
            <ChartsTwo />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
