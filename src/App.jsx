// import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DetailSurat from "./pages/DetailSurat";

function App() {
  return (
    <>
      <div className="d-flex row">
        {/* Ganti menggunakan HashRouter karena akan di-deploy di github pages */}
        <HashRouter> 
          <div className=" col-3">
            <Navbar />
          </div>
          <div className=" col-9">
            <Content>
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/surat/:id" element={<DetailSurat />}></Route>
              </Routes>
            </Content>
          </div>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
