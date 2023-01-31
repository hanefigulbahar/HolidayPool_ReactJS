import React from "react";
//Components
import ScrollToTop from "./ScrollToTop";
//Pages
import HomePage from "./Page/HomePage/HomePage";
import Reservation from "./Page/Reservation/Reservation";
import Layout from "./Page/Layout/Layout";
import VillaDetail from "./Page/VillaDetail/VillaDetail";
import Villas from "./Page/Villas/Villas";
//Routers
import { Route, Routes } from "react-router-dom";
//Reduxs
//Icons
//Styles

function App() {
  
  return (
    <div className="App">
      <ScrollToTop/>
      <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index={true} element={<HomePage/>} />
            <Route path="villas" element={<Villas/>}/>
            <Route path="villa-detail/:villaID" element={<VillaDetail/>}/>
          </Route>
          <Route path="reservation" element={<Reservation/>} />

      </Routes>

    </div>
  );
}

export default App;
