import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddCourse = ({ addCourse }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [course, setCourse] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addCourse(course);

       toast.success('🎉 Course Added Successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })

      // reset form
      setCourse({
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

      // 🔥 balik ke beranda
      navigate("/");
    } catch (error) {
      toast.error("Failed to add course");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add New Course</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          type="text"
          value={course.title}
          onChange={(e) => setCourse({ ...course, title: e.target.value })}
          placeholder="Course Title"
          className="input input-bordered w-full"
          required
        />

        {/* Description */}
        <textarea
          value={course.description}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          required
        />

        {/* Instructor */}
        <input
          type="text"
          value={course.instructor}
          onChange={(e) =>
            setCourse({ ...course, instructor: e.target.value })
          }
          placeholder="Instructor"
          className="input input-bordered w-full"
          required
        />

        {/* Role */}
        <input
          type="text"
          value={course.role}
          onChange={(e) => setCourse({ ...course, role: e.target.value })}
          placeholder="Role"
          className="input input-bordered w-full"
          required
        />

        {/* Price */}
        <input
          type="text"
          value={course.price}
          onChange={(e) => setCourse({ ...course, price: e.target.value })}
          placeholder="Price"
          className="input input-bordered w-full"
          required
        />

        {/* Rating */}
        <input
          type="number"
          step="0.1"
          value={course.rating}
          onChange={(e) =>
            setCourse({ ...course, rating: parseFloat(e.target.value) || 0 })
          }
          placeholder="Rating"
          className="input input-bordered w-full"
          required
        />

        {/* Reviews */}
        <input
          type="number"
          value={course.reviews}
          onChange={(e) =>
            setCourse({ ...course, reviews: parseInt(e.target.value) || 0 })
          }
          placeholder="Number of Reviews"
          className="input input-bordered w-full"
          required
        />

        {/* Image URL */}
        <input
          type="text"
          value={course.image}
          onChange={(e) => setCourse({ ...course, image: e.target.value })}
          placeholder="Image URL"
          className="input input-bordered w-full"
        />
        {course.image && (
          <img
            src={course.image}
            alt="Course Preview"
            className="w-full h-48 object-cover rounded-md mt-2"
          />
        )}

        {/* Avatar URL */}
        <input
          type="text"
          value={course.avatar}
          onChange={(e) => setCourse({ ...course, avatar: e.target.value })}
          placeholder="Avatar URL"
          className="input input-bordered w-full"
        />
        {course.avatar && (
          <img
            src={course.avatar}
            alt="Instructor Avatar"
            className="w-20 h-20 object-cover rounded-full mt-2"
          />
        )}

        <button
          type="submit"
          className="btn btn-primary w-full mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add Course"}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;