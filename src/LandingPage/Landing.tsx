import PageHeader from "./pageheader";
import Pic from "/Pic.svg";
import Background from "/Background.svg";
import star from "/star.svg";

export default function LandingPage() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Page Header */}
      <PageHeader />

      {/* Main Content */}
      <div className="flex flex-grow items-center justify-center px-10 flex-col lg:flex-row gap-10 lg:gap-20 text-center lg:text-left">
        {/* Left Side - Text */}
        <div className="max-w-lg mt-12 md:mt-5">
          <h1 className="text-white/50 text-4xl md:text-5xl font-sunflower mb-3 md:mb-6">
            Hello, my name is
          </h1>
          <h2 className="text-white/75 text-6xl md:text-7xl font-bold font-sunflower">
            Angelina Cruz.
          </h2>
          <p className="text-white/50 mt-6 md:mt-14 text-xl md:text-2xl font-sunflower">
            I am an aspiring software engineer with <br />
            an interest in web development. <br />
            Welcome to my portfolio website!
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="relative p-4 md:p-6 rounded-xl mt-3 mb-12 md:mt-0 md:mb-0">
          <img
            src={Pic}
            alt="Profile"
            className="w-72 h-72 bg-[#053336] md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-[20%] shadow-lg object-contain mx-auto"
          />
          {/* Optional Decorative Stars */}
          <div className="absolute top-0 left-0 transform -translate-x-1 -translate-y-1">
            <img src={star} alt="star" />
          </div>
          <div className="absolute bottom-0 right-0 transform translate-x-1 translate-y-1">
            <img src={star} alt="star" />
          </div>
        </div>
      </div>
    </div>
  );
}
