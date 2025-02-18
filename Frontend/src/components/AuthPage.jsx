import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";

const AuthPage = ({ type }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `${type === "signup" ? "Signing Up" : "Logging In"} with`,
      formData
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          {type === "signup" ? "Create an Account" : "Welcome Back"}
        </h2>
        <p className="text-gray-900 text-center mb-6">
          {type === "signup"
            ? "Sign up to get started"
            : "Login to access your account"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {type === "signup" && (
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-800" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                required
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-800" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-800" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
          >
            {type === "signup" ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Toggle Between Login & Signup */}
        <p className="text-gray-900 text-center mt-4">
          {type === "signup"
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <Link
            to={type === "signup" ? "/login" : "/signup"}
            className="text-gray-900 font-semibold hover:underline"
          >
            {type === "signup" ? "Login" : "Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
