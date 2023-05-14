import { setData, signIn, signUp } from "../../Firebase/FirebaseFunctions";

function signupFunction(inputs, setInputs, navigate) {
	let acceptable = true
	if (inputs.username === ('' || undefined)) {
		setInputs((prev) => {
			prev.username = 'can not be empty'
			return { ...prev }
		})
		acceptable = false;
	}
	if (inputs.password === ('' || undefined)) {
		setInputs((prev) => {
			prev.password = 'can not be empty'
			return { ...prev }
		})
		acceptable = false;
	}
	if (inputs.email === ('' || undefined)) {
		setInputs((prev) => {
			prev.email = 'can not be empty'
			return { ...prev }
		})
		acceptable = false;
	}
	if (inputs.contact === ('' || undefined)) {
		setInputs((prev) => {
			prev.contact = 'can not be empty'
			return { ...prev }
		})
		acceptable = false;

	}
	if (inputs.password !== inputs.confirmPassword) {
		setInputs((prev) => {
			prev.confirmPassword = 'does not match with password'
			return { ...prev }
		})
		acceptable = false;
	}
	if (acceptable) {
		signUp(inputs).then((res) => {
			setData('Users', { contact: inputs.contact, type: (inputs.userType || 'user') }, res.user.uid)
			signIn(inputs).then(() => {
				navigate('/')
			}).catch((err) => { console.log(err); })
		}).catch((err) => {
			if (err.message === 'Firebase: Error (auth/invalid-email).') {
				setInputs((prev) => {
					prev.email = 'Invalid Email'
					return { ...prev }
				})
			}
			else if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
				setInputs((prev) => {
					prev.email = 'Email already-in-use).'
					return { ...prev }
				})
			}
			else if (err.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
				setInputs((prev) => {
					prev.confirmPassword = 'Password should be atleast 6 characters'
					return { ...prev }
				})
			}
			else {
				console.log(err.message);
			}
		})
	}
}
export default signupFunction