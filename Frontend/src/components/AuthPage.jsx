import { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, User, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { register, login, reset } from "../store/auth-slice";

const InputField = ({ label, icon: Icon, ...props }) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        required
        {...props}
      />
    </div>
  </div>
);

const AuthPage = ({ type }) => {
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`${type} submitted:`, formData);
    dispatch(reset());

    const action = type === "signup" ? register : login;
    const payload =
      type === "signup"
        ? { userName: formData.name, email: formData.email, password: formData.password }
        : { email: formData.email, password: formData.password };

    const result = await dispatch(action(payload));
    console.log(`${type} result:`, result);

    if (action.fulfilled.match(result)) {
      toast.success(type === "signup" ? "Registered!" : "Logged in!");
      if (type === "signup") {
        console.log("Navigating to /login");
        navigate("/login");
      } else {
        const role = result.payload.user.role;
        console.log("User role:", role);
        const destination = role === "admin" ? "/admin/dashboard" : "/dashboard";
        console.log("Navigating to:", destination);
        navigate(destination);
      }
    } else {
      const errorMsg = result.payload?.message || "Error occurred";
      console.error(`${type} error:`, errorMsg);
      toast.error(errorMsg);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 pt-24 sm:pt-28 pb-12 px-4 sm:px-6 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
      >
        <Toaster position="top-right" />
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-4">
          {type === "signup" ? "Sign Up" : "Log In"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === "signup" && (
            <InputField
              label="Full Name"
              icon={User}
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          )}
          <InputField
            label="Email"
            icon={Mail}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            icon={Lock}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 rounded-lg text-white bg-gray-900 hover:bg-gray-800 transition disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin mr-2" />
            ) : type === "signup" ? (
              "Sign Up"
            ) : (
              "Log In"
            )}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-700">
          {type === "signup" ? "Have an account?" : "No account?"}{" "}
          <Link
            to={type === "signup" ? "/login" : "/signup"}
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            {type === "signup" ? "Log In" : "Sign Up"}
          </Link>
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AuthPage;