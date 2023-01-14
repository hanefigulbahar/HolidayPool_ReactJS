import HomePage from "./Page/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Reservation from "./Page/Reservation/Reservation";
import Layout from "./Page/Layout/Layout";
import VillaDetail from "./Page/VillaDetail/VillaDetail";
import Villas from "./Page/Villas/Villas";

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
