import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";

const SearchBar = () => {
    const context = useContext(myContext);
    const { getAllProduct } = context;
    // Search State 
    const [search, setSearch] = useState("");

    // Filter Search Data
    const filterSearchData = getAllProduct.filter((obj) => obj.title.toLowerCase().includes(search)).slice(0, 8);

    const navigate = useNavigate();

    return (
        <div className="">
            {/* search input */}
            <div className="input flex justify-center">
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-[#D9E2E0] placeholder-[#5B4E3F] rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-[#435F42]"
                />
            </div>

            {/* search drop-down */}
            <div className="flex justify-center">
                {search && (
                    <div className="block absolute bg-[#D9E2E0] w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
                        {filterSearchData.length > 0 ? (
                            <>
                                {filterSearchData.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="py-2 px-2 cursor-pointer hover:bg-[#A0BDB4] rounded-lg"
                                            onClick={() => navigate(`/productinfo/${item.id}`)}
                                        >
                                            <div className="flex items-center gap-2">
                                                <img className="w-10" src={item.productImageUrl} alt="" />
                                                <span className="text-[#5B4E3F]">{item.title}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        ) : (
                            <>
                                <div className="flex justify-center">
                                    <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
