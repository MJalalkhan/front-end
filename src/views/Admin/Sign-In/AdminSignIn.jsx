import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import './AdminSignIn.css';

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

const AdminSignIn = () => {
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

	const SignIn = (event) => {
		// history.push('Admin/DashBoard');
		// return;
		console.log('hello');
		event.preventDefault();
		const { email, password } = event.target.elements;
		const obj = {
			email: email.value,
			password: password.value
		};

		postData('http://localhost:3000/api/auth//AdminSignin', obj).then((response) => {
			if(response){
				
			}
			console.log(response)
			// return response;
		});
	};

	return (
		<div className={classes.root}>
	<form className={classes.root} onSubmit={SignIn}>

			<Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
				<Grid item xs={10} sm={4}>
					<div className="headerLogo">
						<h3> Logo here </h3>
						<h3> Welcome Admin </h3>
					</div>
					<Paper className={classes.paper}>
							<TextField
								id="email"
								name="email"
								className="fullWidth"
								label="Email Address"
								variant="outlined"
								required="true"
							/>

							<TextField
								className="fullWidth"
								id="password"
								name="password"
								label="Password"
								type="password"
								autoComplete="current-password"
								variant="outlined"
								required="true"
							/>
							<p className="forgot-password text-right">
								<a href="/ForgotPassword"> Forgot password?</a>
							</p>
							<Button variant="contained" className="fullWidth" color="primary" type="submit">
								Sign In
							</Button>
							<div className="new-to-github">
								<p>
									New to OnliteShop.pk?
									<a href="/AdminSignup">Create Account</a>
								</p>
							</div>
						
					</Paper>
				</Grid>
			</Grid>
			</form>
		</div>
	);
}

export default AdminSignIn;
