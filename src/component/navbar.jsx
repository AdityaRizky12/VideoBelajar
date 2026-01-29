import avatarImg from "../img/navbar.png";

const Navbar = () => {
  return (
 <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
   <a className="text-xl font-bold text-[#F8B511] p-10">videobelajar</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
           <img
        alt="Avatar"
        src={avatarImg}
      />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default Navbar;

