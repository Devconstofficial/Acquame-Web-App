import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Financial from "./pages/Financial";
import Physical from "./pages/Physical";
import Mental from "./pages/Mental";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import ProfileDetail from "./pages/ProfileDetail";
import FinancialTotal from "./pages/FinancialTotal";
import ExpenseManage from "./pages/ExpenceManagement";
import CurrentTotalAsset from "./pages/CurrentTotalAsset";


function App() {
  return (
    <>
      <Router>
      <Routes>
        
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="financial" element={<Financial />} />
          <Route path="physical" element={<Physical />} />
          <Route path="mental" element={<Mental />} />
          <Route path="profile" element={<Profile />} />
          <Route path="emergencyprofile" element={<ProfileDetail />} />
          <Route path="currenttotalasset" element={<CurrentTotalAsset />} />
          <Route path="financialtotal" element={<FinancialTotal />} />
          <Route path="expensemanagement" element={<ExpenseManage />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
