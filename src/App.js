import Header from "./components/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Foods from "./components/Foods/Foods";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import './App.css';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
        <Route exact path="/">
                <Header />
                <Banner/>
                <Foods></Foods>
                <Features/>
                <Footer/>
            </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
