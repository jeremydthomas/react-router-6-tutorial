import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<NavLink
				to="/"
				className={({ isActive }) => (isActive ? "link active" : "link")}
			>
				Home
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? "link active" : "link")}
				to="/about"
			>
				About
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? "link active" : "link")}
				to="/products"
			>
				Products
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? "link active" : "link")}
				to="/login"
			>
				Login
			</NavLink>
		</nav>
	);
};

export default Navbar;
