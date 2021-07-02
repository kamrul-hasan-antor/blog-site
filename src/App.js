import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AddBlogs from "./components/Admin/AddBlogs/AddBlogs";
import ManageBlogs from "./components/Admin/ManageBlogs/ManageBlogs";
import DetailBlog from "./components/DetailBlog/DetailBlog";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/admin">
          <AddBlogs />
        </Route>
        <Route path="/addBlogs">
          <AddBlogs />
        </Route>
        <Route path="/manageBlogs">
          <ManageBlogs />
        </Route>
        <Route path="/blog/:_id">
          <DetailBlog />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
