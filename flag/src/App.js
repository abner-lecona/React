import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Bandera, Home, NotFound } from './components/Paginas'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":bandera" element={<Bandera />} />
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;