import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Mobnavbar from './Components/Mobnavbar';
import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Mobnavbar />
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);

