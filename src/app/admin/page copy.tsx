"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ added
import Input from "@/components/ui/input";

// ✅ Project Type
type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: string;
};

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const router = useRouter(); // ✅ added

  const [form, setForm] = useState<Project>({
    id: "",
    title: "",
    description: "",
    longDescription: "",
    image: "",
    technologies: [],
    githubUrl: "",
    liveUrl: "",
    featured: false,
    category: "",
  });

  // ✅ 🔐 Protect Admin Page
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login"); // 🚫 block access
    }
  }, [router]);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");

    router.push("/login");
  };

  // Handle Input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      technologies: e.target.value.split(","),
    });
  };

  // Add / Update
  const handleSubmit = () => {
    if (editingId) {
      setProjects((prev) => prev.map((p) => (p.id === editingId ? form : p)));
      setEditingId(null);
    } else {
      setProjects([...projects, form]);
    }

    // Reset
    setForm({
      id: "",
      title: "",
      description: "",
      longDescription: "",
      image: "",
      technologies: [],
      githubUrl: "",
      liveUrl: "",
      featured: false,
      category: "",
    });
  };

  // Edit
  const handleEdit = (project: Project) => {
    setForm(project);
    setEditingId(project.id);
  };

  // Delete
  const handleDelete = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li>Dashboard</li>
          <li>Projects</li>
          <li>Add Projects</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="bg-white p-4 rounded-xl shadow mb-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>

          {/* ✅ Logout Button FIXED */}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow">
            Projects: {projects.length}
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            Featured: {projects.filter((p) => p.featured).length}
          </div>
          <div className="bg-white p-6 rounded-xl shadow">Revenue: ₹45,000</div>
        </div>

        {/* ================= FORM ================= */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">
            {editingId ? "Edit Project" : "Add Project"}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <Input
              name="id"
              value={form.id}
              onChange={handleChange}
              placeholder="ID"
              className="border border-gray-300 rounded p-2"
            />
            <Input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Title"
              className="border border-gray-300 rounded p-2"
            />
            <Input
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              className="border border-gray-300 rounded p-2"
            />
            <Input
              name="longDescription"
              value={form.longDescription}
              onChange={handleChange}
              placeholder="Long Description"
              className="border border-gray-300 rounded p-2"
            />
            <Input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Image"
              className="border border-gray-300 rounded p-2"
            />
            <Input
              name="technologies"
              value={form.technologies.join(", ")}
              onChange={handleTechChange}
              placeholder="React, TS, Node"
              className="border border-gray-300 rounded p-2"
            />
            <Input
              name="githubUrl"
              value={form.githubUrl}
              onChange={handleChange}
              placeholder="GitHub URL"
              className="border border-gray-300 rounded p-2"
            />
            <Input
              name="liveUrl"
              value={form.liveUrl}
              onChange={handleChange}
              placeholder="Live URL"
              className="border border-gray-300 rounded p-2"
            />
            <Input
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category"
              className="border border-gray-300 rounded p-2"
            />

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="featured"
                checked={form.featured}
                onChange={handleChange}
              />
              Featured
            </label>

            <button
              onClick={handleSubmit}
              className="col-span-2 bg-blue-500 text-white p-2 rounded"
            >
              {editingId ? "Update Project" : "Add Project"}
            </button>
          </div>
        </div>

        {/* TABLE unchanged */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Projects</h2>

          <div className="rounded-2xl shadow overflow-hidden border border-gray-200">
            <table className="w-full text-sm">
              {/* Header */}
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-4 text-left">ID</th>
                  <th className="px-6 py-4 text-left">Title</th>
                  <th className="px-6 py-4 text-left">Category</th>
                  <th className="px-6 py-4 text-left">Featured</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-gray-200">
                {projects.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-10 text-gray-400">
                      No projects found
                    </td>
                  </tr>
                ) : (
                  projects.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-medium text-gray-700">
                        {p.id}
                      </td>

                      <td className="px-6 py-4 text-gray-800">{p.title}</td>

                      <td className="px-6 py-4 text-gray-600">{p.category}</td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 text-xs rounded-full font-medium ${
                            p.featured
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {p.featured ? "Featured" : "Normal"}
                        </span>
                      </td>

                      <td className="px-6 py-4 flex gap-2">
                        <button
                          onClick={() => handleEdit(p)}
                          className="bg-yellow-400 hover:bg-yellow-500 text-white text-xs px-3 py-1.5 rounded-lg transition shadow-sm"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(p.id)}
                          className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded-lg transition shadow-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
