import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import React from "react";

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<div className="main-content min-h-screen">{children}</div>
			<Footer className />
		</div>
	);
};

export default Layout;
