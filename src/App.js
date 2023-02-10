import { Routes,Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main-page/index";
import AboutPage from './pages/about-page/index';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
     
{/* <div style={{ padding: 20 }}>
  <div
    style={{
      maxWidth: 1180,
      margin: "auto",
      backgroundColor: "pink",
      display: "flex",
      justifyContent: "space-between"
    }}
  >
    <span style={{ fontSize: 100, display: "block" }}>A</span>
    <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: 90 }}>
        <span style={{ display: "block" }}>입학안내</span>
        <span style={{ display: "block" }}>교육과목</span>
        <span style={{ display: "block" }}>입학안내</span>
        <span style={{ display: "block" }}>교육과목</span>
      </div>
    </div>
    <span style={{ fontSize: 100, display: "block" }}>B</span>
  </div>
</div>; */}


    
    </div>
  );
}

export default App;