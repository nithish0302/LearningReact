const pizzaData = [
  {
    name: " Pizza Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    image: "../Images/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    image: "../Images/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    image: "../Images/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    image: "../Images/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    image: "../Images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    image: "../Images/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 align="center">This is the Static WebPage Using React</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu ">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzao={pizza} />
        ))}
      </ul>
    </main>
  );
}

function Pizza({ pizzao }) {
  return (
    <li className="pizza">
      <img src={pizzao.image} alt="This is one of pizza" />
      <div>
        <h3>{pizzao.name}</h3>
        <p>{pizzao.ingredients}</p>
        <span>{pizzao.price + 3}</span>
      </div>
    </li>
  );
}
function Footer() {
  const time = new Date().getHours();
  const open = 9;
  const close = 20;
  // console.log(time);
  return (
    <div className="footer">
      <div className="order">
        <p>
          {time >= open && time < close
            ? `We are open Welcome everyone`
            : `We are Open form ${open}:00 - ${close}:00`}
        </p>
        <button className="btn" style={{ alignItems: "center" }}>
          Order
        </button>
      </div>
    </div>
  );
}

export default App;
