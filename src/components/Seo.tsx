function Seo() {
  // komponent z dwoma elementami z tytułem, opisem oraz podkreślonym tesktem ze strzałką „rozwiń”
  return (
    <div
      className="bg-[#282828] py-24 flex flex-row gap-24 px-24 items-center justify-center font-roboto-condensed border-b-2 border-zinc-400
      max-sm:px-4 max-sm:flex-col max-sm:py-16 max-sm:justify-start max-sm:items-start max-sm:gap-5 max-sm:pb-16 max-sm:border-b-0
    "
    >
      <div className="container mx-auto flex flex-col gap-5">
        <h2 className="text-3xl font-semibold text-[#F7F7F7] font-roboto-flex uppercase tracking-[-0.07em]">
          Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla
          commodo.
        </h2>
        <p className="text-[#F7F7F7] mt-2 line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-[#F7F7F7] pb-2 mt-2 cursor-pointer border-b-2 w-fit border-[#F7F7F7]">
          Rozwiń <span> </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 0 1 1 1v10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9 13.586V3a1 1 0 0 1 1-1z"
            />
          </svg>
        </p>
      </div>
      <div className="container mx-auto flex flex-col gap-5">
        <h2 className="text-3xl font-semibold text-[#F7F7F7] font-roboto-flex uppercase tracking-[-0.07em]">
          Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla
          commodo.
        </h2>
        <p className="text-[#F7F7F7] mt-2 line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-[#F7F7F7] pb-2 mt-2 cursor-pointer border-b-2 w-fit border-[#F7F7F7]">
          Rozwiń <span> </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 0 1 1 1v10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9 13.586V3a1 1 0 0 1 1-1z"
            />
          </svg>
        </p>
      </div>
    </div>
  );
}

export default Seo;
