import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return <h1 align="center">This is the Static WebPage Using React</h1>;
};

const Menu = () => {
  return (
    <div>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
};
const Footer = () => {
  return (
    <h6>
      {" "}
      {new Date().toLocaleTimeString()}This is the footer of the pizza static
      web
    </h6>
  );
};
function Pizza() {
  return (
    <div>
      <img src="../Images/funghi.jpg" alt="hi" />
      <p>This is the best Pizza ever</p>
    </div>
  );
}

export default App;
