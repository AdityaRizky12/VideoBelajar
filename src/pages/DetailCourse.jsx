import { useParams, useNavigate } from "react-router-dom";
import { Pencil, Trash2, ArrowLeft, Star } from "lucide-react";
import { toast } from "react-toastify";

const DetailCourse = ({ courses = [], onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => String(c.id) === String(id));

  if (!course) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-red-500">Course Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg"
        >
          Back Home
        </button>
      </div>
    );
  }

  const handleDelete = () => {
    if (!window.confirm("Delete this course?")) return;
    onDelete(course.id);
  toast.success('Course deleted successfully')
    navigate("/");
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* HEADER */}
        <div className="p-6 border-b flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-600 hover:text-black"
          >
            <ArrowLeft size={18} /> Back
          </button>

          <div className="flex gap-3">
            <button
              onClick={() => navigate(`/edit/${course.id}`)}
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
            >
              <Pencil size={18} /> Edit
            </button>

            <button
              onClick={handleDelete}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              <Trash2 size={18} /> Delete
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 p-8">
          
          {/* IMAGE */}
          <div>
            <img
              src={course.imageUrl || course.image}
              className="w-full h-[320px] object-cover rounded-xl"
            />
          </div>

          {/* INFO */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{course.title}</h1>

            <p className="text-gray-600">{course.description}</p>

            {/* instructor */}
            <div className="flex items-center gap-3 mt-4">
              <img
                src={course.avatarUrl || course.avatar}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{course.instructor}</p>
                <p className="text-sm text-gray-500">{course.role}</p>
              </div>
            </div>

            {/* rating */}
            <div className="flex items-center gap-2 mt-3">
              <Star className="text-yellow-500" fill="currentColor" />
              <span className="font-semibold">{course.rating}</span>
              <span className="text-gray-500">({course.reviews} reviews)</span>
            </div>

            {/* price */}
            <div className="mt-6">
              <span className="text-3xl font-bold text-green-600">
                {course.price}
              </span>
            </div>

            {/* buy button style */}
            <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-lg font-semibold">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCourse;
