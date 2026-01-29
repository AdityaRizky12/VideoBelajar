import React from "react";

import course1 from "../assets/images/course.1.jpg";
import course2 from "../assets/images/course.2.jpg";
import course3 from "../assets/images/course.3.jpg";
import course4 from "../assets/images/course.4.jpg";
import course5 from "../assets/images/course.5.jpg";
import course6 from "../assets/images/course.6.jpg";
import course7 from "../assets/images/course.7.jpg";
import course8 from "../assets/images/course.8.jpg";
import course9 from "../assets/images/course.9.jpg";

import avatar1 from "../assets/avatars/avatar.1.png";
import avatar2 from "../assets/avatars/avatar.2.png";
import avatar3 from "../assets/avatars/avatar.3.png";
import avatar4 from "../assets/avatars/avatar.4.png";
import avatar5 from "../assets/avatars/avatar.5.png";
import avatar6 from "../assets/avatars/avatar.6.png";
import avatar7 from "../assets/avatars/avatar.7.png";
import avatar8 from "../assets/avatars/avatar.8.png";
import avatar9 from "../assets/avatars/avatar.9.png";


const VideoCatalog = () => {
  /* kategori */
  const categories = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];

  /* data dasar (SAMA SEMUA CARD) */
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

  /* asset */
  const images = [
    course1,
    course2,
    course3,
    course4,
    course5,
    course6,
    course7,
    course8,
    course9,
  ];

  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
  ];

  /* generate 9 card */
  const cards = images.map((image, index) => ({
    id: index + 1,
    imageUrl: image,
    avatarUrl: avatars[index],
    ...baseCourse,
  }));

  return (
    <div className="bg-[#FFFDF5] min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Koleksi Video Pembelajaran Unggulan
          </h1>
          <p className="text-gray-500 mb-6">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>

          <div className="tabs tabs-bordered overflow-x-auto whitespace-nowrap">
            {categories.map((cat, idx) => (
              <a
                key={idx}
                className={`tab tab-lg ${
                  idx === 0
                    ? "tab-active !text-orange-500 !border-orange-500"
                    : "text-gray-400"
                }`}
              >
                {cat}
              </a>
            ))}
          </div>
        </header>

        {/* ================= CARD GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card card-compact bg-base-100 shadow-xl border border-gray-100"
            >
              {/* thumbnail */}
              <figure>
                <img
                  src={card.imageUrl}
                  alt="Course"
                  className="w-full h-48 object-cover"
                />
              </figure>

              <div className="card-body p-5">
                <h2 className="card-title text-lg font-bold text-gray-800">
                  {card.title}
                </h2>

                <p className="text-sm text-gray-500 line-clamp-2">
                  {card.description}
                </p>

                {/* instructor */}
                <div className="flex items-center gap-3 mt-4">
                  <div className="avatar">
                    <div className="w-10 rounded-lg">
                      <img src={card.avatarUrl} alt="Instructor" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      {card.instructor}
                    </p>
                    <p className="text-xs text-gray-400">{card.role}</p>
                  </div>
                </div>

                {/* rating & price */}
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1">
                    <div className="rating rating-xs">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <input
                          key={star}
                          type="radio"
                          readOnly
                          className={`mask mask-star-2 ${
                            star <= Math.round(card.rating)
                              ? "bg-orange-400"
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400 ml-1">
                      {card.rating} ({card.reviews})
                    </span>
                  </div>

                  <span className="text-green-600 font-bold text-lg">
                    {card.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ================= END GRID ================= */}
      </div>
    </div>
  );
};

export default VideoCatalog;
