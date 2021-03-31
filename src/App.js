import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Jumbotron from "./components/jumbotron";

function App() {

  let propiedadesNavbar = {
    titulo: "Start Boostrap",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
  }
  let propiedadesfooter = {
    titulo: "Copyright Your Website 2021",
  }

  return (
    <>
      <Navbar
        titulo={propiedadesNavbar.titulo}
        home={propiedadesNavbar.home}
        about={propiedadesNavbar.about}
        services={propiedadesNavbar.services}
        contact={propiedadesNavbar.contact}
      />


      <Jumbotron />

      <div className="container">

        <div className="row d-flex justify-content-center">
          < Cards />
          < Cards />
          < Cards />
          < Cards />
        </div>

      </div>

      <Footer
        titulo={propiedadesfooter.titulo}
      />

    </>

  );
}

export default App;
