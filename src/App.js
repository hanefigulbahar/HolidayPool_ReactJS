import HomePage from "./Page/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Villa from "./Page/Villa/Villa";
import ScrollToTop from "./ScrollToTop";
import Reservation from "./Page/Reservation/Reservation";
import Layout from "./Page/Layout/Layout";
function App() {
  return (
    <div className="App">

      <ScrollToTop/>
      <Routes>
            <Route path="/" element={<Layout/>} >
            <Route index={true} element={<HomePage/>} />
            <Route path="villa/:villaID" element={<Villa/>}/>
          </Route>
          <Route path="reservation" element={<Reservation/>} />

      </Routes>

    </div>
  );
}

export default App;
