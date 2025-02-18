import { useContext } from "react";
import myContext from "../../context/myContext";

const UserDetail = () => {
	const context = useContext(myContext);
	const { getAllUser = [] } = context;

	return (
		<div>
			<div className="py-5 flex justify-between items-center">
				<h1 className="text-xl text-[#5B4E3F] font-bold">All Users</h1>
			</div>

			<div className="w-full overflow-x-auto">
				<table className="w-full text-left border border-collapse sm:border-separate border-[#A0BDB4] text-[#435F42]">
					<tbody>
						<tr className="bg-[#D9E2E0] text-[#5B4E3F]">
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4] font-bold">
								S.No.
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4] font-bold">
								Name
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4] font-bold">
								Email
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4] font-bold">
								Uid
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4] font-bold">
								Role
							</th>
							<th className="h-12 px-6 text-md border-l first:border-l-0 border-[#A0BDB4] font-bold">
								Date
							</th>
						</tr>
						{getAllUser.map((value, index) => (
							<tr
								key={index}
								className="text-[#435F42] hover:bg-[#557752] hover:text-white transition duration-300"
							>
								<td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#A0BDB4]">
									{index + 1}
								</td>
								<td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#A0BDB4] first-letter:uppercase">
									{value.name}
								</td>
								<td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#A0BDB4] cursor-pointer">
									{value.email}
								</td>
								<td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#A0BDB4] cursor-pointer">
									{value.uid}
								</td>
								<td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#A0BDB4] cursor-pointer">
									{value.role}
								</td>
								<td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-[#A0BDB4] cursor-pointer">
									{value.date}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UserDetail;
