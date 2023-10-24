import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeClient from "../pages/Client/Home/Home";

import HomeAdmin from "../pages/Admin/Home/Page";

import Login from "../auth/Login";
import Cookies from "js-cookie";

import Convocatoria from "../pages/Admin/Convocatoria/Page";
import Page_Eleccion from "../pages/Admin/Eleccion/Page";
import Create_Eleccion from "../pages/Admin/Eleccion/Sub/Create_Eleccion";
import Page_elecc from "../pages/Admin/Elecc/Page";
import Page_Frente from "../pages/Admin/Frente/Page";
import Page_Comite from "../pages/Admin/Comite/Page";
import Create_Comite from "../pages/Admin/Comite/Sub/Create_comite";
export const AppRouter = () => {
  const authToken = Cookies.get("token");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeClient />} />
        <Route
          path="/login"
          element={authToken ? <Navigate to="/admin" /> : <Login />}
        />
        <Route path="/admin/eleccion" element={<Page_Eleccion />} />

        <Route path="/admin/eleccion/create" element={<Create_Eleccion />} />

        <Route path="/admin/convocatoria" element={<Convocatoria />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/elecc" element={<Page_elecc />} />
        <Route path="/admin/frente" element={<Page_Frente />} />
        <Route path="/admin/frente" element={<Page_Frente />} />
        <Route path="/admin/comite" element={<Page_Comite />} />
        <Route path="/admin/comite/create" element={<Create_Comite />} />
      </Routes>
    </Router>
  );
};
