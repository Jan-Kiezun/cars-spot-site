function HeadersBlock() {
  // blok z niebieskim tekstem  Prezentacja firmy
  // większym czarnym z czcionką Roboto Flex: Zobacz naszą galerię zdjęć
  // i dwoma tekstami które stają się niebieskie on focus: Samochody osobowe, Samochody dostawcze
  // tło ma byc takie same
  return (
    <div className="flex flex-col mx-36 max-lg:mx-12 max-sm:mx-6 mt-24 max-lg:mt-72 max-sm:mt-24 ">
      <h2 className="z-10 text-[#0147FF] text-lg">Prezentacja firmy</h2>
      <div className="flex flex-col gap-6">
        <h1 className="z-10 text-5xl font-roboto-flex font-semibold uppercase tracking-tight focus:outline-none">
          Zobacz naszą galerię zdjęć
        </h1>
        <div className="flex flex-row gap-6">
          <button
            className="font-roboto-condensed font-semibold  tracking-tight mb-2 focus:mb-0
          focus:text-[#0136DF] focus:outline-none focus:border-b-2 border-[#0136DF]"
          >
            Samochody osobowe
          </button>
          <button
            className="font-roboto-condensed font-semibold tracking-tight mb-2 focus:mb-0
          focus:text-[#0136DF] focus:outline-none focus:border-b-2 border-[#0136DF]"
          >
            Samochody dostawcze
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeadersBlock;
