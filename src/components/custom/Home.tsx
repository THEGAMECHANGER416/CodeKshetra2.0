import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { GiLaurelsTrophy } from "react-icons/gi";
import data from "../../json/home.json";

const Home = () => {
  const targetDate = new Date(Date.UTC(2025, 1, 14, 23, 59, 59)); // February 14, 2025

  // Countdown logic
  const calculateTimeLeft = () => {
    const now = new Date(); // Current date and time
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0, // Add days to the initial object
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)), // Total days remaining
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24), // Remaining hours
        minutes: Math.floor((difference / (1000 * 60)) % 60), // Minutes
        seconds: Math.floor((difference / 1000) % 60), // Seconds
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, []);

  //counter animation
  const [count, setCount] = useState<number>(0);
  const targetCount = data.regsiterations; // This comes from the `data` prop
  const duration = 3000; // Animation duration in milliseconds

  useEffect(() => {
    const animateCounter = () => {
      const incrementPerFrame = targetCount / (duration / 16); // Assuming 60fps (~16ms per frame)
      let currentCount = 0;

      const updateCount = () => {
        currentCount += incrementPerFrame;
        if (currentCount >= targetCount) {
          clearInterval(interval); // Stop updating when target is reached
          setCount(targetCount); // Set count to targetCount and stop
        } else {
          setCount(Math.floor(currentCount)); // Update the count
        }
      };

      const interval = setInterval(updateCount, 16); // Update every 16ms (~60fps)

      // Clear interval after the duration
      setTimeout(() => {
        clearInterval(interval); // Ensure the interval is cleared after duration
        setCount(targetCount); // Ensure count is set to targetCount
      }, duration); // Stop the animation after the duration (3 seconds)
    };

    // Start the animation on component mount
    animateCounter();

    // Clean up intervals on unmount
    return () => {
      setCount((prevCount) =>
        prevCount >= targetCount ? targetCount : prevCount
      ); // Optional clean-up
    };
  }, [targetCount, duration]);

  return (
    <>
      <div className="mb-40">
        <div className="flex h-full fade lg:h-[95vh] w-full flex-col items-center justify-center rounded-lg">
          <div className="grid h-5/6 md:h-full w-full grid-cols-2 md:grid-cols-5 md:grid-rows-9 gap-4">
            {/* Background section */}
            <div className="col-span-2 animate-fadeInUp md:col-span-4 row-span-6 relative rounded-3xl bg-cover bg-center flex flex-col pl-6 justify-end pb-12 bg-[url('/assets/homeBg.jpeg')] before:content-[''] before:absolute before:inset-0 before:bg-black/50 before:rounded-3xl">
              {/* Content on top of the background */}
              <div className="relative z-10 w-full">
                <div className="font-bold mt-10 md:mt-4 text-white text-start text-4xl sm:text-5xl lg:text-6xl [text-shadow:_0_4px_8px_#000000]">
                  Codeक्षेत्र: The Ultimate
                </div>
                <div className="font-bold mt-2 sm:mt-4 text-start text-white text-4xl sm:text-5xl lg:text-6xl [text-shadow:_0_4px_8px_#000000]">
                  36-Hour Hackathon
                </div>
                <div className="flex justify-start">
                  <Button
                    className="mt-4 text-xl sm:text-2xl h-12 w-32 md:h-14 md:w-48 rounded-xl text-black font-bold bg-pink hover:text-white"
                    onClick={() =>
                      window.open(
                        "https://code-kshetra-2.devfolio.co/",
                        "_blank"
                      )
                    }
                  >
                    Register
                  </Button>
                </div>
              </div>
            </div>

            {/* Logo section */}
            <div className="col-span-2 animate-fadeInLeft md:col-span-1 row-start-1 row-span-1 md:row-span-2 flex justify-center z-20">
              <img src="/assets/logo.png" alt="" className="h-24 w-auto" />
            </div>

            {/* Prize pool section */}
            <div className="col-span-1 row-span-2 animate-fadeInLeft rounded-3xl bg-secondary p-2 z-20">
              <div className="font-bold text-pink sm:mt-2 text-3xl sm:text-4xl font-bebas">
                PRIZE POOL
              </div>
              <div className="font-bold mt-4 sm:mt-2 text-white text-3xl sm:text-2xl">
                {data.prizePool}
              </div>

              <div className="font-bold mt-4 sm:mt-2 text-white text-4xl flex justify-center sm:text-3xl">
                <GiLaurelsTrophy />
              </div>
            </div>

            {/* Location section */}
            <div className="col-span-1 row-span-2 animate-fadeInRight rounded-3xl bg-secondary p-2 z-20">
              <div className="font-bold text-pink mt-0 text-3xl sm:text-4xl font-bebas">
                LOCATION
              </div>
              <div className="font-bold mt-1 text-white text-xl sm:text-xl">
                {data.location}
              </div>
            </div>

            {/* Registrations section */}
            <div className="col-span-2 md:col-span-3 animate-fadeInDown row-span-3 rounded-3xl bg-secondary z-20">
              <div className="text-pink mt-4 text-center md:mt-8 lg:mt-4 md:text-7xl lg:text-4xl text-3xl sm:text-4xl font-bold font-bebas">
                REGISTRATIONS
              </div>
              <div className="font-bold md:hidden lg:block text-4xl my-2 sm:text-8xl lg:text-8xl lg:mt-6 text-white">
                {Math.floor(count)} +
              </div>
              <div className="font-bold hidden md:block lg:hidden text-6xl mt-2 sm:text-8xl text-white">
                {Math.floor(count)} +
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="col-span-2 md:col-span-2 row-span-3 animate-fadeInUp rounded-3xl bg-secondary z-20">
              {/* <div className="font-bold text-center text-pink mt-4 text-3xl sm:text-4xl font-bebas">
                EVENT IN
              </div> */}
              <div className="text-white  flex-col justify-center hidden md:flex lg:hidden items-center mt-8 space-y-3">
                <div className="text-pink text-7xl font-bold font-bebas">
                  {String(timeLeft.days).padStart(2, "0")} Days
                </div>
                <div className="flex">
                  <div className="text-center bg-background/30 p-2 sm:p-4 rounded-xl">
                    <p className="lg:text-3xl md:text-3xl sm:text-2xl text-4xl font-bold ">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </p>
                    <p className="text-xs sm:text-base">Hours</p>
                  </div>
                  <div className="lg:text-3xl md:text-3xl sm:text-2xl text-4xl font-bold mb-2">
                    :
                  </div>

                  <div className="text-center bg-background/30 p-2 sm:p-4 rounded-xl">
                    <p className="lg:text-3xl md:text-3xl sm:text-2xl text-4xl font-bold">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </p>
                    <p className="text-xs sm:text-base">Minutes</p>
                  </div>
                  <div className="lg:text-3xl md:text-3xl sm:text-2xl text-4xl font-bold mb-2">
                    :
                  </div>

                  <div className="text-center bg-background/30 p-2 sm:p-4 rounded-xl">
                    <p className="lg:text-3xl md:text-3xl text-pink sm:text-2xl text-4xl font-bold">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </p>
                    <p className="text-xs text-pink  sm:text-base">Seconds</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4 items-center text-white justify-center md:hidden lg:flex sm:mt-16 px-8 py-8 sm:py-0">
                <div className="text-center bg-background/30 p-2 sm:p-4 rounded-xl">
                  <p className="lg:text-3xl md:text-2xl sm:text-2xl text-4xl font-bold">
                    {String(timeLeft.days).padStart(2, "0")}
                  </p>
                  <p className="text-xs sm:text-base">Days</p>
                </div>
                <div className="lg:text-3xl md:text-2xl sm:text-2xl text-4xl font-bold mb-2">
                  :
                </div>
                <div className="text-center bg-background/30 p-2 sm:p-4 rounded-xl">
                  <p className="lg:text-3xl md:text-2xl sm:text-2xl text-4xl font-bold">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </p>
                  <p className="text-xs sm:text-base">Hours</p>
                </div>
                <div className="lg:text-3xl md:text-2xl sm:text-2xl text-4xl font-bold mb-2">
                  :
                </div>
                <div className="text-center bg-background/30 p-2 sm:p-4 rounded-xl">
                  <p className="lg:text-3xl md:text-2xl sm:text-2xl text-4xl font-bold">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </p>
                  <p className="text-xs sm:text-base">Minutes</p>
                </div>
                <div className="lg:text-6xl md:text-3xl sm:text-2xl text-4xl font-bold mb-2">
                  :
                </div>

                <div className="text-center bg-background/30 p-2 sm:p-4 rounded-xl">
                  <p className="lg:text-3xl md:text-2xl text-pink sm:text-2xl text-4xl font-bold">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </p>
                  <p className="text-xs text-pink sm:text-base">Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
