import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Ejournal from "./Components/ejournal/ejournal";
function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/about-us" element={<Home />}></Route>
        <Route path="/diseases" element={<Home />}></Route>
        <Route path="/share-experience" element={<Home />}></Route>
        <Route path="/ask-suggestion" element={<Home />}></Route>
        <Route path="/pathy" element={<Home />}></Route>
        <Route path="/clinics-hospitals" element={<Home />}></Route>
        <Route path="/ejournal" element={<Ejournal />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
