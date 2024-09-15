import { useState } from "react";

function HeadersBlock() {
  const [activePersonalCars, setActivePersonalCars] = useState(true);
  const [activeDeliveryCars, setActiveDeliveryCars] = useState(false);

  const handlePersonalCars = () => {
    setActivePersonalCars(true);
    setActiveDeliveryCars(false);
  };

  const handleDeliveryCars = () => {
    setActivePersonalCars(false);
    setActiveDeliveryCars(true);
  };

  return (
    <div className="flex flex-col mx-36 max-lg:mx-12 max-sm:mx-6 mt-24 max-lg:mt-72 max-sm:mt-24 ">
      <h2 className="z-10 text-[#0147FF] text-lg">Prezentacja firmy</h2>
      <div className="flex flex-col gap-6">
        <h1 className="z-10 text-5xl font-roboto-flex font-semibold uppercase tracking-tight focus:outline-none">
          Zobacz naszą galerię zdjęć
        </h1>
        <div className="flex flex-row gap-6">
          <button
            className={`font-roboto-condensed font-semibold  tracking-tight mb-2
              ${
                activePersonalCars ? "text-[#0136DF] border-b-2 mb-0" : ""
              } focus:outline-none focus:
          border-[#0136DF]`}
            onClick={handlePersonalCars}
          >
            Samochody osobowe
          </button>
          <button
            className={`font-roboto-condensed font-semibold  tracking-tight mb-2
              ${
                activeDeliveryCars ? "text-[#0136DF] border-b-2 mb-0" : ""
              } focus:outline-none focus:
              border-[#0136DF]`}
            onClick={handleDeliveryCars}
          >
            Samochody dostawcze
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeadersBlock;
