import React, { useState } from "react";
import PropTypes from "prop-types";
import { addPreception } from "../../api";
import { useHistory } from "react-router-dom";
// components

export default function CardTable({ color }) {
  const [kode_rm, setkode_rm] = useState("");
  const [keluhan, setkeluhan] = useState("");
  const [obat, setobat] = useState("");
  const [diagnosis, setdiagnosis] = useState("");
  const [therapy, settherapy] = useState("");

  const history = useHistory();
  const TambahPreception = async (e) => {
    try {
      e.preventDefault();
      const response = await addPreception({
        id_pasien: localStorage.getItem("idpasien"),
        kode_rm: "RM" + generateString(10),
        nama_pasien: localStorage.getItem("namapasien"),
        keluhan: keluhan,
        diagnosis: diagnosis,
        therapy: therapy,
        obat: obat,
      });
      setTimeout(() => {
        history.push("/admin/rekammedis");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  function generateString(length) {
    const result = Math.random().toString(36).substring(2, length + 2)
    return result;
}

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blue-900 text-white")
        }
      >
        <div className=" mb-0 px-4 py-3">
          <div className="flex flex-wrap items-center">
            <h3
              className={
                "font-semibold text-lg " +
                (color === "light" ? "text-slate-700" : "text-white")
              }
            >
              Tambah Rekam Medis
            </h3>
          </div>
        </div>
      </div>

      <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-10 bg-slate-700">
        <form className="mt-9">
          <div className="block p-10">
       
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="nama"
                >
                  Nama Pasien
                </label>
                <input
                  id="nama"
                  type="nama"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={localStorage.getItem("namapasien")}
                  disabled
                  // onChange={(e) => setnama_pasien(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="nama"
                >
                  Keluhan
                </label>
                <input
                  id="nama"
                  type="nama"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setkeluhan(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="nama"
                >
                  Diagnosis
                </label>
                <input
                  id="nama"
                  type="nama"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setdiagnosis(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="nama"
                >
                  Therapy
                </label>
                <input
                  id="nama"
                  type="nama"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => settherapy(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="nama"
                >
                 Harga
                </label>
                <input
                  id="nama"
                  type="nama"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setobat(e.target.value)}
                />
              </div>
            </div>
            <button
              className=" bg-blue-500 mt-5 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ml-auto"
              type="button"
              onClick={TambahPreception}
            >
              Tambah
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
