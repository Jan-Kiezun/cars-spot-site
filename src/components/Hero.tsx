import three_cars from "../assets/three-cars.svg";
import hero_squiggles from "../assets/hero-squiggles.svg";

function Hero() {
  // hero_squiggles są w tle po prawej pod three_cars
  // tekst z napisem „Sprzedajemy samochody z europy”, font: Roboto Flex
  // mały tekst z napisem Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem. font: Roboto Condensed
  // dwa przyciski: zobacz zdjęcia, zadzwoń do nas
  return (
    <div className="relative flex items-center px-48 max-2xl:px-24 max-lg:px-12 max-sm:px-4 h-[500px] mb-[calc(100vh-500px-80px)] max-sm:mb-24">
      <img
        src={three_cars}
        alt="three cars"
        // clip 1px from the left side of the svg, then move right by px
        className="absolute w-[68%]
        right-0 top-[62%] z-10 max-lg:hidden"
      />
      <img
        src={hero_squiggles}
        alt="hero squiggles"
        className="absolute right-[10%] z-0 max-sm:top-0 w-1/2 max-sm:w-[100%] max-lg:hidden"
      />
      <div className="z-20 flex flex-col gap-10">
        <h1 className="text-[#333] font-roboto-flex text-7xl font-semibold uppercase tracking-tight w-3/4">
          Sprzedajemy samochody z europy
        </h1>
        <p className="text-[#333] font-roboto-condensed text-xl w-[55%]">
          Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
        </p>
        <div className="mt-4 flex flex-row gap-6">
          <button className="bg-[#0147FF] hover:bg-[#0136DF] text-white py-3 px-6 rounded-lg z-10">
            Zobacz zdjęcia
          </button>
          <button className="text-[#0147FF] hover:text-[#0136DF] py-3 px-6 rounded-lg border border-[#0147FF] z-10">
            Zadzwoń do nas
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
