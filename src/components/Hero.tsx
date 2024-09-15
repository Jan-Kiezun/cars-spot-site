import three_cars from "../assets/three-cars.svg";

function Hero() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
      <img
        src={three_cars}
        alt="three_cars"
        className="h-1/3 object-cover absolute top-100 right-0"
      />
    </div>
  );
}

export default Hero;
