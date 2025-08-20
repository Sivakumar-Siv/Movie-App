import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Watchlist from './pages/Watchlist';
import Moviecard from './components/Moviecard';
import GenreFiltter from './components/GenreFiltter';
import { WatchListContext, WatchListProvider } from './context/WatchlistContext';

function App() {
  return (
    <>
    <WatchListProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
      </ WatchListProvider>
    </>
  );
}

export default App;
