import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Navigation from "./components/Home/Navigation/Navigation";
function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
