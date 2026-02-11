import React, { useState } from "react";

const Kategori = ({ onChange }) => {
  const categories = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];

  const [active, setActive] = useState("Semua Kelas");

  const handleClick = (cat) => {
    setActive(cat);
    onChange(cat); // kirim ke parent
  };

  return (
    <header className="mb-8 mx-3">
      <h1 className="text-2xl font-bold mb-2">
        Koleksi Video Pembelajaran Unggulan
      </h1>
      
     <p className="text-gray-500 mb-6">
         Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>

      <div className="tabs tabs-bordered overflow-x-auto whitespace-nowrap ">
        {categories.map((cat) => (
          <button 
            key={cat}
            onClick={() => handleClick(cat)}
            className={`tab tab-lg my-2${
              active === cat
                ? "tab-active !text-orange-500 !border-orange-500"
                : "text-gray-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Kategori;
