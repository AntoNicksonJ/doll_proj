// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// // import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/monitor" element={<div>Monitoring Page</div>} />
//           <Route path="/manual" element={<div>Manual Page</div>} />
//           <Route path="/consultants" element={<div>Consultants Page</div>} />
//           <Route path="/about" element={<div>About Page</div>} />
//           <Route path="/services" element={<div>Services Page</div>} />
//           <Route path="/gestures" element={<div>Gestures Page</div>} />
//           <Route path="/contact" element={<div>Contact Page</div>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';

function App() {
  return (
    <div>
      <Navbar />
      <div className="line"></div>
      <Home />
      <Product />
    </div>
  );
}

export default App;
