import '../Style/Login.css'
import { getData, signedIn, signIn } from '../Firebase/FirebaseFunctions';
import SMModal from "../components/SMModal";
import SMButton from '../components/SMButton';
import SMInput from '../components/SMInput';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
	let [pageIsLoading, setPageIsLoading] = useState(true);
	let [creds, setCreds] = useState({});
	let [loading, setLoading] = useState(false);
	let history = useNavigate();
	let [modalOpen, setModalOpen] = useState({
		state: false,
		content: '',
		heading: ''
	})
	function userSignin() {
		setLoading(true);
		signIn(creds)
			.then((res) => {
				console.log(res.user.uid);
				getData(`Users/${res.user.uid}`)
					.then((snapshot) => {
						console.log(snapshot.val())
						setLoading(false)
					})
			})
			.catch((err) => {
				console.log(err.message)
				if (err.message === 'Firebase: Error (auth/missing-email).') {
					setModalOpen({
						state: true,
						content: 'Email Not Provided',
						heading: 'Login Failed'
					})
				}
				else if (
					err.message === 'Firebase: Error (auth/user-not-found).' ||
					err.message === 'Firebase: Error (auth/wrong-password).' ||
					err.message === 'Firebase: Error (auth/invalid-email).'
				) {
					setModalOpen({
						state: true,
						content: "Incorrect Email/Password",
						heading: "Login Failed",
					})
				}
				setLoading(false)
			})
	}
	let handleInput = (e) => {
		setCreds((prev) => {
			return ({
				...prev,
				[e.target.name]: e.target.value
			}
			)
		})
	}
	useEffect(() => {
		signedIn().onAuthStateChanged((user) => {
			// console.log(user)
			if (user?.uid) {
				getData(`Users/${user.uid}`)
					.then((snapshot) => {
						if (snapshot.exists()) {
							if (snapshot.val().type === "user") {
								history('/user')
							}
							else if (snapshot.val().type === "transporter") {
								history('/user')
							}
						}
						else {
							history('/')
						}
					})
			}
			else {
				setPageIsLoading(false);
			}
		})
	})
	return (
		!pageIsLoading ?
			<div className="loginContainer">
				<div className="login" >
					<div className="loginForm">
						<h1>Login</h1>
						<Grid
							container
							gap={2}
							columns={{ xs: 12 }}
							className="loginBox">
							<Grid item xs={12}>
								<SMInput
									type={'text'}
									label="Email"
									variant="outlined"
									name={'email'}
									value={creds.email}
									onChange={handleInput}
									height={0}
									placeholder={"Email"}
								/>
							</Grid>
							<Grid item xs={12}>
								<SMInput
									type={'password'}
									label="Password"
									variant="outlined"
									name={'password'}
									value={creds.password}
									onChange={handleInput}
									height={0}
									placeholder={"Password"}
								/>
							</Grid>
							<SMButton
								disabled={loading}
								loading={loading}
								style={{ width: '100%' }}
								label={"Signin"}
								variant={'contained'}
								onClick={() => { userSignin() }} />
						</Grid>
					</div>
				</div >
				<SMModal
					open={modalOpen.state}
					handleClose={() => {
						setModalOpen({
							state: false,
							content: '',
							heading: ''
						})
					}}
					heading={<span className={`alertHeading ${modalOpen.heading !== 'Signup Success' ? 'error' : 'success'}`}>{modalOpen.heading}</span>}
					text={<span className={`alert ${modalOpen.heading !== 'Signup Success' ? 'error' : 'success'}`}>{modalOpen.content}</span>} />
			</div > :
			<img
				style={{
					height: '100px',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%,-50%)',
					position: 'absolute'
				}}
				src="https://i.gifer.com/ZZ5H.gif"
				alt="" />
	)
}
export default LoginPage;
