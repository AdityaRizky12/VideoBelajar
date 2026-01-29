import { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [showPassword,setShowPassword] = useState(false)
    return ( 
   <div className ="min-h-screen bg-amber-100 flex flex-col">
  <header className="w-full bg-white py-4 px-6 md:px-12">
    <h1 className="text-xl md:text-2xl font-bold text-[#F8B511]">
      videobelajar
    </h1>
  </header>

<main className="min-h-screen flex items-center justify-center ">
  <div className="w-full max-w-md bg-white p-6 rounded-md shadow">
    <h2 className="text-2xl font-bold text-center">Masuk ke Akun</h2>
    <p className="text-center text-sm text-gray-500 mt-1">
      Yuk, lanjutin belajarmu di videobelajar.
    </p>
  <form className="space-y-3">
    <div>
    <label className="text-sm font-medium ">E-mail <span className="text-red-500">*</span></label>
     <input type="email" placeholder="Email12@gmail.com" className="input input-bordered w-full mt-1 " />
    </div>
    <div>
<div>
  <label className="text-sm font-medium">
    Kata Sandi <span className="text-red-500">*</span>
  </label>

  <div className="relative mt-1">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="*********"
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
  <p className="text-right text-sm text-gray-500 mt-1">
    Lupa Password?
   </p>
    </div>
        <div className="space-y-3">
            <Link to="/" className="btn w-full bg-[#3ECF8E] text-white">
              Masuk
            </Link>
            <Link to="/register" className="btn btn-outline w-full border-[#3ECF8E] text-[#3ECF8E]">
              Daftar
            </Link>
          </div>
         <div className="flex items-center my-4">
  <div className="grow border-t text-gray-400"></div>
  <span className="mx-3 text-xs text-gray-400">atau</span>
  <div className="grow border-t text-gray-400"></div>
  </div>
       <button className="btn btn-outline w-full flex gap-2">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              className="w-5"
            />
            Masuk dengan Google
          </button>
  </form>
  </div>
</main>

   </div>
     );
}
 
export default Login;