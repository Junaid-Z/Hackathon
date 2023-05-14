import { useState } from "react"

const useInputs = () => {
	let [inputs, setInputs] = useState({})
	let [inputErrors, setInputErrors] = useState({})
	function setInput(e) {
		setInputs((prev) => {
			prev[e.target.name] = e.target.value;
			return { ...prev };
		})
	}
	return {
		inputs,
		setInput,
		inputErrors,
		setInputErrors
	}

}

export default useInputs