import logo from "./assets/logo.png"
import './App.css';
import NavBar from "./components/navbar";
import ItemListContainer from "./components/itemListContainer";
import Footer from "./components/footer";
import CartWidget from "./components/cartWidget";

function App() {
  return (
    <div className='App'>
      <body>
        <header className='header'>
          <img src={logo} alt="logo" width={40} height={50} className="header" />
          <NavBar>
            <CartWidget />
          </NavBar>
        </header>
        <ItemListContainer />
        <Footer />
      </body>
    </div>
  );
}

export default App;
