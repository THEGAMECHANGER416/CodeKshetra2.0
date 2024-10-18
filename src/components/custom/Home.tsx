import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import data from "../../json/home.json";

const Home = () => {
  const targetDate = new Date(Date.UTC(2025, 1, 14, 23, 59, 59)); // February 14, 2025

  // Countdown logic
  const calculateTimeLeft = () => {
    const now = new Date(); // Current date and time
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)), // Total hours remaining
        minutes: Math.floor((difference / 1000 / 60) % 60), // Minutes
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
  const resetDelay = 5000; // Delay before the animation restarts (5 seconds)

  useEffect(() => {
    const animateCounter = () => {
      const incrementPerFrame = targetCount / (duration / 16); // Assuming 60fps (~16ms per frame)

      const updateCount = () => {
        setCount((prevCount) => {
          const nextCount = prevCount + incrementPerFrame;
          return nextCount >= targetCount ? targetCount : nextCount;
        });
      };

      const interval = setInterval(updateCount, 16); // Update every 16ms (~60fps)

      // Clear interval when the target count is reached
      setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
          setCount(0); // Reset count to 0 after 5 seconds
        }, resetDelay); // Wait 5 seconds before resetting
      }, duration); // Stop the animation after the duration (3 seconds)
    };

    // Start the animation on component mount and every resetDelay + duration interval
    animateCounter();
    const restartInterval = setInterval(animateCounter, duration + resetDelay);

    return () => clearInterval(restartInterval); // Clean up intervals on unmount
  }, [targetCount, duration, resetDelay]);
  return (
    <>
      <div className=" mb-40">
        <div className="flex h-full lg:h-[95vh] w-full flex-col items-center justify-center rounded-lg">
          <div className="grid h-5/6 md:h-full w-full grid-cols-2 md:grid-cols-5 md:grid-rows-9 gap-4">
            <div className="col-span-2 md:col-span-4 row-span-6 rounded-3xl bg-[url('/assets/bg.png')] bg-cover bg-center flex flex-col pl-6 justify-end pb-12">
              <div className="font-bold mt-4 text-white text-start text-4xl sm:text-5xl lg:text-6xl">
                Codeक्षेत्र: The Ultimate
              </div>
              <div className="font-bold mt-2 sm:mt-4 text-start text-white text-4xl sm:text-5xl lg:text-6xl">
                36-Hour Hackathon
              </div>
              <Button className="mt-4 text-xl sm:text-2xl h-14 p-3 w-48 rounded-xl text-black font-bold bg-pink">
                Register
              </Button>
            </div>

            <div className="col-span-2 md:col-span-1 row-start-1 row-span-1 md:row-span-2 flex justify-center">
              <img src="/assets/logo.png" alt="" className="h-24 w-auto" />
            </div>
            <div className="col-span-1 row-span-2 rounded-3xl bg-secondary p-6">
              <div className="font-bold text-pink 0 text-3xl sm:text-4xl font-bebas">
                PRIZE POOL
              </div>
              <div className="font-bold mt-4 text-white text-3xl sm:text-2xl">
                {data.prizePool}
              </div>
            </div>
            <div className="col-span-1 row-span-2 rounded-3xl bg-secondary p-6">
              <div className="font-bold text-pink mt-0 text-3xl sm:text-4xl font-bebas">
                LOCATION
              </div>
              <div className="font-bold mt-1 text-white text-xl sm:text-2xl">
                {data.location}
              </div>
            </div>

            <div className="col-span-2 md:col-span-3 row-span-3 rounded-3xl bg-secondary ">
              <div className="text-pink mt-4 text-center text-3xl sm:text-4xl font-bold font-bebas">
                REGISTRATIONS
              </div>
              <div className="font-bold text-6xl my-2 sm:text-8xl lg:text-9xl text-white">
                {Math.floor(count)} +
              </div>
            </div>

            <div className="col-span-2 md:col-span-2 row-span-3 rounded-3xl bg-secondary">
              <div className="font-bold text-center text-pink mt-4 text-3xl sm:text-4xl font-bebas">
                EVENT IN
              </div>

              <div className="flex space-x-2 sm:space-x-4 items-center text-white justify-center my-5 sm:mt-6 px-8">
                <div className="text-center bg-background/30 p-2 sm:p-4 rounded-xl">
                  <p className="lg:text-6xl md:text-3xl sm:text-2xl text-4xl font-bold ">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </p>
                  <p className="text-xs sm:text-base">Hours</p>
                </div>
                <div className="lg:text-6xl md:text-3xl sm:text-2xl text-4xl font-bold mb-2">
                  :
                </div>

                <div className="text-center bg-background/30 p-2 sm:p-4 rounded-xl">
                  <p className="lg:text-6xl md:text-3xl sm:text-2xl text-4xl font-bold">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </p>
                  <p className="text-xs sm:text-base">Minutes</p>
                </div>
                <div className="lg:text-6xl md:text-3xl sm:text-2xl text-4xl font-bold mb-2">
                  :
                </div>

                <div className="text-center bg-background/30 p-2 sm:p-4 rounded-xl">
                  <p className="lg:text-6xl md:text-3xl text-pink sm:text-2xl text-4xl font-bold">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </p>
                  <p className="text-xs text-pink sm:text-bases">Seconds</p>
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
