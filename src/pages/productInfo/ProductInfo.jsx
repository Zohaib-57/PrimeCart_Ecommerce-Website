import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const ProductInfo = () => {
	const context = useContext(myContext);
	const { loading, setLoading } = context;

	const [product, setProduct] = useState("");
	const { id } = useParams();

	const getProductData = async () => {
		setLoading(true);
		try {
			const productTemp = await getDoc(doc(fireDB, "products", id));
			setProduct({ ...productTemp.data(), id: productTemp.id });
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

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

	useEffect(() => {
		getProductData();
	}, []);

	return (
		<Layout>
			<section className="py-5 lg:py-16 font-poppins bg-[#F5F5F5] dark:bg-[#1E1E1E]">
				{loading ? (
					<div className="flex justify-center items-center">
						<Loader />
					</div>
				) : (
					<div className="max-w-6xl px-4 mx-auto">
						<div className="flex flex-wrap mb-24 -mx-4">
							<div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
								<img className="w-full lg:h-[39em] rounded-lg" src={product?.image} alt="Product" />
							</div>
							<div className="w-full px-4 md:w-1/2">
								<div className="lg:pl-20">
									<h2 className="mb-6 text-xl font-semibold text-[#333] md:text-2xl dark:text-[#E0E0E0]">
										{product?.title}
									</h2>
									<p className="text-2xl font-semibold text-[#E63946]">Rs: {product?.price}</p>
									<h2 className="mt-4 text-lg font-bold text-[#333] dark:text-[#E0E0E0]">Description :</h2>
									<p className="text-[#555] dark:text-[#BDBDBD]">{product?.description}</p>
									<div className="flex flex-wrap mt-6">
										{cartItems.some((p) => p.id === product.id) ? (
											<button onClick={() => deleteCart(product)} className="w-full px-4 py-3 text-white bg-[#E63946] rounded-xl hover:bg-[#D62839]">
												Remove from cart
											</button>
										) : (
											<button onClick={() => addCart(product)} className="w-full px-4 py-3 text-white bg-[#457B9D] rounded-xl hover:bg-[#1D3557]">
												Add to cart
											</button>
										)}
									</div>
									<div className="flex gap-4 mt-4">
										<button className="w-full px-4 py-3 text-white bg-[#1D3557] rounded-xl hover:bg-[#457B9D]">
											Buy now
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</section>
		</Layout>
	);
};

export default ProductInfo;