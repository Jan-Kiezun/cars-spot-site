import logo from "../assets/logo.svg";

function Navbar() {
  // navbar with (logo), (Galeria zdjęć, FaQ), (Zadzwoń do nas)
  return (
    <div className="flex flex-row items-center justify-center bg-transparent py-4 px-0">
      <nav className="flex flex-row items-center justify-around bg-transparent w-full">
        <img src={logo} alt="logo" className="w-auto h-8" />
        <div className="flex flex-row items-center justify-around bg-transparent gap-6">
          <a href="#gallery" className="text-gray-800 hover:text-gray-600">
            Galeria zdjęć
          </a>
          <a href="#faq" className="text-gray-800 hover:text-gray-600">
            FaQ
          </a>
        </div>
        <button className="bg-[#0147FF] hover:bg-[#0136DF] text-white py-3 px-6 rounded-lg">
          Zadzwoń do nas
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
