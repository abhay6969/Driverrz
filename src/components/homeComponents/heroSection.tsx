import main1 from "../../assets/main1.png";
import main from "../../assets/main.jpg";

export const HeroSection = () => {
  return (
    <div className="w-full h-screen relative bg-black bg-opacity-90 flex flex-col md:flex-row items-center justify-center px-6 py-8 gap-6">
      {/* Left Side - Welcome Text and Image */}
      <div className="md:w-1/2 w-full flex flex-col  text-center p-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
          Welcome to Driverrz
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Your one-stop solution for all your travel needs.
        </p>
        <div className="w-full h-full rounded-lg overflow-hidden border border-gray-400 shadow-md">
          <img src={main1} alt="Travel" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right Side - Service Cards */}
      <div className="md:w-1/2 w-full grid grid-cols-2 gap-4 p-4  rounded-lg shadow-lg">
        {[
          { title: "Local", img: main },
          { title: "National", img: main },
          { title: "Luxury", img: main1 },
          { title: "Corporate", img: main1 },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-between bg-gray-700 rounded-2xl overflow-hidden shadow-md w-[70%] h-fit ${index %2 !== 0 ? "rotate-10" : "-rotate-4"}`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-[80%] h-[180px] m-3 object-cover rounded-2xl"
            />
            <p className="text-xl text-gray-200  font-semibold text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
