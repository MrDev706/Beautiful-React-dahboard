//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from './home'
import './App.css';
import HomePage from './homePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import PaymentSuccess from './paymentSuccess';

function App() {
  return (
    <Router>
      <Routes> 
      <Route path="/" element={<HomePage /> } />


        {/* <Route path="/" element={<Home />} />
        <Route path="/paymentsuccess" element={  <PaymentSuccess />} /> */}
      </Routes> 
    </Router>
  );
}

export default App;
