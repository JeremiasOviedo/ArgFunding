import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";

import AuthProvider from "./context/AuthContext";
import FavoriteProvider from "./context/FavoriteContext";

import Home from "./views/Home";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Profile from "./views/auth/Profile";
import Campaign from "./views/campaign/Campaign";
import Favorites from "./views/campaign/Favorites";
import AddCampaign from "./views/campaign/AddCampaign";
import Search from "./views/Search";

import { Container } from "react-bootstrap";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <FavoriteProvider>
          <AppNavbar />
          <Container>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/perfil" element={<Profile />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/campania/:id" element={<Campaign />} />
                <Route path="/buscar" element={<Search />} />
                <Route path="/add" element={<AddCampaign />} />
              </Routes>
            </BrowserRouter>
          </Container>
        </FavoriteProvider>
      </AuthProvider>
      <br />
      <Footer />
    </div>
  );
}

export default App;
