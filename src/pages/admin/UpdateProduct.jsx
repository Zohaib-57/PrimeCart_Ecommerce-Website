import { useNavigate, useParams } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const categoryList = [
	{ name: "fashion" },
	{ name: "shirt" },
	{ name: "jacket" },
	{ name: "mobile" },
	{ name: "laptop" },
	{ name: "shoes" },
	{ name: "home" },
	{ name: "books" },
];

const UpdateProductPage = () => {
	const context = useContext(myContext);
	const { loading, setLoading, getAllProductFunction } = context;
	const navigate = useNavigate();
	const { id } = useParams();

	const [product, setProduct] = useState({
		title: "",
		price: "",
		image: "",
		category: "",
		description: "",
		time: Timestamp.now(),
		date: new Date().toLocaleString("en-US", {
			month: "short",
			day: "2-digit",
			year: "numeric",
		}),
	});

	const getSingleProductFunction = async () => {
		setLoading(true);
		try {
			const productTemp = await getDoc(doc(fireDB, "products", id));
			const product = productTemp.data();
			setProduct({
				title: product?.title,
				price: product?.price,
				image: product?.image,
				category: product?.category,
				description: product?.description,
				quantity: product?.quantity,
				time: product?.time,
				date: product?.date,
			});
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	const updateProduct = async () => {
		setLoading(true);
		try {
			await setDoc(doc(fireDB, "products", id), product);
			toast.success("Product Updated successfully");
			getAllProductFunction();
			navigate("/admindashboard");
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		getSingleProductFunction();
	}, []);

	return (
		<div className="flex justify-center items-center h-screen bg-[#DFE3E6]">
			{loading && <Loader />}
			<div className="login_Form bg-[#96CCD7] px-8 py-6 border border-[#2C748B] rounded-xl shadow-md">
				<div className="mb-5">
					<h2 className="text-center text-2xl font-bold text-[#2C748B]">
						Update Product
					</h2>
				</div>
				<div className="mb-3">
					<input
						type="text"
						name="title"
						value={product.title}
						onChange={(e) => setProduct({ ...product, title: e.target.value })}
						placeholder="Product Title"
						className="bg-[#DFE3E6] border text-[#2C748B] border-[#2C748B] px-2 py-2 w-96 rounded-md outline-none placeholder-[#2C748B]"
					/>
				</div>
				<div className="mb-3">
					<input
						type="number"
						name="price"
						value={product.price}
						onChange={(e) => setProduct({ ...product, price: e.target.value })}
						placeholder="Product Price"
						className="bg-[#DFE3E6] border text-[#2C748B] border-[#2C748B] px-2 py-2 w-96 rounded-md outline-none placeholder-[#2C748B]"
					/>
				</div>
				<div className="mb-3">
					<input
						type="text"
						name="image"
						value={product.image}
						onChange={(e) => setProduct({ ...product, image: e.target.value })}
						placeholder="Product Image Url"
						className="bg-[#DFE3E6] border text-[#2C748B] border-[#2C748B] px-2 py-2 w-96 rounded-md outline-none placeholder-[#2C748B]"
					/>
				</div>
				<div className="mb-3">
					<select
						value={product.category}
						onChange={(e) =>
							setProduct({ ...product, category: e.target.value })
						}
						className="w-full px-1 py-2 text-[#2C748B] bg-[#DFE3E6] border border-[#2C748B] rounded-md outline-none"
					>
						<option disabled>Select Product Category</option>
						{categoryList.map((value, index) => (
							<option
								className=" first-letter:uppercase"
								key={index}
								value={value.name}
							>
								{value.name}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<textarea
						value={product.description}
						onChange={(e) =>
							setProduct({ ...product, description: e.target.value })
						}
						name="description"
						placeholder="Product Description"
						rows="5"
						className="w-full px-2 py-1 text-[#2C748B] bg-[#DFE3E6] border border-[#2C748B] rounded-md outline-none placeholder-[#2C748B]"
					/>
				</div>
				<div className="mb-3">
					<button
						onClick={updateProduct}
						type="button"
						className="bg-[#B18121] hover:bg-[#7145DE] w-full text-white text-center py-2 font-bold rounded-md"
					>
						Update Product
					</button>
				</div>
			</div>
		</div>
	);
};

export default UpdateProductPage;
