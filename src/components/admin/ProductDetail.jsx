import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const ProductDetail = () => {
	const context = useContext(myContext);
	const { loading, setLoading, getAllProduct, getAllProductFunction } = context;

	const navigate = useNavigate();

	const deleteProduct = async (id) => {
		setLoading(true);
		try {
			await deleteDoc(doc(fireDB, "products", id));
			toast.success("Product Deleted successfully");
			getAllProductFunction();
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const handleDeleteProduct = (productId) => {
		if (typeof productId === "string" || Array.isArray(productId)) {
			deleteProduct(productId);
		} else {
			console.error("Invalid productId:", productId);
		}
	};

	return (
		<div>
			<div className="py-5 flex justify-between items-center">
				<h1 className="text-xl text-[#1E3A5F] font-bold">All Product</h1>
				<Link to={"/addproduct"}>
					<button className="px-5 py-2 bg-[#A0C1D1] border border-[#567D8C] rounded-lg text-[#1E3A5F] font-semibold">
						Add Product
					</button>
				</Link>
			</div>

			<div className="flex justify-center relative top-20">
				{loading && <Loader />}
			</div>

			<div className="w-full overflow-x-auto mb-5">
				<table className="w-full text-left border border-collapse sm:border-separate border-[#567D8C] text-[#1E3A5F]">
					<tbody>
						<tr>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#567D8C] text-[#1E3A5F] bg-[#A0C1D1] font-bold">
								S.No.
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#567D8C] text-[#1E3A5F] bg-[#A0C1D1] font-bold">
								Image
							</th>
							<th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-[#567D8C] text-[#1E3A5F] bg-[#A0C1D1]">
								Title
							</th>
							<th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-[#567D8C] text-[#1E3A5F] bg-[#A0C1D1]">
								Price
							</th>
							<th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-[#567D8C] text-[#1E3A5F] bg-[#A0C1D1]">
								Category
							</th>
							<th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-[#567D8C] text-[#1E3A5F] bg-[#A0C1D1]">
								Date
							</th>
							<th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-[#567D8C] text-[#1E3A5F] bg-[#A0C1D1]">
								Action
							</th>
						</tr>
						{getAllProduct.map((item, index) => {
							const { id, title, price, category, date, image } = item;
							return (
								<tr key={index} className="text-[#1E3A5F]">
									<td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#567D8C] text-[#1E3A5F]">
										{index + 1}.
									</td>
									<td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#567D8C] text-[#1E3A5F]">
										<div className="flex justify-center">
											<img className="w-20" src={image} alt="" />
										</div>
									</td>
									<td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#567D8C] text-[#1E3A5F]">
										{title}
									</td>
									<td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#567D8C] text-[#B18121]">
										Rs:{price}
									</td>
									<td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#567D8C] text-[#1E3A5F]">
										{category}
									</td>
									<td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#567D8C] text-[#1E3A5F]">
										{date}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProductDetail;
