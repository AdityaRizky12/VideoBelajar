import React from 'react';

const FooterSection = () => {
  return (
    <div className="bg-[#FFFDF5] pt-20">
      {/* 1. Newsletter Banner Section */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div 
          className="relative rounded-xl overflow-hidden bg-cover bg-center h-[400px] flex flex-col items-center justify-center text-center p-6"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(src/img/Newsletter.jpg)` 
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

      {/* 2. Main Footer Section */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            
            {/* Logo & Contact Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-bold text-orange-500">video</span>
                <span className="text-2xl font-bold text-gray-800">belajar</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-4">
                Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                Jl. Usman Effendi No. 50 Lowokwaru, Malang
              </p>
              <p className="text-gray-500 text-sm font-medium">+62-877-7123-1234</p>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-bold text-gray-800 mb-6">Kategori</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li>Digital & Teknologi</li>
                <li>Pemasaran</li>
                <li>Manajemen Bisnis</li>
                <li>Pengembangan Diri</li>
                <li>Desain</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-6">Perusahaan</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li>Tentang Kami</li>
                <li>FAQ</li>
                <li>Kebijakan Privasi</li>
                <li>Ketentuan Layanan</li>
                <li>Bantuan</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-6">Komunitas</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li>Tips Sukses</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-100 mb-8" />

          {/* Bottom Bar: Copyright & Socials */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm order-2 md:order-1">
              @2023 Gerobak Sayur All Rights Reserved.
            </p>
            <div className="flex gap-4 order-1 md:order-2">
              {['linkedin', 'facebook', 'instagram', 'twitter'].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`} 
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-orange-50 transition-colors"
                >
                  <img 
                    src={`https://cdn-icons-png.flaticon.com/512/733/733${social === 'linkedin' ? '555' : social === 'facebook' ? '548' : social === 'instagram' ? '558' : '577'}.png`} 
                    alt={social}
                    className="w-5 h-5 opacity-70"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;