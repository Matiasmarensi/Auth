import { useState } from "react";

import { motion } from "framer-motion";
import Input from "../components/Input";
import { Lock, Mail, User } from "lucide-react";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();

    console.log(data);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-700 bg-opacity-40 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
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
        </form>
      </div>
    </motion.div>
  );
};

export default SignUp;
