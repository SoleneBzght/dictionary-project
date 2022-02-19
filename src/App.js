import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Hello!</h1>
        <Dictionary defaultKeyword="sunrise" />
        <Footer />
      </div>
    </div>
  );
}
