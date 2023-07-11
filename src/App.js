import React from "react"
import GlobalStyles from "./globalStyles"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"

//Pages
import Home from "./Pages/Home"
import SignUp from "./Pages/SignupPage"
import PricingPage from "./Pages/PricingPage"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <Router>
      <GlobalStyles inverse={true} />
      <Navbar />

      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/Signup" exact Component={SignUp} />
        <Route path="/Pricing" exact Component={PricingPage} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
