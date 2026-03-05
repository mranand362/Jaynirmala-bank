import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// Navbar & Sections
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Why from "./components/Why";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Loan from "./components/Loan";
import Gallery from "./components/Gallery";
import Company from "./pages/Company";

// Pages for Hero button navigation
import Apply from "./pages/Apply";
import Deposits from "./pages/Deposits";
import Calculator from "./pages/Calculator";
import Eligibility from "./pages/Eligibility";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import Mission from "./pages/Mission";
import Policies from "./pages/Policies";
import BoardMembers from "./pages/BoardMembers";
import LoanAgainstDeposit from "./pages/LoanAgainstDeposit";
import PropertyLoan from "./pages/PropertyLoan";
import LoanAgainstPolicy from "./pages/LoanAgainstPolicy";
import Invest from "./pages/Invest";
import InvestApply from "./pages/InvestApply"

// Auth Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

import TalkToExpert from "./pages/TalkToExpert";
import ApplyDeposits from "./pages/ApplyDeposits";
import SavingsAccount from "./pages/SavingsAccount";
import MonthlyIncomePlan from "./pages/MonthlyIncomePlan";
import GoldLoan from "./pages/GoldLoan";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* HOME PAGE: Hero + sections */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Why />
              <Team />
              <Footer />
            </>
          }
        />

        {/* ROUTES FOR HERO BUTTONS */}
        <Route path="/about" element={<Aboutus />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/deposits" element={<Deposits />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/loans" element={<Loan />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more-info" element={<Aboutus />} />
        <Route path="/apply-loan" element={<Apply />} />
        <Route path="/Home" element={<Hero />} />

        {/* AUTH ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/Contactus" element={<Contact />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/board" element={<BoardMembers />} />
        <Route path="/BoardMembers" element={<BoardMembers />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/board" element={< BoardMembers />} />
        <Route path="/company" element={< Company />} />
        <Route path="/services" element={< Services />} />
        <Route path="/talk-expert" element={< TalkToExpert/>} />
        <Route path="/apply-now" element={< ApplyDeposits/>} />
        <Route path="/apply/savings-account" element={< SavingsAccount/>} />
        <Route path="/apply/monthly-income-plan" element={< MonthlyIncomePlan/>} />
        <Route path="/apply/gold-loan" element={< GoldLoan/>} />
        <Route path="/apply/loan-against-deposit" element={< LoanAgainstDeposit/>} />
        <Route path="/apply/property-loan" element={< PropertyLoan/>} />
        <Route path="/apply/loan-against-policy" element={< LoanAgainstPolicy/>} />
        <Route path="/Contactus" element={< Contact/>} />
        <Route path="/openaccount" element={< Apply/>} />
        <Route path="/Invest" element={< Invest/>} />
       
        <Route path="/invest/fixed-deposit" element={< InvestApply/>} />
        <Route path="/invest/recurring-deposit" element={< InvestApply/>} />
        <Route path="/invest/monthly-income-plan" element={< InvestApply/>} />
        <Route path="/invest/senior-citizen" element={< InvestApply/>} />
        

      </Routes>
    </Router>
  );
}

export default App;