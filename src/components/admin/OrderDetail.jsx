import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
	const context = useContext(myContext);
	const { getAllOrder = [], deleteProduct } = context;

	return (
		<div className="bg-gradient-to-br from-[#D9E2E0] to-[#A0BDB4] min-h-screen p-5">
			<div className="py-5">
				<h1 className="text-xl text-[#5B4E3F] font-bold">All Orders</h1>
			</div>

			<div className="w-full overflow-x-auto">
				<table className="w-full text-left border border-collapse sm:border-separate border-[#A0BDB4] text-[#5B4E3F]">
					<tbody>
						<tr className="bg-[#557752] text-white">
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								S.No.
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								Order Id
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								Image
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								Title
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								Category
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								Price
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								Quantity
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								Total Price
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								Status
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								Name
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								Address
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								Pincode
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								Phone
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								Email
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								Date
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4]">
								Action
							</th>
						</tr>

						{getAllOrder.map((order) => {
							return order.cartItems.map((item, index) => {
								const {
									id,
									productImageUrl,
									title,
									category,
									price,
									quantity,
								} = item;
								return (
									<tr
										key={index}
										className="bg-[#D9E2E0] text-[#5B4E3F] border-b border-[#A0BDB4]"
									>
										<td className="h-12 px-6">{index + 1}</td>
										<td className="h-12 px-6">{id}</td>
										<td className="h-12 px-6">
											<img
												src={productImageUrl}
												alt="img"
												className="w-10 h-10 object-cover"
											/>
										</td>
										<td className="h-12 px-6">{title}</td>
										<td className="h-12 px-6">{category}</td>
										<td className="h-12 px-6">Rs:{price}</td>
										<td className="h-12 px-6">{quantity}</td>
										<td className="h-12 px-6">Rs:{price * quantity}</td>
										<td className="h-12 px-6 text-[#557752] font-bold">
											{order.status}
										</td>
										<td className="h-12 px-6">{order.addressInfo.name}</td>
										<td className="h-12 px-6">{order.addressInfo.address}</td>
										<td className="h-12 px-6">{order.addressInfo.pincode}</td>
										<td className="h-12 px-6">
											{order.addressInfo.mobileNumber}
										</td>
										<td className="h-12 px-6">{order.email}</td>
										<td className="h-12 px-6">{order.date}</td>
										<td
											className="h-12 px-6 cursor-pointer text-red-500"
											onClick={() => deleteProduct(order.id)}
										>
											Delete
										</td>
									</tr>
								);
							});
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OrderDetail;
