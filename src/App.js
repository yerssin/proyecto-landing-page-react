import Navbar from "./components/Navbar";

function App() {

  let propiedadesNavbar = {
    titulo: "Start Boostrap",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
  }

  return (
    <Navbar
      titulo={propiedadesNavbar.titulo}
      home={propiedadesNavbar.home}
      about={propiedadesNavbar.about}
      services={propiedadesNavbar.services}
      contact={propiedadesNavbar.contact}
    />

  );
}

export default App;
