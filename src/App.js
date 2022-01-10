import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="noise"></div>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
