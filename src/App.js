import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Home from './Components/Home/home';
import Header from './Components/Header/header';
import Umbrella from './Components/Home/home_first_page/home_first_page';
import Footer from "./Components/Footer/footer";
import Disease from './Components/Disease/disease';
import Articles from './Components/Articles/articles';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/about-us" element={<Home/>}></Route>
        <Route path="/diseases" element={<Disease/>}></Route>
        <Route path="/share-experience" element={<Articles/>}></Route>
        <Route path="/ask-suggestion" element={<Home/>}></Route>
        <Route path="/pathy" element={<Home/>}></Route>
        <Route path="/clinics-hospitals" element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
