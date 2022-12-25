import React, { useState } from "react";
import PropTypes from "prop-types";
import { addAppointment, editAppointment } from "../../api";
import { useHistory } from "react-router-dom";
import "../DatePicker/DatePicker.css"
// components
import ReactDatePicker from "react-datepicker";
import IconCalender from "../../assets/img/calendar-grey.svg";
import moment from "moment";

export default function CardTable({ color }) {
  const [kode_periksa, setkode_periksa] = useState("");
  const [appointment, setappointment] = useState(localStorage.getItem("role") === "suster" ? new Date() : null);
  const [ruangan, setRuangan] = useState("");

  const history = useHistory();
  const TambahAppointment = async (e) => {
    if (localStorage.getItem("role") === "suster") {
      try {
        e.preventDefault();
        const response = await addAppointment({
          id_pasien: localStorage.getItem("idpasien"),
          kode_periksa: "KP" + generateString(10),
          appointment: moment(appointment).format("YYYY-MM-DD"),
          ruangan: ruangan,
          nama_pasien: localStorage.getItem("namapasien"),
        });
        setTimeout(() => {
          history.push("/admin/appointment");
        }, 2000);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else if (localStorage.getItem("role") === "dokter") {
      try {
        e.preventDefault();
        let data = {

          id_pasien: localStorage.getItem("idpasien"),
          kode_periksa: kode_periksa,
          appointment: moment(appointment).format("YYYY-MM-DD"),
          ruangan: ruangan,
          nama_pasien: localStorage.getItem("namapasien"),

        }
        const response = await editAppointment( `/${localStorage.getItem("idappointment")}`, data);
        setTimeout(() => {
          history.push("/admin/appointment");
        }, 2000);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
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
              Tambah Appointment
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
                  Appointment
                </label>
                <div className="flex flex-row">
                  <div className="relative flex flex-row w-full mb-4">
                    <div className="flex flex-row w-full">
                      <div className="mt-1 relative rounded-md shadow-sm w-full">
                        <div className="w-full">
                          <div className="placeholder-slate-300 border text-black font-bold w-4/13 bg-white rounded text-sm focus:outline-none focus:ring ease-linear transition-all duration-150">
                            <div className={"picker-touched"}>
                              <ReactDatePicker
                                selected={appointment}
                                dateFormat="dd/MM/yyyy"
                                onChange={(date) => setappointment(date)}
                              />
                            </div>
                          </div>
                          <div className="absolute inset-y-0 right-0 flex items-center px-3 border rounded bg-tertiary-20">
                            <span className="text-gray-500 sm:text-sm">
                              <img alt="..." className="w-5" src={IconCalender} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="nama"
                >
                  Ruangan
                </label>
                <input
                  id="nama"
                  type="nama"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue=""
                  onChange={(e) => setRuangan(e.target.value)}
                />
              </div>
            </div>
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
                />
              </div>
            </div>
            <button
              className=" bg-blue-500 mt-5 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ml-auto"
              type="button"
              onClick={TambahAppointment}
            >
              {localStorage.getItem("role") === "suster" ? "add Appointment" : "edit Appointment"}
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
