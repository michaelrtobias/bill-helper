import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Bills from "../views/bills/index";
import Home from "../views/home/index";
import CreditCards from "../views/creditCards/index";
import Loans from "../views/loans/index";
import Overview from "../views/overview/index";
function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" expand="md" varient="dark" sticky="top">
          <Navbar.Brand>
            <Link to="/">
              <img
                src="Imjustabill.png"
                alt="im-only-a-bill"
                width="30"
                height="30"
              ></img>
              The Bill Helper
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/overview">Overview</Link>
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/bills" component={Bills}></Route>
          <Route path="/creditcards" component={CreditCards}></Route>
          <Route path="/loans" component={Loans}></Route>
          <Route path="/overview" component={Overview}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
