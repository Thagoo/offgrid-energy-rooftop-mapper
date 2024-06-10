import Navbar from "@/components/navbar";
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
              salesmen
            </div>
          </div>
          <div className="animate-in fade-in duration-1000 bg-primary flex flex-col justify-around min-h-[28vh] rounded-2xl p-[24px] md:w-[545px] w-full gap-3">
            <div className=" font-semibold md:text-3xl text-xl">
              Save With <br />
              Solar today
            </div>

            <div className="md:text-lg text-sm">
              Energy bills are rising everyday <br />
              Luckily the sun also does.
            </div>

            <div className="flex flex-row gap-2 justify-between items-center">
              <Link
                href={"/form"}
                className="md:px-6 md:py-4 px-3 py-2 rounded-full bg-black text-white text-sm md:text-base text-nowrap"
              >
                Get quote now &nbsp; {" ->"}
              </Link>
              <div className="hover:underline cursor-pointer text-sm md:text-base text-nowrap">
                Learn more
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-center">
          <div className="animate-in slide-in-from-bottom-10 duration-1000 bg-[#F6EBBB] px-4 py-1 md:w-fit w-full text-black flex gap-2 text-xs md:text-base items-center rounded-2xl">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.79922 4.79922H19.1992V19.1992H4.79922V4.79922ZM3.19922 4.79922C3.19922 4.37487 3.36779 3.96791 3.66785 3.66785C3.96791 3.36779 4.37487 3.19922 4.79922 3.19922H19.1992C19.6236 3.19922 20.0305 3.36779 20.3306 3.66785C20.6306 3.96791 20.7992 4.37487 20.7992 4.79922V19.1992C20.7992 19.6236 20.6306 20.0305 20.3306 20.3306C20.0305 20.6306 19.6236 20.7992 19.1992 20.7992H4.79922C4.37487 20.7992 3.96791 20.6306 3.66785 20.3306C3.36779 20.0305 3.19922 19.6236 3.19922 19.1992V4.79922ZM16.5592 8.81682C16.6793 8.64178 16.7249 8.4262 16.6861 8.21751C16.6472 8.00882 16.5271 7.82411 16.352 7.70402C16.177 7.58393 15.9614 7.53829 15.7527 7.57715C15.544 7.61601 15.3593 7.73618 15.2392 7.91122L10.6232 14.6392L8.31442 11.8552C8.1785 11.6937 7.98422 11.5924 7.77393 11.5734C7.56364 11.5545 7.3544 11.6195 7.19182 11.7542C7.02925 11.8889 6.92651 12.0824 6.90602 12.2926C6.88552 12.5027 6.94893 12.7124 7.08242 12.876L10.068 16.476C10.1471 16.5712 10.2472 16.6467 10.3604 16.6966C10.4735 16.7465 10.5968 16.7695 10.7204 16.7638C10.8439 16.7581 10.9645 16.7237 11.0726 16.6635C11.1807 16.6033 11.2733 16.5189 11.3432 16.4168L16.5592 8.81682Z"
                fill="#212121"
              />
            </svg>
            Get an instant, online price
          </div>
          <div className="animate-in slide-in-from-bottom-16 duration-1000 bg-[#F6EBBB] px-4 py-1 md:w-fit w-full text-black flex gap-2 text-xs md:text-base items-center rounded-2xl">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.79922 4.79922H19.1992V19.1992H4.79922V4.79922ZM3.19922 4.79922C3.19922 4.37487 3.36779 3.96791 3.66785 3.66785C3.96791 3.36779 4.37487 3.19922 4.79922 3.19922H19.1992C19.6236 3.19922 20.0305 3.36779 20.3306 3.66785C20.6306 3.96791 20.7992 4.37487 20.7992 4.79922V19.1992C20.7992 19.6236 20.6306 20.0305 20.3306 20.3306C20.0305 20.6306 19.6236 20.7992 19.1992 20.7992H4.79922C4.37487 20.7992 3.96791 20.6306 3.66785 20.3306C3.36779 20.0305 3.19922 19.6236 3.19922 19.1992V4.79922ZM16.5592 8.81682C16.6793 8.64178 16.7249 8.4262 16.6861 8.21751C16.6472 8.00882 16.5271 7.82411 16.352 7.70402C16.177 7.58393 15.9614 7.53829 15.7527 7.57715C15.544 7.61601 15.3593 7.73618 15.2392 7.91122L10.6232 14.6392L8.31442 11.8552C8.1785 11.6937 7.98422 11.5924 7.77393 11.5734C7.56364 11.5545 7.3544 11.6195 7.19182 11.7542C7.02925 11.8889 6.92651 12.0824 6.90602 12.2926C6.88552 12.5027 6.94893 12.7124 7.08242 12.876L10.068 16.476C10.1471 16.5712 10.2472 16.6467 10.3604 16.6966C10.4735 16.7465 10.5968 16.7695 10.7204 16.7638C10.8439 16.7581 10.9645 16.7237 11.0726 16.6635C11.1807 16.6033 11.2733 16.5189 11.3432 16.4168L16.5592 8.81682Z"
                fill="#212121"
              />
            </svg>
            Calculate & Predicate Savings Instantly
          </div>
          <div className="animate-in slide-in-from-bottom-20 duration-1000 bg-[#F6EBBB] px-4 py-1 md:w-fit w-full text-black flex gap-2 text-xs md:text-base items-center rounded-2xl">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.79922 4.79922H19.1992V19.1992H4.79922V4.79922ZM3.19922 4.79922C3.19922 4.37487 3.36779 3.96791 3.66785 3.66785C3.96791 3.36779 4.37487 3.19922 4.79922 3.19922H19.1992C19.6236 3.19922 20.0305 3.36779 20.3306 3.66785C20.6306 3.96791 20.7992 4.37487 20.7992 4.79922V19.1992C20.7992 19.6236 20.6306 20.0305 20.3306 20.3306C20.0305 20.6306 19.6236 20.7992 19.1992 20.7992H4.79922C4.37487 20.7992 3.96791 20.6306 3.66785 20.3306C3.36779 20.0305 3.19922 19.6236 3.19922 19.1992V4.79922ZM16.5592 8.81682C16.6793 8.64178 16.7249 8.4262 16.6861 8.21751C16.6472 8.00882 16.5271 7.82411 16.352 7.70402C16.177 7.58393 15.9614 7.53829 15.7527 7.57715C15.544 7.61601 15.3593 7.73618 15.2392 7.91122L10.6232 14.6392L8.31442 11.8552C8.1785 11.6937 7.98422 11.5924 7.77393 11.5734C7.56364 11.5545 7.3544 11.6195 7.19182 11.7542C7.02925 11.8889 6.92651 12.0824 6.90602 12.2926C6.88552 12.5027 6.94893 12.7124 7.08242 12.876L10.068 16.476C10.1471 16.5712 10.2472 16.6467 10.3604 16.6966C10.4735 16.7465 10.5968 16.7695 10.7204 16.7638C10.8439 16.7581 10.9645 16.7237 11.0726 16.6635C11.1807 16.6033 11.2733 16.5189 11.3432 16.4168L16.5592 8.81682Z"
                fill="#212121"
              />
            </svg>
            Verified Installers, Verified Products
          </div>
        </div>
      </div>
    </main>
  );
}
