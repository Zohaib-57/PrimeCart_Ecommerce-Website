import { useNavigate, useParams } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const CategoryPage = () => {
	const { categoryname } = useParams();
	const context = useContext(myContext);
	const { getAllProduct, loading } = context;

	const navigate = useNavigate();

	const filterProduct = getAllProduct.filter((obj) =>
		obj.category.includes(categoryname)
	);

	const cartItems = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const addCart = (item) => {
		dispatch(addToCart(item));
		toast.success("Added to cart");
	};

	const deleteCart = (item) => {
		dispatch(deleteFromCart(item));
		toast.success("Removed from cart");
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cartItems));
	}, [cartItems]);

	return (
		<Layout>
			<div className="mt-10">
				{/* Heading  */}
				<div>
					<h1 className="text-center mb-5 text-2xl font-semibold first-letter:uppercase text-[#5B4E3F]">
						{categoryname}
					</h1>
				</div>

				{/* main  */}
				{loading ? (
					<div className="flex justify-center">
						<Loader />
					</div>
				) : (
					<section className="text-gray-600 body-font bg-[#D9E2E0]">
						<div className="container px-5 py-5 mx-auto">
							<div className="flex flex-wrap justify-center">
								{filterProduct.length > 0 ? (
									filterProduct.map((item, index) => {
										const { id, title, price, image } = item;
										return (
											<div key={index} className="p-4 w-full md:w-1/4">
												<div className="h-full border border-[#A0BDB4] rounded-xl overflow-hidden shadow-md cursor-pointer">
													<img
														onClick={() => navigate(`/productinfo/${id}`)}
														className="lg:h-80 h-96 w-full"
														src={image}
														alt="product"
													/>
													<div className="p-6 bg-[#A0BDB4]">
														<h2 className="tracking-widest text-xs title-font font-medium text-[#5B4E3F] mb-1">
															PrimeCart
														</h2>
														<h1 className="title-font text-lg font-medium text-[#435F42] mb-3">
															{title.substring(0, 25)}
														</h1>
														<h1 className="title-font text-lg font-medium text-[#435F42] mb-3">
															Rs: {price}
														</h1>

														<div className="flex justify-center">
															{cartItems.some((p) => p.id === item.id) ? (
																<button
																	onClick={() => deleteCart(item)}
																	className="bg-[#557752] hover:bg-[#435F42] w-full text-white py-[4px] rounded-lg font-bold"
																>
																	Remove from Cart
																</button>
															) : (
																<button
																	onClick={() => addCart(item)}
																	className="bg-[#5B4E3F] hover:bg-[#435F42] w-full text-white py-[4px] rounded-lg font-bold"
																>
																	Add to Cart
																</button>
															)}
													</div>
												</div>
											</div>
										</div>
									);
								})
							) : (
								<div className="text-center text-[#5B4E3F] text-xl font-semibold">
									No {categoryname} products found
								</div>
							)}
						</div>
					</div>
				</section>
			)}
		</div>
	</Layout>
	);
};

export default CategoryPage;