import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TableDropdown from "../Dropdowns/TableDropdown.js";
import { getAllDokter } from "../../api/index.js";
import { Link } from "react-router-dom";

export default function CardTable({ color }) {
  // const [namaDokter, setNamaDokter] = useState("")
  // const [username, setUserName] = useState("")
  // const [statusAktif, setStatusAktif] = useState("")

  const [allDokter, setAllDokter] = useState([])
  const [search, setSearch] = useState("")
  function pasienAll() {
    getAllDokter(`/dataDokter?search=${search}`).then((res) => {
      console.log(res.data.data, "all pasien")
      var tempList = [];
      tempList = res.data.data
      setAllDokter(tempList)
    })
  }

  useEffect(() => {
    pasienAll()
  }, [search])

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-slate-700" : "text-white")
                }
              >
                Data Dokter
              </h3>
            </div>
            <Link to="/admin/tambahdokter">
              <button
                className=" bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ml-auto"
                type="button"
              >
                Tambah Data Dokter
              </button>
            </Link>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center" +
                    (color === "light"
                      ? "bg-slate-50 text-slate-500 border-slate-100"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Nama
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-slate-50 text-slate-500 border-slate-100"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Username
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-slate-50 text-slate-500 border-slate-100"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Status Aktif
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-slate-50 text-slate-500 border-slate-100"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {allDokter.map((item, index) => (
                <tr key={index}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center flex items-center">
                    <span
                      className={
                        "ml-3 font-bold text-center" +
                        +(color === "light" ? "text-slate-600" : "text-white")
                      }
                    >
                      {item.nama_dokter}
                    </span>
                  </th>

                  <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.username}
                  </td>
                  <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className={`fas fa-circle ${item.statusAktif === "aktif" ? "text-green-500 mr-2" : "text-red-500 mr-2"}`}></i>  {item.statusAktif}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
