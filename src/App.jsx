import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import MainLayout from "./MainLayout/MainLayout";
import CreateCourse from "./pages/CreateCourse";
import AddCourse from "./pages/AddCourse";
import DetailCourse from "./pages/DetailCourse";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import EditCourse from "./pages/EditCourse";

// images
import course1 from "./assets/images/course.1.jpg";
import course2 from "./assets/images/course.2.jpg";
import course3 from "./assets/images/course.3.jpg";
import course4 from "./assets/images/course.4.jpg";
import course5 from "./assets/images/course.5.jpg";
import course6 from "./assets/images/course.6.jpg";
import course7 from "./assets/images/course.7.jpg";
import course8 from "./assets/images/course.8.jpg";
import course9 from "./assets/images/course.9.jpg";

import avatar1 from "./assets/avatars/avatar.1.png";
import avatar2 from "./assets/avatars/avatar.2.png";
import avatar3 from "./assets/avatars/avatar.3.png";
import avatar4 from "./assets/avatars/avatar.4.png";
import avatar5 from "./assets/avatars/avatar.5.png";
import avatar6 from "./assets/avatars/avatar.6.png";
import avatar7 from "./assets/avatars/avatar.7.png";
import avatar8 from "./assets/avatars/avatar.8.png";
import avatar9 from "./assets/avatars/avatar.9.png";

function App() {

  // base dummy
  const baseCourse = {
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.",
    instructor: "Jenna Ortega",
    role: "Senior Accountant di Gojek",
    price: "Rp 300K",
    rating: 3.5,
    reviews: 88,
  };

  const images = [course1, course2, course3, course4, course5, course6, course7, course8, course9];
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9];

  const dummyCourses = images.map((image, index) => ({
    id: "dummy-" + index,
    image: image,
    avatar: avatars[index],
    ...baseCourse,
  }));

  // state + localStorage
  const [courses, setCourses] = useState(() => {
  const saved = localStorage.getItem("courses");
  const userCourses = saved ? JSON.parse(saved) : [];
  return [...userCourses, ...dummyCourses];
});

useEffect(() => {
  const userOnly = courses.filter(c => !String(c.id).startsWith("dummy-"));
  localStorage.setItem("courses", JSON.stringify(userOnly));
}, [courses]);

  const addCourse = (course) => {
    const newCourse = {
      id: Date.now(),
      ...course,
    };

    setCourses((prev) => [newCourse, ...prev]);
  };

  const deleteCourse = (id) => {
  setCourses(courses.filter((c) => c.id !== id));
};

const updateCourse = (updated) => {
  setCourses((prev) =>
    prev.map((c) => (c.id === updated.id ? updated : c))
  );
};



  return (
    <Routes>
      <Route element={<MainLayout />}>

        {/* HOME */}
        <Route path="/" element={<Home courses={courses} />} />

        {/* DETAIL */}
        <Route path="/course/:id" element={<DetailCourse courses={courses} onDelete={deleteCourse} />} />

        {/* CREATE PAGE */}
        <Route path="/create-course" element={<CreateCourse courses={courses} />} />

        {/* ADD */}
        <Route path="/add-course" element={<AddCourse addCourse={addCourse} />} />

        {/* EDIT */}
      <Route
  path="/edit/:id"
  element={<EditCourse courses={courses} onUpdate={updateCourse} />}
/>



        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Route>

      {/* tanpa layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
