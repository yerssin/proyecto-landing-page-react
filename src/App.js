import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <Footer
        titulo={propiedadesfooter.titulo}
      />
    </>
  );
}

export default App;
