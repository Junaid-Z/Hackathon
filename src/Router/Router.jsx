import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from "../Screens/Admin_screens/Register";
import LoginPage from "../Screens/Login";
import Signup from "../Screens/Signup";
import Home from "../Screens/home/Home";
import Book from "../Screens/book/Book";
import Detail from "../Screens/details/Detail";
// import ProtectedRoute from "../Screens/ProtectedRoute";
// import StudentsList from "../Screens/Admin_screens/StudentsList";
// import AdminDashboard from "../Screens/Admin_screens/AdminDashboard";

export default function MyRouter() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<Link to={'/login'}>Login</Link>} /> */}
				<Route path="/" element={<LoginPage />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/home" element={<Home />} />
				<Route path="/book/:id" element={<Book />} />
				<Route path="/detail/:id" element={<Detail />} />
				{/* <Route path="/Admin"
					element={
						<ProtectedRoute component={<AdminDashboard />}
							allowedRoles={['admin', 'student']}
						/>} >
					<Route path="/Admin/" element={<h1>STATS</h1>} />
					<Route path="/Admin/RegisterStudent" element={<Register />} />
					<Route path="/Admin/Students" element={<StudentsList />} />
				</Route> */}
			</Routes>
		</BrowserRouter>
	)
}
