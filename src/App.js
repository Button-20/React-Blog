import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="overall">
      <div className="App">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
