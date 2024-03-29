
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'; 

//components
import Header from './components/header';

//pages
import Home from './pages/home';

function App() {



  return (
    <div className="App">

      <BrowserRouter>

        <Header />
      
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
