import React from "react";
import { Link } from "react-router-dom";

const VideoCatalog = ({ courses = [] }) => {
  return (
    <div className="bg-[#FFFDF5] min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((card) => (
            <div key={card.id} className="card bg-base-100 shadow-xl">

              <figure>
                <img src={card.image} className="h-48 w-full object-cover" />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description}</p>

                <div className="flex items-center gap-3 mt-2">
                  <img src={card.avatar} className="w-10 rounded-full" />
                  <div>
                    <p className="font-bold">{card.instructor}</p>
                    <p className="text-xs">{card.role}</p>
                  </div>
                </div>

                <div className="flex justify-between mt-3">
                  <span>{card.price}</span>
                  <span>⭐ {card.rating}</span>
                </div>

                <Link
                  to={`/course/${card.id}`}
                  className="btn btn-primary w-full mt-4"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default VideoCatalog;
