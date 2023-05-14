import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signedIn, getData } from "../Firebase/FirebaseFunctions";

function ProtectedRoute({ component, allowedRoles = [] }) {
	let history = useNavigate();
	let [pageIsLoading, setPageIsLoading] = useState(true);
	useEffect(() => {
		signedIn().onAuthStateChanged((user) => {
			if (user?.uid) {
				getData(`Users/${user.uid}`)
					.then((snapshot) => {
						let allowed = false
						setPageIsLoading(false);
						allowedRoles.map((v) => {
							// console.log(v, snapshot.val().role);
							if (snapshot.val().role === v) {
								allowed = true;
							}
							return 0;
						})
						if (allowed) {
							setPageIsLoading(false);
						}
						else {
							history('/login')
						}
					})
			}
			else {
				history('/login')
			}
		})
	})
	return (
		<>
			{
				pageIsLoading
					? < img
						style={{
							height: '100px',
							left: '50%',
							top: '50%',
							transform: 'translate(-50%,-50%)',
							position: 'absolute'
						}
						}
						src="https://i.gifer.com/ZZ5H.gif"
						alt="" />
					: component
			}
		</>
	);
}
export default ProtectedRoute;