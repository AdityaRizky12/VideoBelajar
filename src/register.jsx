import { useState } from "react";
import { Link } from "react-router";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phone, setPhone] = useState("");


  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      {/* Header */}
      <header className="w-full bg-white py-4 px-6 md:px-12">
        <h1 className="text-xl md:text-2xl font-bold text-[#F8B511]">
          videobelajar
        </h1>
      </header>

      {/* Main */}
      <main className="flex grow items-center justify-center mt-10">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-center">
            Pendaftaran Akun
          </h2>
          <p className="text-center text-sm text-gray-500 mt-1">
            Yuk, daftarkan akunmu sekarang juga!
          </p>

          <form className="space-y-4 mt-4">
            {/* Nama */}
            <div>
              <label className="text-sm font-medium">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="input input-bordered w-full mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">
                E-Mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="email@gmail.com"
                className="input input-bordered w-full mt-1"
              />
            </div>

            {/* No HP */}
         <div>
  <label className="text-sm font-medium">
    No. HP <span className="text-red-500">*</span>
  </label>

  <div className="mt-1">
    <PhoneInput
      country={"id"}          // default Indonesia 🇮🇩
      value={phone}
      onChange={(phone) => setPhone(phone)}
      inputClass="!w-full !h-12"
      containerClass="w-full"
      buttonClass="!border !border-gray-300"
      dropdownClass="!bg-white"
    />
     </div>
      </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium">
                Kata Sandi <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="input input-bordered w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Konfirmasi Password */}
            <div>
              <label className="text-sm font-medium">
                Konfirmasi Kata Sandi <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-1">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="********"
                  className="input input-bordered w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Button */}
            <button className="btn w-full bg-[#3ECF8E] text-white">
              Daftar
            </button>

            <Link
              to="/login"
              className="btn btn-outline w-full border-[#3ECF8E] text-[#3ECF8E]"
            >
              Masuk
            </Link>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="grow border-t"></div>
              <span className="mx-3 text-xs text-gray-400">atau</span>
              <div className="grow border-t"></div>
            </div>

            {/* Google */}
            <button className="btn btn-outline w-full flex gap-2">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                className="w-5"
              />
              Daftar dengan Google
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;
