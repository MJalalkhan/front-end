import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import './AdminSignup.css';

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

function AdminSignup() {
	const classes = useStyles();
	const history = useHistory();

	const SignUp = () => {
		console.log('hello');
		history.push('/');
	};

	return (
		<div className={classes.root}>
			<Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
				<Grid item xs={10} sm={4}>
					<div className="headerLogo">
						<h3> Logo here </h3>
						<h3> Welcome Admin </h3>
					</div>
					<Paper className={classes.paper}>
						<h3>Sign up to OnliteShop.pk</h3>
						<form className={classes.root} noValidate autoComplete="off">
							<TextField
								className="fullWidth"
								id="outlined-password-input"
								label="Username"
								type="text"
								autoComplete="current-password"
								variant="outlined"
							/>

							<TextField
								id="outlined-basic"
								className="fullWidth"
								label="Email Address"
								variant="outlined"
							/>

							<TextField
								className="fullWidth"
								id="outlined-password-input"
								label="Password"
								type="password"
								autoComplete="current-password"
								variant="outlined"
							/>

							<TextField
								className="fullWidth"
								id="outlined-password-input"
								label="Confirm Password"
								type="password"
								autoComplete="current-password"
								variant="outlined"
							/>
						</form>
						<Button variant="contained" onClick={SignUp} className="fullWidth" color="primary">
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
		</div>
	);
}

export default AdminSignup;
