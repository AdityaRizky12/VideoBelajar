

const Hero = () => {
  return (
    <section className="px-4 md:px-6 py-10 bg-[#FFFBEF]">
      <div
        className="
          relative
          max-w-6xl
          mx-auto
          rounded-xl
          overflow-hidden
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: "url(/img/hero.jpg)"

        }}
      >
        {/* overlay gelap */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* content */}
        <div className="relative z-10 px-6 py-10 md:px-12 md:py-16 text-center text-white">
          <h1 className="text-xl md:text-3xl font-bold leading-snug">
            Revolusi Pembelajaran: Temukan <br className="hidden md:block" />
            Ilmu Baru melalui Platform Video Interaktif!
          </h1>

          <p className="mt-4 text-sm md:text-base max-w-3xl mx-auto text-gray-200">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>

          <button className="btn mt-6 bg-[#3ECF4C] text-white border-none hover:bg-[#35b87f]">
            Temukan Video Course untuk Dipelajari!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
