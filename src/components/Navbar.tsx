import logo from "../assets/logo.svg";

function Navbar() {
  // navbar with (logo), (Galeria zdjęć, FaQ), (Zadzwoń do nas)
  return (
    <div className="flex flex-row items-center justify-center bg-transparent py-4 px-0">
      <nav className="flex flex-row items-center justify-around bg-transparent w-full">
        <img src={logo} alt="logo" className="w-auto h-8 z-10" />
        <div className="flex flex-row items-center justify-around bg-transparent gap-6">
          <a href="#gallery" className="text-gray-800 hover:text-gray-600 z-10">
            Galeria zdjęć
          </a>
          <a href="#faq" className="text-gray-800 hover:text-gray-600 z-10">
            FaQ
          </a>
        </div>
        <button className="bg-[#0147FF] hover:bg-[#0136DF] text-white py-3 px-6 rounded-lg z-10 max-sm:hidden">
          Zadzwoń do nas
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
