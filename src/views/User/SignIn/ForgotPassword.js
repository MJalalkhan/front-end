
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import './UserSignIn.css';
import { Label } from '@material-ui/icons';

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

function UserSignIn() {
	const classes = useStyles();
	const history = useHistory();

	const SendEmail = () => {
		console.log('hello');
		history.push('/');
	};

	return (
		<div className={classes.root}>
			<Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
				<Grid item xs={10} sm={4}>
					<div className="headerLogo">
						<h3> Logo here </h3>
						<h3> Welcome User </h3>
					</div>
					<Paper className={classes.paper}>
            <span>Will Send Your New password On Your Email</span>
						<form className={classes.root} noValidate autoComplete="off">
              
							<TextField
            
								id="outlined-basic"
								className="fullWidth"
								label="Email Address"
								variant="outlined"
							/>
							
						</form>
						<Button variant="contained" onClick={SendEmail} className="fullWidth" color="primary">
							Send Email
						</Button>
						<div className="new-to-github">
							<p>
								New to Github?
								<a href="/Sign-up">Create Account</a>
							</p>
						</div>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default UserSignIn;
