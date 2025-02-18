import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/nopage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrolltop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProducts from "./pages/allProducts/AllProducts";
import SignUp from "./pages/registration/SignUp";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProduct";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { MyProvider } from "./context/myContext";
import ProtectedRouteForUser from "./protectedRoutes/ProtectedRouteForUser";
import ProtectedRouteForAdmin from "./protectedRoutes/ProtectedRouteForAdmin";
import Category from "./components/category/Category";
function App() {
	return (
		<>
			<MyProvider>
				<Router>
					<ScrollTop />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/*" element={<NoPage />} />
						<Route path="/productinfo/:id" element={<ProductInfo />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/allproduct" element={<AllProducts />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/category/:categoryname" element={<Category />} />{" "}
						<Route
							path="/userdashboard"
							element={
								<ProtectedRouteForUser>
									<UserDashboard />
								</ProtectedRouteForUser>
							}
						/>
						<Route
							path="/admindashboard"
							element={
								<ProtectedRouteForAdmin>
									<AdminDashboard />
								</ProtectedRouteForAdmin>
							}
						/>
						<Route
							path="/addproduct"
							element={
								<ProtectedRouteForAdmin>
									<AddProductPage />
								</ProtectedRouteForAdmin>
							}
						/>
						<Route
							path="/updateproduct/:id"
							element={
								<ProtectedRouteForAdmin>
									<UpdateProductPage />
								</ProtectedRouteForAdmin>
							}
						/>
					</Routes>
					<Toaster />
				</Router>
				<MyState />
			</MyProvider>
		</>
	);
}
export default App;
