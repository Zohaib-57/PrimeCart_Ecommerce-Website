import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const AllProduct = () => {
	const navigate = useNavigate();

	const context = useContext(myContext);
	const { getAllProduct } = context;

	const cartItems = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const addCart = (item) => {
		// console.log(item)
		dispatch(addToCart(item));
		toast.success("Add to cart");
	};

	const deleteCart = (item) => {
		dispatch(deleteFromCart(item));
		toast.success("Delete cart");
	};

	// console.log(cartItems)

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cartItems));
	}, [cartItems]);
	return (
		<Layout>
			<div className="py-8">
				{/* Heading  */}
				<div className="">
					<h1 className=" text-center mb-5 text-2xl font-semibold text-[#5B4E3F]">
						All Products
					</h1>
				</div>

				{/* main  */}
				<section className="text-[#5B4E3F] body-font">
					<div className="container px-5 lg:px-0 py-5 mx-auto">
						<div className="flex flex-wrap -m-4">
							{getAllProduct.map((item, index) => {
								const { id, title, price, image } = item;
								return (
									<div key={index} className="p-4 w-full md:w-1/4">
										<div className="h-full border border-[#A0BDB4] rounded-xl overflow-hidden shadow-md cursor-pointer">
											<img
												onClick={() => navigate(`/productinfo/${id}`)}
												className="lg:h-80  h-96 w-full"
												src={image}
												alt="blog"
											/>
											<div className="p-6">
												<h2 className="tracking-widest text-xs title-font font-medium text-[#A0BDB4] mb-1">
													PrimeCart
												</h2>
												<h1 className="title-font text-lg font-medium text-[#435F42] mb-3">
													{title.substring(0, 25)}
												</h1>
												<h1 className="title-font text-lg font-medium text-[#435F42] mb-3">
													Rs:{price}
												</h1>

												<div className="flex justify-center ">
													{cartItems.some((p) => p.id === item.id) ? (
														<button
															onClick={() => deleteCart(item)}
															className=" bg-[#557752] hover:bg-[#435F42] w-full text-[#D9E2E0] py-[4px] rounded-lg font-bold"
														>
															Delete To Cart
														</button>
													) : (
														<button
															onClick={() => addCart(item)}
															className=" bg-[#557752] hover:bg-[#435F42] w-full text-[#D9E2E0] py-[4px] rounded-lg font-bold"
														>
															Add To Cart
														</button>
													)}
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default AllProduct;
