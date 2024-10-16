import { useState } from "react";

import { motion } from "framer-motion";
import Input from "../components/Input";
import { Lock, Mail, User } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import PasswordBar from "../components/PasswordBar";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, error, loading } = useAuthStore();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(name, email, password);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-900 bg-opacity-40 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent ">
          Sign Up
        </h2>
        <form onSubmit={handleSignUp}>
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <PasswordBar password={password} />
          <motion.button
            className="mt-5 w-full py-5 px-4 bg-gradient-to-r from-orange-600 to-orange-300 text-white font-bold rounded-lg shadow-xl hover:scale-105 transition duration-100 "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            Sign Up
            {loading && <span className="loading loading-dots loading-xs"></span>}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-orange-950 opacity-30 flex justify-center">
        <p className="text-white text-sm">
          {" "}
          Already have an account?{" "}
          <Link to="/login" className="text-orange-200 hover:underline">
            Login!
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUp;
