import './App.css';
import TopHeader from './components/Headers/AdminDashboard/AdminDash';
import Header from './components/Headers/TopHeader/Header';
import MainContainer from './components/Body/MainContainer';
import Footer1 from './components/Footer/Footer1';
import Footer2 from './components/Footer/Footer2';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminSignIn from './views/Admin/Sign-In/AdminSignIn.jsx';
import VendorSignIn from './views/Vendor/SignIn/VendorSignIn';
import VendorDashboard from './views/Vendor/Dashboard/VendorDashboard'
import AdminDashboard from './views/Admin/Dashboard/AdminDashboard.jsx';
import Login from './views/User/SignIn/UserSignIn';
import Signup from './views/User/SignIn/Signup';
import ForgotPassword from './views/User/SignIn/ForgotPassword';
import LoginHeader from './views/User/Dashboard/LoginHeader';
import AdminSignup from './views/Admin/Sign-In/AdminSignup';
// import mainCart from './views/cart/Main'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<TopHeader />
					<Header />
					<MainContainer />
					<Footer1 />
					<Footer2 />
				</Route>
				<Route exact path="/Admin">
					<AdminSignIn />
				</Route>
				<Route exact path="/AdminSignup">
					<AdminSignup/>
				</Route>
				<Route exact path="/Vendor">
					<VendorSignIn />
				</Route>
				<Route path="/Admin/Dashboard">
					<AdminDashboard />
				</Route>
				<Route path="/Vendor/Dashboard">
					<VendorDashboard />
				</Route>
				<Route exact path="/cart">
					{/* <mainCart/> */}
				</Route>
			</Switch>

			<div className="auth-wrapper">
				<div className="auth-inner" >
					<Switch>
					<Route path="/sign-in">
							<Login />
						</Route>
						<Route path="/sign-up">
							<Signup />
						</Route>
		
						<Route path="/ForgotPassword">
							<ForgotPassword />
						</Route>
						<Route path="/LoginHeader">
							<LoginHeader />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
