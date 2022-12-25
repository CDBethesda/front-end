import React, { useState } from "react";
import PropTypes from "prop-types";
import { addPasien } from "../../api"
import { useHistory } from "react-router-dom";
// components

export default function CardTable({ color }) {

  const [kodeRm, setKoderm] = useState("")
  const [namaPasien, setnamaPasien] = useState("")
  const [jenisKelamin, setJenisKelamin] = useState("")
  const [umur, setUmur] = useState("")
  const [alamat, setAlamat] = useState("")
  const [pengobatan, setPengobatan] = useState("")
  const [td, setTd] = useState("")
  const [diagnosa, setDiagnosa] = useState("")
  const [therapy, setTherapy] = useState("")
  const [bagian, setbagian] = useState("")

  const history = useHistory()
  const TambahPasien = async (e) => {
    try {
      e.preventDefault();
      const response = await addPasien(
        {
          kode_rm: "RM" + generateString(10),
          nama_pasien: namaPasien,
          jenis_kelamin: jenisKelamin,
          umur: umur,
          alamat: alamat,
          pengobatan: pengobatan,
          td: td,
          diagnosa: diagnosa,
          therapy: therapy,
          bagian: bagian
        }
      );
      console.log(response)
      localStorage.setItem("idPasienRegis", response.data.data.id)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  };

  function generateString(length) {
    const result = Math.random().toString(36).substring(2, length + 2)
    return result;
}

  const next = () => {
    history.push("/admin/datapasien");
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
              Tambah pasien
            </h3>
          </div>
          <div className="flex flex-wrap items-center">

            <h3
              className={
                "font-semibold text-lg " +
                (color === "light" ? "text-slate-700" : "text-white")
              }
            >
              Username pasien: { localStorage.getItem("idPasienRegis")}
            </h3>
          </div>
          <button
            className=" bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ml-auto"
            type="button"
            onClick={next}
          >
            Next {">"}
          </button>
        </div>
      </div>

      <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-10 bg-slate-700">
        <form className="mt-9">
          <div className="flex flex-wrap p-10">
          
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="nama"
                >
                  Nama
                </label>
                <input
                  id="nama"
                  type="nama"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setnamaPasien(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="jeniskelamin"
                >
                  Jenis Kelamin
                </label>
                <input
                  id="jenisKelamin"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setJenisKelamin(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="pengobatan"
                >
                  Pengobatan
                </label>
                <input
                  id="pengobatan"
                  type="email"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setPengobatan(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="td"
                >
                  TD
                </label>
                <input
                  id="td"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setTd(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="umur"
                >
                  Umur
                </label>
                <input
                  id="umur"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setUmur(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="alamat"
                >
                  Alamat
                </label>
                <input
                  id="alamat"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="Diagnosa"
                >
                  Diagnosa
                </label>
                <input
                  id="diagnosa"
                  type="email"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setDiagnosa(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="therapy"
                >
                  Therapy
                </label>
                <input
                  id="therapy"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setTherapy(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="bagian"
                >
                  Bagian
                </label>
                <input
                  id="bagian"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setbagian(e.target.value)}
                />
              </div>
            </div>
            <button
              className=" bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ml-auto"
              type="button"
              onClick={TambahPasien}
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
