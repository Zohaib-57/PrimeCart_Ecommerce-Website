import { useNavigate } from "react-router";

const category = [
	{
		image: "https://cdn-icons-png.flaticon.com/256/4359/4359963.png",
		name: "Fashion",
	},
	{
		image: "https://cdn-icons-png.flaticon.com/256/11833/11833323.png",
		name: "Shirt",
	},
	{
		image: "https://cdn-icons-png.flaticon.com/256/8174/8174424.png",
		name: "Jacket",
	},
	{
		image: "https://cdn-icons-png.flaticon.com/256/7648/7648246.png",
		name: "Mobile",
	},
	{
		image: "https://cdn-icons-png.flaticon.com/256/12142/12142416.png",
		name: "Laptop",
	},
	{
		image: "https://cdn-icons-png.flaticon.com/256/10686/10686553.png",
		name: "Shoes",
	},
	{
		image: "https://cdn-icons-png.flaticon.com/256/12114/12114279.png",
		name: "Home",
	},
	{
		image: "https://cdn-icons-png.flaticon.com/256/11946/11946316.png",
		name: "Books",
	},
];

const Category = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className="flex flex-col mt-5">
				<div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
					<div className="flex space-x-4 lg:space-x-10">
						{category.map((item, index) => {
							return (
								<div key={index} className="flex flex-col items-center">
									<div
										onClick={() => navigate(`/category/${item.name}`)}
										className="w-20 h-20 lg:w-24 lg:h-24 max-w-xs rounded-full bg-[#5B4E3F] transition-all hover:bg-[#557752] cursor-pointer mb-1 flex items-center justify-center"
									>
										<img
											src={item.image}
											alt="img"
											className="w-12 h-12 lg:w-16 lg:h-16"
										/>
									</div>
									<h1 className="text-sm lg:text-lg text-center font-medium title-font text-[#435F42]">
										{item.name}
									</h1>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<style
				dangerouslySetInnerHTML={{
					__html: `
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
` }}
			/>
		</div>
	);
};

export default Category;
