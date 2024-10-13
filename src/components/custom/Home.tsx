import { Button } from "@/components/ui/button";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div>
        <div className="flex h-full sm:h-screen w-full flex-col items-center justify-end rounded-lg">
          <div className="grid h-full w-full grid-cols-8 grid-rows-10 gap-4">
            <div className="col-span-4 sm:col-span-2 row-span-2 mt-20 sm:mt-0  rounded-3xl bg-primary">
              <div className="font-bold text-accent mt-4 text-xl">
                Registrations
              </div>
              <div className="font-bold mt-4 text-white text-xl">12345678</div>
            </div>

            <div className="col-span-full sm:col-span-4 row-span-3 sm:h-full sm:mb-0 row-start-2 sm:row-start-1 sm:col-start-3  sm:row-span-5 relative rounded-3xl bg-secondary">
              <div className="font-bold mt-4 text-white text-4xl">
                Codeक्षेत्र: The Ultimates
              </div>
              <div className="font-bold mt-2 sm:mt-4 text-black text-4xl">
                36-Hour Hackathon
              </div>
              <Button className="mt-4 text-lg h-12 p-3 w-40 rounded-xl">
                Register
              </Button>
              <img
                src="src/assets/logo.png"
                alt="logo"
                className="absolute bottom-0 left-1/2 bg-primary transform -translate-x-1/2 translate-y-1/2 h-44 w-44 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-80 lg:h-80 rounded-full border-2 border-background "
              />
            </div>

            <div className="col-span-full sm:col-span-2 row-span-1 row-start-1 sm:col-start-7 rounded-3xl bg-[#D9D9D9]">
              <div className="font-bold mt-4 text-xl">logos</div>
            </div>

            <div className="col-span-4 sm:col-span-2 row-span-2 mt-20 sm:mt-0 rounded-3xl bg-primary">
              <div className="font-bold text-accent mt-4 text-xl">
                Prize Pool
              </div>
            </div>

            <div className="col-span-2 row-span-3 rounded-3xl bg-primary hidden sm:block"></div>

            <div className="col-span-4 sm:col-span-2 row-span-2 rounded-3xl bg-primary">
              <div className="font-bold text-accent mt-4 text-xl">Location</div>
            </div>

            <div className=" col-span-full sm:col-span-3 row-span-2 sm:row-span-4 rounded-3xl bg-primary">
              <div className="font-bold text-accent mt-4 text-2xl text-center lg:text-start lg:pl-16 ">
                Event in
              </div>
              <div className="flex space-x-4 items-center text-white justify-center mt-9">
                <div className="text-center">
                  <p className="lg:text-6xl md:text-4xl sm:text-2xl text-3xl font-bold ">
                    30
                  </p>
                  <p className="text-sm sm:text-xs">Hours</p>
                </div>
                <div className="lg:text-6xl md:text-4xl sm:text-2xl text-3xl font-bold mb-6">
                  :
                </div>
                <div className="text-center">
                  <p className="lg:text-6xl md:text-4xl sm:text-2xl text-3xl font-bold">
                    30
                  </p>
                  <p className="text-sm sm:text-xs">Minutes</p>
                </div>
                <div className="lg:text-6xl md:text-4xl sm:text-2xl text-3xl font-bold mb-6">
                  :
                </div>
                <div className="text-center">
                  <p className="lg:text-6xl md:text-4xl sm:text-2xl text-3xl font-bold">
                    30
                  </p>
                  <p className="text-sm sm:text-xs">Seconds</p>
                </div>
              </div>
              <div className="font-bold text-white mt-5 pb-5 text-2xl">
                What are you waiting for ?
              </div>
            </div>

            <div className="col-span-4 row-start-7 col-start-5 sm:col-span-2 row-span-2 sm:row-start-8 sm:col-start-4 rounded-3xl bg-primary">
              <div className="font-bold text-accent mt-4 text-xl">
                Our Socials
              </div>

              <div className="sm:flex hidden justify-evenly flex-wrap text-3xl mt-4 ">
                <FaInstagram className="text-secondary" />
                <FaXTwitter className="text-secondary" />
                <MdEmail className="text-secondary" />
                <FaFacebook className="text-secondary" />
              </div>

              <div className="sm:hidden flex flex-col pt-6 space-y-5">
                <div className="flex justify-evenly">
                  <FaInstagram className="text-secondary text-4xl" />
                  <FaXTwitter className="text-secondary text-4xl" />
                </div>

                <div className="flex justify-evenly">
                  <MdEmail className="text-secondary text-4xl" />
                  <FaFacebook className="text-secondary text-4xl" />
                </div>
              </div>
            </div>

            <div className="col-span-full sm:col-span-3 row-span-4 hidden sm:block rounded-3xl bg-primary">
              <div className="font-bold text-accent mt-4 text-xl">
                Event Highlights
              </div>
            </div>
          </div>
          <div className=" w-full mt-4 h-64 block sm:hidden rounded-3xl bg-primary">
            <div className="font-bold text-accent mt-4 text-xl">
              Event Highlights
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
