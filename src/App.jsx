import AboutUs from "./components/AboutUs"
import ChooseUs from "./components/ChooseUs"
import Footer from "./components/Footer"
import FutureHealth from "./components/FutureHealth"
import Herosection from "./components/Herosection"
import Navbar from "./components/Navbar"
import NewsLetter from "./components/NewsLetter"
import Specialists from "./components/Specialists"


function App() {


  return (
    <>
      <Navbar/>
      <Herosection/>
      <Specialists/>
      <ChooseUs/>
      <AboutUs/>
      <FutureHealth/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
