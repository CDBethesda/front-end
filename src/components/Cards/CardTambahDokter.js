import React, { useState } from "react";
import PropTypes from "prop-types";
import { addDokter } from "../../api"
import { useHistory } from "react-router-dom";
// components

export default function CardTable({ color }) {
  const [nama_dokter, setnama_dokter] = useState("")
  const [username, setusername] = useState("")
  const [statusAktif, setstatusAktif] = useState("")

  const history= useHistory()
  const TambahDokter = async (e) => {
    try {
      e.preventDefault();
      const response = await addDokter(
        {
          nama_dokter: nama_dokter,
          username: username,
          statusAktif: statusAktif,
        }
      );
      setTimeout(() => {
        history.push("/admin/datadokter");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  };

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
              Tambah dokter
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
                  htmlFor="koderm"
                >
                  Nama Dokter
                </label>
                <input
                  id="koderm"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setnama_dokter(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="nama"
                >
                  Username
                </label>
                <input
                  id="nama"
                  type="nama"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="nama"
                >
                  Status
                </label>
                <input
                  id="nama"
                  type="nama"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setstatusAktif(e.target.value)}
                />
              </div>
            </div>
            <button
              className=" bg-blue-500 mt-5 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ml-auto"
              type="button"
              onClick={TambahDokter}
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
