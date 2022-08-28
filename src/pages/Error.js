import { Link } from "react-router-dom";
const Error = () => {
	return (
		<section className="section">
			<h2>404 error</h2>
			<p>no page found</p>
			<Link to="/" className="btn">
				Home
			</Link>
		</section>
	);
};
export default Error;
