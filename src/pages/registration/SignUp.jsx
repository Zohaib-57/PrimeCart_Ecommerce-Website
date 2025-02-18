/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    // Consume context
    const context = useContext(myContext);

    // Check if context is available
    if (!context) {
        console.error("myContext is undefined. Ensure MyProvider is wrapping the component.");
        return null;
    }

    const { loading, setLoading } = context;

    // Navigate function
    const navigate = useNavigate();

    // User Signup State
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
    });

    const userSignupFunction = async () => {
        // Validation
        if (!userSignup.name || !userSignup.email || !userSignup.password) {
            toast.error("All fields are required");
            return;
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // Create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }),
            };

            // Create user reference
            const userReference = collection(fireDB, "user");

            // Add user details
            await addDoc(userReference, user);

            // Reset signup form
            setUserSignup({
                name: "",
                email: "",
                password: "",
            });

            toast.success("Signup Successfully");

            setLoading(false);
            navigate("/login");
        } catch (error) {
            console.error("Signup Error:", error);
            toast.error(error.message || "Signup failed");
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            {loading && <Loader />}
            {/* Signup Form */}
            <div className="login_Form bg-white px-8 py-6 border border-gray-300 rounded-xl shadow-lg">
                {/* Heading */}
                <div className="mb-5">
                    <h2 className="text-center text-2xl font-bold text-blue-600">Signup</h2>
                </div>

                {/* Input: Full Name */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={userSignup.name}
                        onChange={(e) =>
                            setUserSignup({ ...userSignup, name: e.target.value })
                        }
                        className="bg-gray-200 border border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-500"
                    />
                </div>

                {/* Input: Email */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={userSignup.email}
                        onChange={(e) =>
                            setUserSignup({ ...userSignup, email: e.target.value })
                        }
                        className="bg-gray-200 border border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-500"
                    />
                </div>

                {/* Input: Password */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder="Password"
                        value={userSignup.password}
                        onChange={(e) =>
                            setUserSignup({ ...userSignup, password: e.target.value })
                        }
                        className="bg-gray-200 border border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-500"
                    />
                </div>

                {/* Signup Button */}
                <div className="mb-5">
                    <button
                        type="button"
                        onClick={userSignupFunction}
                        className='bg-blue-600 hover:bg-blue-700 transition duration-300 w-full text-white text-center py-2 font-bold rounded-md shadow-md'
                    >
                        Signup
                    </button>
                </div>

                {/* Login Redirect */}
                <div>
                    <h2 className="text-gray-700">
                        Have an account?{" "}
                        <Link className="text-blue-600 font-bold" to={"/login"}>
                            Login
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Signup;