import React from 'react';
import { About, Skills, Testimonial, Footer, Work, Header } from './container';
import { Navbar } from './components';
import { SiteSettingsProvider } from './context/SiteSettingsContext';
import './App.scss';

const App = () => {
  return (
    <SiteSettingsProvider>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
    </SiteSettingsProvider>
  );
};

export default App