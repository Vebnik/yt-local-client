import '../styles/App.css';
import '../bootstrap/css/bootstrap.css'
import NavBar from "./NavBar";
import ContentStatic from "./ContentStatic";
import React, {useState} from "react";
import SearchPages from "./pages/searchPage/SearchPages";
import WindowBar from "./WindowBar";
import {newNavBarSlide} from "../animations/NavBarSlider";


function App() {

  const [openClose, setOpenClose] = useState(true) // slider in NavBar
  const [page, setPage] = useState(<SearchPages/>) // custom routes for electron
  const styleNavBar = () => {
    if(openClose) {
      newNavBarSlide(!openClose)
      return {gridTemplateColumns: '250px auto'}
    }
    newNavBarSlide(!openClose)
    return {gridTemplateColumns: '48px auto'}
  } // slider in NavBar

  return (
    <div className="MainContent bg-dark w-auto">
      <WindowBar/>
      <section className={'App'} style={styleNavBar()}>
        <NavBar setPage={setPage} openClose={openClose} setOpenClose={setOpenClose}/>
        <ContentStatic>
          {page}
        </ContentStatic>
      </section>
    </div>
  )
}

export default App;
