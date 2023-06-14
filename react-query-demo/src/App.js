import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'; 
import { HomePage } from './components/Home.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RQSuperHeroPage } from './components/RQSuperHero.page';
import { RQFriendsPage } from './components/RQFriends.page';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
              <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroPage/>}/>
              <Route path='/' element={<HomePage/>} />
              <Route path='/rq-parallel' element={<RQFriendsPage/>}/>
            </Routes>
          </div>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  );
}

export default App;
