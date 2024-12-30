import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section max-h-[1240px]">
      <div className="max-w-6xl relative py-6 gap-4 mx-auto grid grid-cols-12 items-center px-4 xl:px-0">
        <div className="col-span-12 xl:col-span-8">
          <h3 className="text-lg font-semibold text-[#aaf40c]">
            World Class Badminton Coaching & Premium Courts
          </h3>
          <h1 className=" text-4xl sm:text-6xl font-bold text-white my-4">
            Choose Your <span className="text-[#aaf40c]">Coaches</span> and
            Start Your Training
          </h1>
          <p className="text-[#eee] text-lg mb-8">
            Unleash Your Athletic Potential with Expert Coaching,
            State-of-the-Art Facilities, and Personalized Training Programs.
          </p>
          {/* <Button type="primary" size="large" icon={<AntDesignOutlined />}>
            Gradient Button
          </Button> */}
          <Link to="/facilities">
            <button className="btn btn-neutral">Book Now</button>
          </Link>
        </div>
        <div className="col-span-12 xl:col-span-4">
          <img
            className="w-72 xl:w-full h-full"
            src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/bg/banner-right.png"
            alt="banner"
          />
        </div>
        <div className="dot size-6 bg-[#aaf40c] rounded-full absolute top-12 left-0"></div>

        <div className="dot size-20 bg-[#aaf40c] rounded-full absolute bottom-0 left-0">
          <img
            className="w-20 absolute -right-8 -top-3"
            src="https://dreamsports.dreamstechnologies.com/react/template/assets/img/icons/banner-cock2.svg"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
