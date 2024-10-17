import { Button } from "../ui/button";
import data from "../../json/home.json";

const Home = () => {
  return (
    <>
      <div className="mb-40">
        <div className="flex h-[110vh] lg:h-[93vh] w-full flex-col items-center justify-end rounded-lg">
          <div className="grid h-full w-full grid-cols-2 lg:grid-cols-5 lg:grid-rows-9 gap-4">
            <div className="col-span-2 lg:col-span-4 row-span-6 rounded-3xl bg-[url('/assets/bg.png')] bg-cover bg-center flex flex-col pl-6 justify-end pb-12">
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

            <div className="col-span-2 lg:col-span-1 row-start-1 row-span-1 lg:row-span-2 flex justify-center">
              <img src="/assets/logo.png" alt="" className="h-24 w-auto" />
            </div>
            <div className="col-span-1 row-span-2 rounded-3xl bg-secondary">
              <div className="font-bold text-pink mt-4 text-2xl sm:text-3xl">
                Prize Pool
              </div>
              <div className="font-bold mt-4 text-white text-xl sm:text-2xl">
                {data.prizePool}
              </div>
            </div>
            <div className="col-span-1 row-span-2 rounded-3xl bg-secondary">
              <div className="font-bold text-pink mt-4 text-2xl sm:text-3xl">
                Location
              </div>
              <div className="font-bold mt-1 text-white text-xl sm:text-2xl">
                {data.location}
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 row-span-3 rounded-3xl bg-secondary">
              <div className="text-pink mt-4 pl-7 text-4xl sm:text-5xl lg:text-6xl text-start font-bebas">
                Registrations
              </div>
              <div className="font-bold text-6xl mt-4 sm:mt-0 sm:text-8xl lg:text-9xl text-white">
                {data.regsiterations}+
              </div>
            </div>

            <div className="col-span-2 lg:col-span-2 row-span-3 rounded-3xl bg-secondary">
              <div className="font-bold text-start pl-6 text-pink mt-4 text-2xl sm:text-3xl">
                Event in
              </div>

              <div className="flex space-x-2 sm:space-x-4 items-center text-white justify-center mt-5">
                <div className="text-center bg-background p-2 sm:p-4 rounded-xl">
                  <p className="lg:text-4xl md:text-3xl sm:text-2xl text-4xl font-bold ">
                    30
                  </p>
                  <p className="text-xs sm:text-sm">Hours</p>
                </div>
                <div className="lg:text-4xl md:text-3xl sm:text-2xl text-4xl font-bold mb-2">
                  :
                </div>
                <div className="text-center bg-background p-2 sm:p-4 rounded-xl">
                  <p className="lg:text-4xl md:text-3xl sm:text-2xl text-4xl font-bold">
                    30
                  </p>
                  <p className="text-xs sm:text-sm">Minutes</p>
                </div>
                <div className="lg:text-4xl md:text-3xl sm:text-2xl text-4xl font-bold mb-2">
                  :
                </div>
                <div className="text-center bg-background p-2 sm:p-4 rounded-xl">
                  <p className="lg:text-4xl md:text-3xl sm:text-2xl text-4xl font-bold">
                    30
                  </p>
                  <p className="text-xs sm:text-sm">Seconds</p>
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
