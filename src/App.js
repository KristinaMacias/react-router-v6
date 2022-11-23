import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Landing from "./components/Landing";
import About from "./components/About"
import Contact from "./components/Contact"
import Store from "./components/Store"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;