import './App.css';
import {About, Contact, Events, Home, Products, NotFound, Services, History, Agente} from './components/Paginas'; // COn llaves es porque no se exportaron por default
import {Routes, Route} from 'react-router-dom';

// npm in react-router-dom

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="services" element={<Services/>} />
          <Route path="history" element={<History/>} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:idAgente" element={<Agente/>} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
