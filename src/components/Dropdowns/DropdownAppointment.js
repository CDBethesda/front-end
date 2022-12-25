import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const NotificationDropdown = ({ idPasien, namapasien, idAppointment }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const history = useHistory();
  const appointment = () => {
    localStorage.setItem("idpasien", idPasien);
    localStorage.setItem("namapasien", namapasien);
    localStorage.setItem("idappointment", idAppointment);
    history.push("/admin/editappointment");
  };
  const rekammedis = () => {
    localStorage.setItem("idpasien", idPasien);
    localStorage.setItem("namapasien", namapasien);
    localStorage.setItem("idappointment", idAppointment);
    history.push("/admin/tambahrekammedis");
  };

  return (
    <>
      <a
        className="text-slate-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={appointment}
        >
          edit appointment
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={rekammedis}
        >
          add rekammedis
        </a>
        {/* <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Delete
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={(e) => e.preventDefault()}
        >
         Cetak
        </a> */}
      </div>
    </>
  );
};

export default NotificationDropdown;
