/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Layout from "../../components/layout/Layout";

const Login = () => {
	const context = useContext(myContext);
	const { loading, setLoading } = context;

	// navigate
	const navigate = useNavigate();

	// User Signup State
	const [userLogin, setUserLogin] = useState({
		email: "",
		password: "",
	});

	/**========================================================================
	 *                          User Login Function
	 *========================================================================**/

	const userLoginFunction = async () => {
		// validation
		if (userLogin.email === "" || userLogin.password === "") {
			toast.error("All Fields are required");
			return;
		}

		setLoading(true);
		try {
			const users = await signInWithEmailAndPassword(
				auth,
				userLogin.email,
				userLogin.password
			);
			// console.log(users.user)

			try {
				const q = query(
					collection(fireDB, "user"),
					where("uid", "==", users?.user?.uid)
				);
				const data = onSnapshot(q, (QuerySnapshot) => {
					let user;
					QuerySnapshot.forEach((doc) => (user = doc.data()));
					localStorage.setItem("users", JSON.stringify(user));
					setUserLogin({
						email: "",
						password: "",
					});
					toast.success("Login Successfully");
					setLoading(false);
					if (user.role === "user") {
						navigate("/userdashboard");
					} else {
						navigate("/admindashboard");
					}
				});
				return () => data();
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
			toast.error("Login Failed");
		}
	};
	return (
		<Layout>
			<div className="flex justify-center items-center h-screen">
				{loading && <Loader />}
				{/* Login Form  */}
				<div className="login_Form bg-[#F4F4F8] px-8 py-6 border border-[#C1BDB3] rounded-xl shadow-md">
					{/* Top Heading  */}
					<div className="mb-5">
						<h2 className="text-center text-2xl font-bold text-[#6D597A] ">
							Login
						</h2>
					</div>

					{/* Input One  */}
					<div className="mb-3">
						<input
							type="email"
							name="email"
							placeholder="Email Address"
							value={userLogin.email}
							onChange={(e) => {
								setUserLogin({
									...userLogin,
									email: e.target.value,
								});
							}}
							className="bg-[#F4F4F8] border border-[#C1BDB3] px-2 py-2 w-96 rounded-md outline-none placeholder-[#C1BDB3]"
						/>
					</div>

					{/* Input Two  */}
					<div className="mb-5">
						<input
							type="password"
							placeholder="Password"
							value={userLogin.password}
							onChange={(e) => {
								setUserLogin({
									...userLogin,
									password: e.target.value,
								});
							}}
							className="bg-[#F4F4F8] border border-[#C1BDB3] px-2 py-2 w-96 rounded-md outline-none placeholder-[#C1BDB3]"
						/>
					</div>

					{/* Signup Button  */}
					<div className="mb-5">
						<button
							type="button"
							onClick={userLoginFunction}
							className="bg-[#A5668B] hover:bg-[#6D597A] transition duration-300 w-full text-white text-center py-2 font-bold rounded-md shadow-md"
						>
							Login
						</button>
					</div>

					<div>
						<h2 className="text-black">
							Don't Have an account{" "}
							<Link className=" text-[#6D597A] font-bold" to={"/signup"}>
								Signup
							</Link>
						</h2>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Login;