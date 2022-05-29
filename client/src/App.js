import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Account from './pages/Account';
import Auth from './pages/Auth';
import Home from './pages/Home';
import OfferDetail from './pages/OfferDetail';
import Offers from './pages/Offers';


const App = () => {
  return (
    <>

    {/* Reset CSS  */}
    <CssBaseline />

    {/* App content */}
    <Router>
      <NavBar/>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Auth />} path="/auth" />
        <Route element={<Account />} path="/account" />
        <Route element={<Offers />} path="/offers" />
        <Route element={<OfferDetail />} path="/offers/:id" />
      </Routes>
    </Router>

    </>
  )
}

export default App;
