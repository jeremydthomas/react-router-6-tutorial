import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useState } from "react";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProductLayout from "./pages/SharedProductLayout";
import SingleProduct from "./pages/SingleProduct";

function App() {
	const [user, setUser] = useState(null);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />

					<Route path="products" element={<SharedProductLayout />}>
						<Route index element={<Products />} />
						<Route path=":productId" element={<SingleProduct />} />
					</Route>

					<Route path="login" element={<Login setUser={setUser}></Login>} />
					<Route
						path="dashboard"
						element={
							<ProtectedRoute user={user}>
								<Dashboard user={user} />
							</ProtectedRoute>
						}
					/>
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
