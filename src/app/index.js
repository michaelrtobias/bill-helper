import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Bills from "../views/bills/index";
import Home from "../views/home/index";
import CreditCards from "../views/creditCards/index";
import Loans from "../views/loans/index";
function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" expand="md" varient="dark" sticky="top">
          <Nav className="mr-auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/bills">Bills</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/creditcards">Credit Cards</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/loans">Loans</Link>
              </Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/bills" component={Bills}></Route>
          <Route path="/creditcards" component={CreditCards}></Route>
          <Route path="/loans" component={Loans}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
