import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './components/Home.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';


function App() {
  return (
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path='/super-heroes' element={<SuperHeroesPage/>} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage/>} />
            <Route path='/' element={<HomePage/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;