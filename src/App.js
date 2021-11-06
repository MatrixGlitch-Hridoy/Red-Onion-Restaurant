import Header from "./components/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
function App() {
  return (
    <AuthProvider>
      <Router>
      <Header/>
      <Banner/>
      </Router>
    </AuthProvider>
  );
}

export default App;
