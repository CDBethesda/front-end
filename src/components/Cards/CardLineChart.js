import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js";
import { getAllPasienHis } from "../../api";
import { useReactToPrint } from "react-to-print";
import { getAllObat } from "../../api";

export default function CardLineChart() {
  const [allPasienhis, setAllpasienhis] = useState([]);
  const [allPasien, setAllpasien] = useState([]);
  const [allPasien11, setAllpasien11] = useState([]);
  const [allPasien12, setAllpasien12] = useState([]);

  const [search, setSearch] = useState("");
  function pasienAll() {
    getAllPasienHis(`/history`).then((res) => {
      console.log(res.data.data, "all pasien");
      var tempList = [];
      tempList = res.data.data.length;
      setAllpasienhis(tempList);
    });
  }
  function pasienAllDesem() {
    getAllPasienHis(`/history?search=10`).then((res) => {
      console.log(res.data.data, "all pasien10");
      var tempList = [];
      tempList = res.data.data.length;
      setAllpasien(tempList);
      localStorage.setItem("okt", res.data.data.length);
    });
  }

  function pasienAllNov() {
    getAllPasienHis(`/history?search=11`).then((res) => {
      console.log(res.data.data, "all pasien11");
      var tempList = [];
      tempList = res.data.data.length;
      setAllpasien11(tempList);
      localStorage.setItem("nov", res.data.data.length);
    });
  }

  function pasienAllOkt() {
    getAllPasienHis(`/history?search=12`).then((res) => {
      console.log(res.data.data, "all pasien12");
      var tempList = [];
      tempList = res.data.data.length;
      setAllpasien12(tempList);
      localStorage.setItem("des", res.data.data.length);
    });
  }

  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: ["Oktober", "November", "Desmber"],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              localStorage.getItem("okt"),
              localStorage.getItem("nov"),
              localStorage.getItem("des"),
            ],
            fill: false,
          },
          // {
          //   label: new Date().getFullYear() - 1,
          //   fill: false,
          //   backgroundColor: "#fff",
          //   borderColor: "#fff",
          //   data: [40, 68, 86, 74, 56, 60, 87],
          // },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
    pasienAllDesem();
    pasienAllNov();
    pasienAllOkt();
    pasienAll();
  }, [search]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // obat
  const [allObat, setAllObat] = useState([]);
  // const [search, setSearch] = useState("");
  function obatAll() {
    getAllObat(`/dataObat?search=${search}`).then((res) => {
      console.log(res, "obat");
      var tempList = [];
      tempList = res.data.data;
      setAllObat(tempList);
    });
  }

  useEffect(() => {
    obatAll();
  }, [search]);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-slate-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-slate-100 mb-1 text-xs font-semibold">
                Overview
              </h6>
              <h2 className="text-white text-xl font-semibold">
                laporan rekam medis
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative" style={{ height: "300px" }}>
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
      <div ref={componentRef}>
        <div className="overflow-x-auto relative mb-5 shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Total Pasien
                </th>
                <th scope="col" className="py-3 px-6">
                  Tahun
                </th>
                <th scope="col" className="py-3 px-6">
                  Invoices:
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {allPasienhis}
                </th>
                <td className="py-4 px-6">2022</td>
                <td className="py-4 px-6">Rp. 10.000.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h6 className="uppercase text-slate-600 mb-5 ml-5 text-xs font-semibold">
          Obat Tersisa:
        </h6>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    ("light"
                      ? "bg-slate-50 text-slate-500 border-slate-100"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Nama Obat
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    ("light"
                      ? "bg-slate-50 text-slate-500 border-slate-100"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Stock
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    ("light"
                      ? "bg-slate-50 text-slate-500 border-slate-100"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Harga
                </th>
              </tr>
            </thead>
            <tbody>
              {allObat.map((item, index) => (
                <tr key={index}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <span className={"ml-3 font-bold " + +"text-slate-600"}>
                      {item.nama_obat}
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.stok}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {/* <i className="fas fa-circle text-teal-500 mr-2"></i> on */}
                    {item.harga}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>{" "}
      
      <button
        className="mt-5 bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ml-auto"
        type="button"
        onClick={handlePrint}
      >
        Cetak Pdf
      </button>
    </>
  );
}
