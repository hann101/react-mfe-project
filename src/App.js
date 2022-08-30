// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import About from './page/About';
// import Home from './page/Home';

// import LandingPage from './components/views/LandingPage/LandingPage';
// import LoginPage from './components/views/LoginPage/LoginPage'

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//       <Route exact path="/login" element={<LoginPage />} />
//     </Routes>
//   );
// };

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import AdminList from "./components/LoginList/LoginList";
import OpenChangePop from "./components/ListItems/ListItems";

import Navbar from "./components/Navbar/Navbar";
import ListItems from "./components/ListItems/ListItems";
import Session from "./components/Session/Session";
import Context from "./components/Context/Context";
import Validate from "./components/Validate/Validate";
import UseForm from "./components/Useform/UseForm";
import YupUseForm from "./components/Useform/YupUseForm";
import FormikTest from "./components/FormikTest/FormikTest";
import SamplePopup from "./components/Popup/SamplePopup";
import Main from "./components/Main/Main";

import SiteList from "./components/SiteList/SiteList";
import SampleList from "./components/SiteList/SampleList";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/main" element={<Main />} />

      <Route exact path="/login/list" element={<AdminList />} />
      <Route exact path="/openChangePop" element={<OpenChangePop />} />
      <Route exact path="/nav" element={<Navbar />} />
      <Route exact path="/listitems" element={<ListItems />} />
      <Route exact path="/session" element={<Session />} />
      <Route exact path="/context" element={<Context />} />

      <Route exact path="/validate" element={<Validate />} />
      <Route exact path="/useform" element={<UseForm />} />
      <Route exact path="/yupuseform" element={<YupUseForm />} />

      <Route exact path="/formikTest" element={<FormikTest />} />
      <Route exact path="/popup" element={<SamplePopup />} />

      <Route exact path="/sitelist" element={<SiteList />} />
      <Route exact path="/list" element={<SampleList />} />
      <Route exact path="/reg" element={<Registration />} />
    </Routes>
  );
}

export default App;
