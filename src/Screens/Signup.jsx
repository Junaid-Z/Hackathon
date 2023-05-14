import SMForm from "../components/SMForm"
import SMButton from "../components/SMButton"
import SMInput from "../components/SMInput"
import useInputs from "./hooks/useInputs"
import SMSelect from "../components/SMSelect"
import signupFunction from "./hooks/signup"
import { useNavigate } from "react-router-dom"

const Signup = () => {
	let navigate = useNavigate()
	const { inputs, setInput, inputErrors, setInputErrors } = useInputs()
	return (
		<div className="signUp">
			<h1>Signup</h1>
			<SMForm
				list={[
					{
						comp: <SMInput
							label={'Username'}
							name={'username'}
							error={inputErrors.username ? true : false}
							helperText={inputErrors.username}
							value={inputs.username}
							onChange={(e) => {
								setInputErrors((prev) => {
									prev[e.target.name] = '';
									return { ...prev }
								});
								setInput(e)
							}} />,
						mdWidth: 6,
						xsWidth: 12
					},
					{
						comp: <SMInput
							error={inputErrors.email ? true : false}
							helperText={inputErrors.email}
							label={'Email'}
							name={'email'}
							value={inputs.email}
							onChange={(e) => {
								setInputErrors((prev) => {
									prev[e.target.name] = '';
									return { ...prev }
								});
								setInput(e)
							}} />,
						mdWidth: 6,
						xsWidth: 12
					},
					{
						comp: <SMInput
							error={inputErrors.password ? true : false}
							helperText={inputErrors.password}
							type={'password'}
							label={'Password'}
							name={'password'}
							value={inputs.password}
							onChange={(e) => {
								setInputErrors((prev) => {
									prev[e.target.name] = '';
									return { ...prev }
								});
								setInput(e)
							}} />,
						mdWidth: 6,
						xsWidth: 12
					},
					{
						comp: <SMInput
							error={inputErrors.confirmPassword ? true : false}
							helperText={inputErrors.confirmPassword}
							type={'password'}
							label={'Confirm Password'}
							name={'confirmPassword'}
							value={inputs.confirmPassword}
							onChange={(e) => {
								setInputErrors((prev) => {
									prev[e.target.name] = '';
									return { ...prev }
								});
								setInput(e)
							}} />,
						mdWidth: 6,
						xsWidth: 12
					},
					{
						comp: <SMInput
							error={inputErrors.contact ? true : false}
							helperText={inputErrors.contact}
							label={'Contact'}
							name={'contact'}
							value={inputs.contact}
							onChange={(e) => {
								setInputErrors((prev) => {
									prev[e.target.name] = '';
									return { ...prev }
								});
								setInput(e)
							}} />,
						mdWidth: 6,
						xsWidth: 12
					},
					{
						comp: <SMSelect
							error={inputErrors.userType ? true : false}
							helperText={inputErrors.userType}
							value={inputs.userType || 'user'}
							options={[{ value: 'user', displayName: 'User' }, { value: 'transporter', displayName: 'Transporter' }]}
							label={'Type'}
							name={'userType'}
							onChange={(e) => {
								setInputErrors((prev) => {
									prev[e.target.name] = '';
									return { ...prev }
								});
								setInput(e)
							}} />,
						mdWidth: 6,
						xsWidth: 12
					}
				]}
				button={<div className="signupButton">
					<SMButton
						onClick={() => { signupFunction(inputs, setInputErrors, navigate) }}
						variant={'contained'}
						label={'Signup'} />
				</div>
				} />
		</div>
	)
}

export default Signup