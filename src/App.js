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
import Main from "./components/Main/Main";
function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios
      .get("/cpm_adm/hello")
      .then(response => setHello(response.data))
      .catch(error => console.log(error));

    // axios({
    //   method: 'GET',
    //   url: 'http://localhost:8080/api/hello'
    // }).then(response => setHello(response.data))
  }, []);

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
    </Routes>
  );
}

export default App;
