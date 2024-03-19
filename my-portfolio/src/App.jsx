import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import '../node_modules/flowbite/dist/flowbite.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* {/} */}
    </div>
  );
};

export default App;