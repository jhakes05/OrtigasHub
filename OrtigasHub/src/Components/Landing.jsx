import React from "react";
import Nav from "./Nav";
import backgroundImage from "../assets/bg.jpg"; // Import your background image
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";

const Landing = () => {
  return (
    <div
      className="bg-cover min-h-screen relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Nav/>
      <div className="font-bold flex flex-col justify-center items-center h-full pt-[10rem]">
        {/* Your Landing content */}
        <h1 className="text-4xl text-white mb-4">Ortigas Hub</h1>
        <p className="text-lg text-white">Bringing People Closer, In Ortigas.</p>
      </div>
      <div className="flex flex-row justify-around pt-[4rem] relative pr-[8rem] pl-[8rem] pb-[5rem] text-center">
        <a href="/card1" className="flex-none p-2 relative">
          <img src={card1} alt="Card 1" className="w-64 h-64 rounded-lg shadow-lg" />
          <div className="absolute inset-0 flex justify-center items-center text-white text-lg font-bold shadow-lg m-5 ">
            Find Your Match, Ignite Your Story
          </div>
        </a>
        <a href="/card2" className="flex-none p-2 relative">
          <img src={card2} alt="Card 2" className="w-64 h-64 rounded-lg shadow-lg" />
          <div className="absolute inset-0 flex justify-center items-center text-white text-lg font-bold shadow-lg m-5">
            Connecting Hearts, One Swipe at a Time
          </div>
        </a>
        <a href="/card3" className="flex-none p-2 relative">
          <img src={card3} alt="Card 3" className="w-64 h-64 rounded-lg shadow-lg" />
          <div className="absolute inset-0 flex justify-center items-center text-white text-lg font-bold shadow-lg m-5">
            Discover Love's Potential, Unveil Your Journey
          </div>
        </a>
      </div>
    </div>
  );
};

export default Landing;
