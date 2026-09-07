import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import Gallery from "./Components/Gallery";
import Home from "./Components/Home";
import Viewmenu from "./Components/Viewmenu";

function App() {

  return (
    <>
    <section id="home">
      <Home/>
    </section>
    <section id="about">
       <Aboutus/>
    </section>
     <section id="viewmenu">
       <Viewmenu/>
    </section>
    <section id="gallery">
       <Gallery/>
    </section>
    <section id="contact">
       <Contactus/>
    </section>
    </>
  )
}

export default App
