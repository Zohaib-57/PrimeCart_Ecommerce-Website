import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const HomePageProductCard = () => {
	const navigate = useNavigate();

	const context = useContext(myContext);
	const { getAllProduct } = context;

	const cartItems = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const addCart = (item) => {
		dispatch(addToCart(item));
		toast.success("Added to cart");
	};

	const deleteCart = (item) => {
		dispatch(deleteFromCart(item));
		toast.success("Deleted from cart");
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cartItems));
	}, [cartItems]);

	return (
		<div className="mt-10">
			{/* Heading */}
			<div className="">
				<h1 className="text-center mb-5 text-2xl font-semibold text-[#5B4E3F]">
					Bestselling Products
				</h1>
			</div>

			{/* main */}
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-5 mx-auto">
					<div className="flex flex-wrap -m-4">
						{getAllProduct.slice(0, 8).map((item, index) => {
							const { id, title, price, image } = item;
							return (
								<div key={index} className="p-4 w-full md:w-1/4">
									<div className="h-full border border-[#A0BDB4] rounded-xl overflow-hidden shadow-md cursor-pointer">
										<img
											onClick={() => navigate(`/productinfo/${id}`)}
											className="lg:h-80 h-96 w-full"
											src={image}
											alt="blog"
										/>
										<div className="p-6">
											<h2 className="tracking-widest text-xs title-font font-medium text-[#557752] mb-1">
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
														className="bg-[#5B4E3F] hover:bg-[#557752] w-full text-white py-[4px] rounded-lg font-bold"
													>
														Delete From Cart
													</button>
												) : (
													<button
														onClick={() => addCart(item)}
														className="bg-[#557752] hover:bg-[#5B4E3F] w-full text-white py-[4px] rounded-lg font-bold"
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
	);
};

export default HomePageProductCard;
