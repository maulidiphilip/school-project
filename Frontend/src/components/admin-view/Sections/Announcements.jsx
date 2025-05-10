import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { createAnnouncement, fetchAnnouncements, updateAnnouncement, deleteAnnouncement, resetAnnouncementError } from "../../../store/admin-slice/announcementSlice";
import { X, Eye, Edit, Trash2, ArrowUpDown } from "lucide-react";

export default function Announcements() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { items: announcements, isLoading, error } = useSelector((state) => state.announcements);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    date: "",
    description: "",
    details: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: "createdAt", direction: "desc" });

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetAnnouncementError());
    }
  }, [error, dispatch]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData({ ...formData, image: file });
      if (file) {
        setImagePreview(URL.createObjectURL(file));
      } else {
        setImagePreview(null);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e, isEdit = false) => {
    e.preventDefault();
    if (!formData.id || !formData.title || !formData.date || !formData.description || !formData.details) {
      toast.error("All fields except image are required");
      return;
    }
    try {
      const dataToSend = { ...formData };
      if (!formData.image) {
        delete dataToSend.image;
      }
      if (isEdit) {
        await dispatch(updateAnnouncement(dataToSend)).unwrap();
        toast.success("Announcement updated!");
      } else {
        await dispatch(createAnnouncement(dataToSend)).unwrap();
        toast.success("Announcement created!");
      }
      setFormData({
        id: "",
        title: "",
        date: "",
        description: "",
        details: "",
        image: null,
      });
      setImagePreview(null);
      setIsCreateModalOpen(false);
      setIsEditModalOpen(false);
    } catch (err) {
      // Error handled via toast in useEffect
    }
  };

  const handleDelete = async (id) => {
    if (!id) {
      toast.error("Invalid announcement ID");
      return;
    }
    if (window.confirm("Are you sure you want to delete this announcement?")) {
      try {
        await dispatch(deleteAnnouncement(id)).unwrap();
        toast.success("Announcement deleted!");
      } catch (err) {
        toast.error("Failed to delete announcement");
      }
    }
  };

  const handleSort = (key) => {
    setSortConfig((prev) => {
      const direction = prev.key === key && prev.direction === "asc" ? "desc" : "asc";
      return { key, direction };
    });
  };

  const sortedAnnouncements = [...announcements].sort((a, b) => {
    const aValue = a[sortConfig.key] || "";
    const bValue = b[sortConfig.key] || "";
    if (sortConfig.direction === "asc") {
      return aValue.localeCompare ? aValue.localeCompare(bValue) : aValue - bValue;
    }
    return bValue.localeCompare ? bValue.localeCompare(aValue) : bValue - aValue;
  });

  const openEditModal = (announcement) => {
    setFormData({
      id: announcement.id,
      title: announcement.title,
      date: announcement.date,
      description: announcement.description,
      details: announcement.details,
      image: null,
    });
    setImagePreview(announcement.image || null);
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
            {isEdit ? "Edit Announcement" : "Create Announcement"}
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
            <label className="block text-sm font-medium text-gray-700">ID</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
              placeholder="e.g., science-fair"
              disabled={isEdit}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
              placeholder="Enter announcement title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
              placeholder="e.g., October 15th"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
              rows="3"
              placeholder="Enter a short description"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Details</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
              rows="4"
              placeholder="Enter detailed information"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image (Optional)</label>
            <input
              type="file"
              name="image"
              accept="image/jpeg,image/png"
              onChange={handleInputChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 h-32 w-auto rounded-lg object-cover"
              />
            )}
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

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h3 className="text-2xl font-semibold text-indigo-800">Announcements</h3>
        {user?.role === "admin" && (
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md text-sm font-medium animate-pulse-hover"
          >
            Add Announcement
          </button>
        )}
      </div>

      {/* Create/Edit Modals */}
      {isCreateModalOpen && renderModal(false)}
      {isEditModalOpen && renderModal(true)}

      {/* Announcements Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
        {isLoading && <p className="p-4 text-gray-600 text-sm">Loading...</p>}
        {!isLoading && sortedAnnouncements.length === 0 && (
          <p className="p-4 text-gray-600 text-sm">No announcements available.</p>
        )}
        {!isLoading && sortedAnnouncements.length > 0 && (
          <table className="w-full text-left text-sm">
            <thead className="bg-indigo-50">
              <tr>
                {["id", "title", "date"].map((key) => (
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
                <th className="p-4 font-medium text-indigo-700">Description</th>
                <th className="p-4 font-medium text-indigo-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedAnnouncements.map((announcement) => (
                <tr
                  key={announcement.id}
                  className="border-t border-gray-200 hover:bg-indigo-50 transition"
                >
                  <td className="p-4 text-gray-700">{announcement.id}</td>
                  <td className="p-4 text-gray-700">{announcement.title}</td>
                  <td className="p-4 text-gray-700">{announcement.date}</td>
                  <td className="p-4 text-gray-700 truncate max-w-xs">{announcement.description}</td>
                  <td className="p-4 flex space-x-2">
                    <button
                      onClick={() => setIsViewModalOpen(true) || setSelectedAnnouncement(announcement)}
                      className="p-1 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition"
                      title="View"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    {user?.role === "admin" && (
                      <>
                        <button
                          onClick={() => openEditModal(announcement)}
                          className="p-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(announcement.id)}
                          className="p-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* View Announcement Modal */}
      {isViewModalOpen && selectedAnnouncement && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          onClick={() => setIsViewModalOpen(false)}
        >
          <div
            className="bg-white bg-opacity-95 rounded-2xl shadow-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-semibold text-indigo-800">{selectedAnnouncement.title}</h4>
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              {selectedAnnouncement.image && (
                <img
                  src={selectedAnnouncement.image}
                  alt={selectedAnnouncement.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
              <p className="text-gray-600 text-sm">
                <strong>ID:</strong> {selectedAnnouncement.id}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Date:</strong> {selectedAnnouncement.date}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Description:</strong> {selectedAnnouncement.description}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Details:</strong> {selectedAnnouncement.details}
              </p>
              <p className="text-sm text-gray-500">
                Posted on: {new Date(selectedAnnouncement.createdAt).toLocaleDateString()}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setIsViewModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}