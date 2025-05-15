import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { X, Edit, Trash2, ArrowUpDown } from "lucide-react";
import { createUser, deleteUser, fetchUsers, resetUserError, updateUser } from "../../../store/admin-slice/userMgtSlice";

export default function UserManagement() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { items: users, isLoading, error } = useSelector((state) => state.users);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    role: "user",
  });
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: "userName", direction: "asc" });

  useEffect(() => {
    if (user?.role === "admin") {
      dispatch(fetchUsers());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetUserError());
    }
  }, [error, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e, isEdit = false) => {
    e.preventDefault();
    if (!formData.userName || !formData.email || (!isEdit && !formData.password) || !formData.role) {
      toast.error("All required fields must be filled");
      return;
    }
    try {
      if (isEdit) {
        await dispatch(updateUser({ id: formData._id, userData: formData })).unwrap();
        toast.success("User updated!");
      } else {
        await dispatch(createUser(formData)).unwrap();
        toast.success("User created!");
      }
      setFormData({ userName: "", email: "", password: "", role: "user" });
      setIsCreateModalOpen(false);
      setIsEditModalOpen(false);
    } catch (err) {
      // Error handled via toast in useEffect
      toast.error(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await dispatch(deleteUser(id)).unwrap();
        toast.success("User deleted!");
      } catch (err) {
        toast.error(err.message);;
      }
    }
  };

  const handleSort = (key) => {
    setSortConfig((prev) => {
      const direction = prev.key === key && prev.direction === "asc" ? "desc" : "asc";
      return { key, direction };
    });
  };

  const sortedUsers = [...users].sort((a, b) => {
    const aValue = a[sortConfig.key] || "";
    const bValue = b[sortConfig.key] || "";
    if (sortConfig.direction === "asc") {
      return aValue.localeCompare ? aValue.localeCompare(bValue) : aValue - bValue;
    }
    return bValue.localeCompare ? bValue.localeCompare(aValue) : bValue - bValue;
  });

  const openEditModal = (user) => {
    setFormData({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      password: "",
      role: user.role,
    });
    setIsEditModalOpen(true);
  };

  const renderModal = (isEdit = false) => (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      onClick={() => (isEdit ? setIsEditModalOpen(false) : setIsCreateModalOpen(false))}
    >
      <div
        className="bg-white bg-opacity-95 rounded-2xl shadow-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-indigo-800">
            {isEdit ? "Edit User" : "Create User"}
          </h4>
          <button
            onClick={() => (isEdit ? setIsEditModalOpen(false) : setIsCreateModalOpen(false))}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={(e) => handleSubmit(e, isEdit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password {isEdit ? "(Optional)" : ""}
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
              placeholder={isEdit ? "Enter new password (optional)" : "Enter password"}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
            >
              <option value="user">User</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => (isEdit ? setIsEditModalOpen(false) : setIsCreateModalOpen(false))}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 text-sm"
            >
              {isLoading ? "Saving..." : isEdit ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  if (user?.role !== "admin") {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <h3 className="text-2xl font-semibold text-indigo-800 mb-4">User Management</h3>
        <p className="text-gray-600">You do not have permission to access this section.</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h3 className="text-2xl font-semibold text-indigo-800">User Management</h3>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md text-sm font-medium animate-pulse-hover"
        >
          Add User
        </button>
      </div>

      {/* Create/Edit Modals */}
      {isCreateModalOpen && renderModal(false)}
      {isEditModalOpen && renderModal(true)}

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
        {isLoading && <p className="p-4 text-gray-600 text-sm">Loading...</p>}
        {!isLoading && users.length === 0 && (
          <p className="p-4 text-gray-600 text-sm">No users available.</p>
        )}
        {!isLoading && users.length > 0 && (
          <table className="w-full text-left text-sm">
            <thead className="bg-indigo-50">
              <tr>
                {["userName", "email", "role"].map((key) => (
                  <th
                    key={key}
                    onClick={() => handleSort(key)}
                    className="p-4 font-medium text-indigo-700 cursor-pointer hover:bg-indigo-100 transition"
                  >
                    <div className="flex items-center">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                      <ArrowUpDown className="h-4 w-4 ml-1" />
                    </div>
                  </th>
                ))}
                <th className="p-4 font-medium text-indigo-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map((userItem) => (
                <tr
                  key={userItem._id}
                  className="border-t border-gray-200 hover:bg-indigo-50 transition"
                >
                  <td className="p-4 text-gray-700">{userItem.userName}</td>
                  <td className="p-4 text-gray-700">{userItem.email}</td>
                  <td className="p-4 text-gray-700">{userItem.role}</td>
                  <td className="p-4 flex space-x-2">
                    <button
                      onClick={() => openEditModal(userItem)}
                      className="p-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(userItem._id)}
                      className="p-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}