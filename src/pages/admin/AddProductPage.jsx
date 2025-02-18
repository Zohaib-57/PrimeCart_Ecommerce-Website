import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
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

const AddProductPage = () => {
	const context = useContext(myContext);
	const { loading, setLoading } = context;

	const navigate = useNavigate();

	const [product, setProduct] = useState({
		title: "",
		price: "",
		image: "",
		category: "",
		description: "",
		quantity: 1,
		time: Timestamp.now(),
		date: new Date().toLocaleString("en-US", {
			month: "short",
			day: "2-digit",
			year: "numeric",
		}),
	});

	const addProductFunction = async () => {
		if (
			!product.title ||
			!product.price ||
			!product.image ||
			!product.category ||
			!product.description
		) {
			return toast.error("All fields are required");
		}

		setLoading(true);
		try {
			const productRef = collection(fireDB, "products");
			await addDoc(productRef, product);
			toast.success("Product added successfully!");
			navigate("-dashboard");
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
			toast.error("Failed to add product");
		}
	};

	return (
		<div className="flex justify-center items-center h-screen bg-[#D9E2E0]">
			{loading && <Loader />}
			<div className="bg-white px-8 py-6 border border-[#5B4E3F] rounded-xl shadow-md">
				<div className="mb-5">
					<h2 className="text-center text-2xl font-bold text-[#5B4E3F]">
						Add Product
					</h2>
				</div>

				<div className="mb-3">
					<input
						type="text"
						name="title"
						value={product.title}
						onChange={(e) => setProduct({ ...product, title: e.target.value })}
						placeholder="Product Title"
						className="bg-[#A0BDB4] text-[#5B4E3F] border border-[#5B4E3F] px-2 py-2 w-96 rounded-md outline-none placeholder-[#5B4E3F]"
					/>
				</div>

				<div className="mb-3">
					<input
						type="number"
						name="price"
						value={product.price}
						onChange={(e) => setProduct({ ...product, price: e.target.value })}
						placeholder="Product Price"
						className="bg-[#A0BDB4] text-[#5B4E3F] border border-[#5B4E3F] px-2 py-2 w-96 rounded-md outline-none placeholder-[#5B4E3F]"
					/>
				</div>

				<div className="mb-3">
					<input
						type="text"
						name="image"
						value={product.image}
						onChange={(e) => setProduct({ ...product, image: e.target.value })}
						placeholder="Product Image URL"
						className="bg-[#A0BDB4] text-[#5B4E3F] border border-[#5B4E3F] px-2 py-2 w-96 rounded-md outline-none placeholder-[#5B4E3F]"
					/>
				</div>

				<div className="mb-3">
					<select
						value={product.category}
						onChange={(e) =>
							setProduct({ ...product, category: e.target.value })
						}
						className="w-full px-2 py-2 text-[#5B4E3F] bg-[#A0BDB4] border border-[#5B4E3F] rounded-md outline-none"
					>
						<option disabled>Select Product Category</option>
						{categoryList.map((value, index) => (
							<option
								className="first-letter:uppercase"
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
						className="w-full px-2 py-1 text-[#5B4E3F] bg-[#A0BDB4] border border-[#5B4E3F] rounded-md outline-none placeholder-[#5B4E3F]"
					></textarea>
				</div>

				<div className="mb-3">
					<button
						onClick={addProductFunction}
						type="button"
						className="bg-[#557752] hover:bg-[#435F42] w-full text-white text-center py-2 font-bold rounded-md transition-all"
					>
						Add Product
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddProductPage;
