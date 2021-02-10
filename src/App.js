import LandingPage from "./components/landingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import MainPage from "./components/main-page";
import sellingvehicle from "./components/sellingvehicle";
import AboutUs from "./components/aboutUs";
import Forums from "./components/forums";
import SelectCar from "./components/selectCar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/main-page" component={MainPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/seller-page" component={sellingvehicle} />
          <Route path="/about" component={AboutUs} />
          <Route path="/forums" component={Forums} />
          <Route path="/select-car" component={SelectCar} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
