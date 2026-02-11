import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const EditCourse = ({ courses = [], onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => String(c.id) === String(id));

  const [form, setForm] = useState({
    title: "",
    description: "",
    instructor: "",
    role: "",
    price: "",
    rating: 0,
    reviews: 0,
    image: "",
    avatar: "",
  });

  // 🔥 isi form ketika course ditemukan
  useEffect(() => {
    if (course) {
      setForm(course);
    }
  }, [course]);

  if (!course) return <h1 className="p-10 text-center">Course not found</h1>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdate(form);

    toast.success("Course updated 🎉");

    setTimeout(() => {
      navigate(`/course/${id}`);
    }, 800);
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Edit Course</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* title */}
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Title"
        />

        {/* desc */}
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          placeholder="Description"
        />

        {/* instructor */}
        <input
          name="instructor"
          value={form.instructor}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Instructor"
        />

        {/* role */}
        <input
          name="role"
          value={form.role}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Role"
        />

        {/* price */}
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Price"
        />

        {/* rating */}
        <input
          name="rating"
          type="number"
          step="0.1"
          value={form.rating}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Rating"
        />

        {/* reviews */}
        <input
          name="reviews"
          type="number"
          value={form.reviews}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Reviews"
        />

        {/* IMAGE */}
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Image URL"
        />

        {form.image && (
          <img
            src={form.image}
            className="w-full h-48 object-cover rounded-lg"
          />
        )}

        {/* AVATAR */}
        <input
          name="avatar"
          value={form.avatar}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Avatar URL"
        />

        {form.avatar && (
          <img
            src={form.avatar}
            className="w-20 h-20 rounded-full"
          />
        )}

        <button className="btn btn-primary w-full mt-4">
          Update Course
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
