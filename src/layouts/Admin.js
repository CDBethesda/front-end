import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";
import pageViewGa from "../config/pageViewGa.js";
import CardSettings from "../components/Cards/CardSettings.js";

export default function Admin() {
  const Dashboard = lazy(() => import('../views/admin/Dashboard.js'));
  const Settings = lazy(() => import('../views/admin/Settings.js'));
  const TablesPatient = lazy(() => import('../views/admin/TablesPatient.js'));
  const TambahPasien = lazy(() => import('../views/admin/TambahPasien'));
  const TambahDokter = lazy(() => import('../views/admin/TambahDokter'));
  const TambahAppointment = lazy(() => import('../views/admin/TambahAppointment'));
  const EditAppointment = lazy(() => import('../views/admin/EditAppointment'));
  const TablesObat = lazy(() => import('../views/admin/TablesObat'));
  const TablesRekammedis = lazy(() => import('../views/admin/TablesRekamMedis.js'));
  const TambahRekammedis = lazy(() => import('../views/admin/TambahRekammedis'));
  const TablesAppointment = lazy(() => import('../views/admin/TablesAppointent'));
  const TablesDokter = lazy(() => import('../views/admin/TablesDokter.js'));
  const TablesHistoryAppointment = lazy(() => import('../views/admin/TablesHistoryAppointment'));
  const TablesHistorypreception = lazy(() => import('../views/admin/TablesHistoryPreception'));
  const TambahObat = lazy(() => import('../views/admin/TambahObat'));
  const EditObat = lazy(() => import('../views/admin/EditObat'));

  const renderLoader = () => <p>Loading</p>;

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Suspense fallback={renderLoader()}>
            <Switch>
              <Route path="/admin/dashboard" exact component={Dashboard} />
              <Route path="/admin/settings" exact component={pageViewGa(Settings)} />
              <Route path="/admin/datapasien" exact component={pageViewGa(TablesPatient)} />
              <Route path="/admin/tambahpasien" exact component={pageViewGa(TambahPasien)} />
              {/* dokter */}
              <Route path="/admin/datadokter" exact component={pageViewGa(TablesDokter)} />
              <Route path="/admin/tambahdokter" exact component={pageViewGa(TambahDokter)} />
              {/* obat */}
              <Route path="/admin/dataobat" exact component={pageViewGa(TablesObat)} />
              <Route path="/admin/tambahobat" exact component={pageViewGa(TambahObat)} />
              <Route path="/admin/editobat" exact component={pageViewGa(EditObat)} />
              {/* rekammmedis */}
              <Route path="/admin/rekammedis" exact component={pageViewGa(TablesRekammedis)} />
              <Route path="/admin/tambahrekammedis" exact component={pageViewGa(TambahRekammedis)} />
              <Route path="/admin/appointment" exact component={pageViewGa(TablesAppointment)} />
              <Route path="/admin/tambahappointment" exact component={pageViewGa(TambahAppointment)} />
              <Route path="/admin/editappointment" exact component={pageViewGa(EditAppointment)} />
              <Route path="/admin/history-appointment" exact component={pageViewGa(TablesHistoryAppointment)} />
              <Route path="/admin/histor-preception" exact component={pageViewGa(TablesHistorypreception)} />
              <Route path="/admin/maps" exact component={pageViewGa(CardSettings)} />
              <Redirect from="/admin" to="/admin/dashboard" />
            </Switch>
          </Suspense>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
