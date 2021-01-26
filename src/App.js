import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage.js";
import ProductsPage from "./Component/ProductsPage/ProductsPage.js";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
        </ul>

        <hr />

        {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/Products">
            <ProductsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
