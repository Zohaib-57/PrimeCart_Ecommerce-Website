import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const UserDashboard = () => {
	// user
	const user = JSON.parse(localStorage.getItem("users"));

	const context = useContext(myContext) ?? {};
	const { loading, getAllOrder = [] } = context;

	// console.log(user)
	return (
		<Layout>
			<div className="container mx-auto px-4 py-5 lg:py-8">
				{/* Top  */}
				<div className="top ">
					{/* main  */}
					<div className="bg-blue-50 py-5 rounded-xl border border-blue-100">
						{/* image  */}
						<div className="flex justify-center">
							<img
								src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
								alt=""
							/>
						</div>
						{/* text  */}
						<div className="">
							{/* Name  */}
							<h1 className="text-center text-lg">
								<span className="font-bold">Name : </span>
								{user?.name}
							</h1>

							{/* Email  */}
							<h1 className="text-center text-lg">
								<span className="font-bold">Email : </span>
								{user?.email}
							</h1>

							{/* Date  */}
							<h1 className="text-center text-lg">
								<span className="font-bold">Date : </span>
								{user?.date}
							</h1>

							{/* Role  */}
							<h1 className="text-center text-lg">
								<span className="font-bold">Role : </span>
								{user?.role}
							</h1>
						</div>
					</div>
				</div>

				{/* bottom  */}
				<div className="bottom">
					{/* main 1 */}
					<div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
						{/* text  */}
						<h2 className="text-2xl lg:text-3xl font-bold">Order Details</h2>

						<div className="flex justify-center relative top-10">
							{loading && <Loader />}
						</div>

						{/* main 2 */}
						{getAllOrder
							.filter((obj) => obj.userid === user?.uid)
							.map((order, index) => {
								return (
									<div key={index}>
										{order.cartItems.map((item, index) => {
											const {
												id,
												date,
												quantity,
												price,
												title,
												image,
												category,
											} = item;
											const { status } = order;
											return (
												<div
													key={index}
													className="mt-5 flex flex-col overflow-hidden rounded-xl border border-blue-100 md:flex-row"
												>
													{/* main 3  */}
													<div className="w-full border-r border-blue-100 bg-blue-50 md:max-w-xs">
														{/* left  */}
														<div className="p-8">
															<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
																<div className="mb-4">
																	<div className="text-sm font-semibold text-black">Order Id</div>
																	<div className="text-sm font-medium text-gray-900">#{id}</div>
																</div>

																<div className="mb-4">
																	<div className="text-sm font-semibold">Date</div>
																	<div className="text-sm font-medium text-gray-900">{date}</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											);
										})}
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default UserDashboard;
