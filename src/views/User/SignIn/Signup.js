import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import './UserSignIn.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	'& > *': {
		margin: theme.spacing(1),
		width: 100
	},
	paper: {
		padding: theme.spacing(3),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

function UserSignUp() {
	const classes = useStyles();
	// const history = useHistory();
	async function postData(url, data) {
		// Default options are marked with *
		const response = await fetch(url, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.

			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data) // body data type must match "Content-Type" header
		});
		return response.json(); // parses JSON response into native JavaScript objects
	}




	const SignUp = (event) => {
		console.log('hello', event.target);
		// history.push("Vendor/Dashboard");
		// history.push('Admin/DashBoard');
		event.preventDefault();
		const { name,email, password, confirmPassword } = event.target.elements;
		const obj = {
			name: name.value,
			email: email.value,
			password: password.value,
			confirmPassword: confirmPassword.value
		};

		postData('http://localhost:3000/api/auth/signup', obj).then((response) => {
			console.log(response);
			// return response;
		});
		// history.push('/');
	};

	return (
		<div className={classes.root}>
			<form onSubmit={SignUp} className={classes.root} >
			<Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
				<Grid item xs={10} sm={4}>
					<div className="headerLogo">
						<h3> Logo here </h3>
						<h3> Welcome User </h3>
					</div>
					<Paper className={classes.paper}>
						<h3>Sign up to OnliteShop.pk</h3>
							<TextField
								className="fullWidth"
								id="name"
								name="name"
								label="Username"
								type="text"
								autoComplete="current-password"
								variant="outlined"
							/>

							<TextField
								id="email"
								name="email"
								className="fullWidth"
								label="Email Address"
								variant="outlined"
							/>

							<TextField
								className="fullWidth"
								id="password"
								name="password"
								label="Password"
								type="password"
								autoComplete="current-password"
								variant="outlined"
							/>

							<TextField
								className="fullWidth"
								id="confirmPassword"
								name="confirmPassword"
								label="Confirm Password"
								type="password"
								autoComplete="current-password"
								variant="outlined"
							/>
						
						<Button variant="contained" className="fullWidth" color="primary" type="submit">
							Sign In
						</Button>
						<div className="have-account">
							<p>
								Have an account on Github?
								<a href="/Sign-in">Sign-in</a>
							</p>
						</div>
					</Paper>
				</Grid>
			</Grid>
			</form>
		</div>
	);
}

export default UserSignUp;
