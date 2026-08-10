"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/input";

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

const initialForm: Project = {
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
};

const AddProjectsPage = () => {
  const router = useRouter();

  const [projects, setProjects] = useState<Project[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Project>(initialForm);

  // Protect Admin Page
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  // Handle Input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  // Handle Technologies
  const handleTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const technologies = e.target.value
      .split(",")
      .map((tech) => tech.trim())
      .filter(Boolean);

    setForm((prev) => ({
      ...prev,
      technologies,
    }));
  };

  // Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Project title is required");
      return;
    }

    if (editingId) {
      setProjects((prev) =>
        prev.map((project) =>
          project.id === editingId
            ? {
                ...form,
                id: editingId,
              }
            : project
        )
      );

      setEditingId(null);
    } else {
      const newProject: Project = {
        ...form,
        id: form.id || Date.now().toString(),
      };

      setProjects((prev) => [...prev, newProject]);
    }

    setForm(initialForm);
  };

  // Edit Project
  const handleEdit = (project: Project) => {
    setEditingId(project.id);

    setForm({
      ...project,
      technologies: project.technologies || [],
    });
  };

  // Delete Project
  const handleDelete = (id: string) => {
    setProjects((prev) =>
      prev.filter((project) => project.id !== id)
    );
  };

  // Cancel Edit
  const handleCancel = () => {
    setEditingId(null);
    setForm(initialForm);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {editingId ? "Edit Project" : "Add Project"}
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            {editingId
              ? "Update project details"
              : "Create a new project"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Form */}
          <div className="rounded-lg bg-white p-6 shadow">
            <form onSubmit={handleSubmit} className="space-y-4">

              <Input
                name="id"
                value={form.id}
                onChange={handleChange}
                placeholder="Project ID"
                className="w-full rounded border border-gray-300 p-2"
              />

              <Input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Project Title"
                className="w-full rounded border border-gray-300 p-2"
              />

              <Input
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Short Description"
                className="w-full rounded border border-gray-300 p-2"
              />

              <textarea
                name="longDescription"
                value={form.longDescription}
                onChange={handleChange}
                placeholder="Long Description"
                rows={4}
                className="w-full rounded border border-gray-300 p-2"
              />

              <Input
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="w-full rounded border border-gray-300 p-2"
              />

              <Input
                name="technologies"
                value={form.technologies.join(", ")}
                onChange={handleTechChange}
                placeholder="React, TypeScript, Node.js"
                className="w-full rounded border border-gray-300 p-2"
              />

              <Input
                name="githubUrl"
                value={form.githubUrl}
                onChange={handleChange}
                placeholder="GitHub URL"
                className="w-full rounded border border-gray-300 p-2"
              />

              <Input
                name="liveUrl"
                value={form.liveUrl}
                onChange={handleChange}
                placeholder="Live URL"
                className="w-full rounded border border-gray-300 p-2"
              />

              <Input
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Category"
                className="w-full rounded border border-gray-300 p-2"
              />

              {/* Featured */}
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="featured"
                  checked={form.featured}
                  onChange={handleChange}
                  className="h-4 w-4"
                />

                <span className="text-sm text-gray-700">
                  Featured Project
                </span>
              </label>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="rounded bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  {editingId
                    ? "Update Project"
                    : "Add Project"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="rounded border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Project List */}
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Projects
              </h2>

              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                {projects.length} Projects
              </span>
            </div>

            {projects.length === 0 ? (
              <div className="rounded border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
                No projects added yet.
              </div>
            ) : (
              <div className="space-y-3">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-lg border border-gray-200 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {project.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {project.description}
                        </p>

                        <div className="mt-2 flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {project.featured && (
                          <span className="mt-2 inline-block text-xs font-medium text-blue-600">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(project)}
                          className="rounded bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-200"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(project.id)
                          }
                          className="rounded bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-100"
                        >
                          Delete
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddProjectsPage;