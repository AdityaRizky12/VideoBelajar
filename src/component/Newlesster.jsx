import React from 'react'

const Newlesster = () => {
  return (
  <div className="max-w-7xl mx-auto px-4 mb-20 my-20">
        <div 
          className="relative rounded-xl overflow-hidden bg-cover bg-center h-[400px] flex flex-col items-center justify-center text-center p-6"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/img/Newsletter.jpg)` 
          }}
        >
          <span className="text-white tracking-widest text-sm mb-2 uppercase">Newsletter</span>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Mau Belajar Lebih Banyak?
          </h2>
          <p className="text-gray-200 max-w-xl mb-8">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
          </p>

          {/* Newsletter Input Group */}
          <div className="flex w-full max-w-md bg-white p-1.5 rounded-lg shadow-lg">
            <input 
              type="email" 
              placeholder="Masukkan Emailmu" 
              className="input w-full focus:outline-none border-none text-gray-700" 
            />
            <button className="btn bg-[#F9B934] hover:bg-[#e2a82e] border-none text-white px-8">
              Subscribe
            </button>
          </div>
        </div>
      </div>
  )
}

export default Newlesster