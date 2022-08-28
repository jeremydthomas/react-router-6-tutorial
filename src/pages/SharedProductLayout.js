import { Outlet } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const SharedProductLayout = () => {
	return (
		<>
			<h2>products</h2>
			<Outlet />
		</>
	);
};
export default SharedProductLayout;
