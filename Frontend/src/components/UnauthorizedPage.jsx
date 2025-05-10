import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="h-12 w-12 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">403 - Access Denied</h1>
        <p className="text-gray-600 mb-6">
          You don’t have permission to view this page.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
