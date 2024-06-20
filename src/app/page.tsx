import Navbar from "@/components/navbar/navbarHome";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="py-8 md:px-20 px-12 flex flex-col md:gap-16 gap-8">
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="space-y-4 animate-in slide-in-from-top-10 duration-1000">
            <div className="text-center md:text-[52px] text-3xl md:leading-[60px] font-medium">
              Save Money <br /> with Solar
            </div>
            <div className="text-center text-gray-400 md:text-xl text-sm">
              Our tool gives you a fixed price, helps understand savings{" "}
              <br className="md:block hidden" /> without having to deal with
              salesmen.
            </div>
          </div>
          <div className="animate-in fade-in duration-1000 bg-primary flex flex-col justify-around min-h-[6vh] md:min-h-[28vh] rounded-2xl p-6 md:w-[545px] w-full gap-3">
            <div className=" font-semibold md:text-3xl text-xl">
              Save With <br />
              Solar today
            </div>

            <div className="md:text-lg text-sm">
              Energy bills are rising everyday <br />
              Luckily the sun also does.
            </div>

            <div className="flex flex-col md:flex-row gap-2 justify-between items-start md:items-center">
              <Link
                href={"/form"}
                className="md:px-6 md:py-4 px-3 py-2 rounded-full bg-black text-white text-sm md:text-base text-nowrap"
              >
                Get quote now &nbsp; {" ->"}
              </Link>
              <Link
                href={"tel:+919035061837"}
                className="mx-2 md:mx-0 underline cursor-pointer text-sm md:text-base text-nowrap"
              >
                Speak to an Expert
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row justify-center gap-6 md:gap-3x` items-center">
          <div className="animate-in slide-in-from-bottom-10 duration-1000 bg-[#F6EBBB] px-4 py-2 md:px-5 md:py-3 md:w-fit w-full text-black flex gap-2 text-xs md:text-base items-center rounded-3xl">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 11.5L12 14.5L22 4.5M16 3.5H7.8C6.11984 3.5 5.27976 3.5 4.63803 3.82698C4.07354 4.1146 3.6146 4.57354 3.32698 5.13803C3 5.77976 3 6.61984 3 8.3V16.7C3 18.3802 3 19.2202 3.32698 19.862C3.6146 20.4265 4.07354 20.8854 4.63803 21.173C5.27976 21.5 6.11984 21.5 7.8 21.5H16.2C17.8802 21.5 18.7202 21.5 19.362 21.173C19.9265 20.8854 20.3854 20.4265 20.673 19.862C21 19.2202 21 18.3802 21 16.7V12.5"
                stroke="#212121"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Get an instant, online price
          </div>
          <div className="animate-in slide-in-from-bottom-16 duration-1000 bg-[#F6EBBB] px-4 py-2 md:px-5 md:py-3 md:w-fit w-full text-black flex gap-2 text-xs md:text-base items-center rounded-3xl">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 11.5L12 14.5L22 4.5M16 3.5H7.8C6.11984 3.5 5.27976 3.5 4.63803 3.82698C4.07354 4.1146 3.6146 4.57354 3.32698 5.13803C3 5.77976 3 6.61984 3 8.3V16.7C3 18.3802 3 19.2202 3.32698 19.862C3.6146 20.4265 4.07354 20.8854 4.63803 21.173C5.27976 21.5 6.11984 21.5 7.8 21.5H16.2C17.8802 21.5 18.7202 21.5 19.362 21.173C19.9265 20.8854 20.3854 20.4265 20.673 19.862C21 19.2202 21 18.3802 21 16.7V12.5"
                stroke="#212121"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Calculate & Predicate Savings Instantly
          </div>
          <div className="animate-in slide-in-from-bottom-20 duration-1000 bg-[#F6EBBB]  px-4 py-2 md:px-5 md:py-3 md:w-fit w-full text-black flex gap-2 text-xs md:text-base items-center rounded-3xl">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 11.5L12 14.5L22 4.5M16 3.5H7.8C6.11984 3.5 5.27976 3.5 4.63803 3.82698C4.07354 4.1146 3.6146 4.57354 3.32698 5.13803C3 5.77976 3 6.61984 3 8.3V16.7C3 18.3802 3 19.2202 3.32698 19.862C3.6146 20.4265 4.07354 20.8854 4.63803 21.173C5.27976 21.5 6.11984 21.5 7.8 21.5H16.2C17.8802 21.5 18.7202 21.5 19.362 21.173C19.9265 20.8854 20.3854 20.4265 20.673 19.862C21 19.2202 21 18.3802 21 16.7V12.5"
                stroke="#212121"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Verified Installers, Verified Products
          </div>
        </div>
      </div>
    </main>
  );
}
