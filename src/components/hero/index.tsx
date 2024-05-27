import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="px-20">
        <div className=" h-[70vh] md:h-[80vh] flex justify-center items-center">
          <div>
            <div className=" text-center text-[52px] leading-[60px] font-medium">
              Save Money <br /> with Solar
            </div>
            <div className=" text-center text-gray-400 text-xl my-3">
              Our tool gives you a fixed price, helps understand savings without{" "}
              <br />
              having to deal with salesmen
            </div>
            <div className=" bg-yellow-400 flex flex-col justify-around min-h-[28vh] rounded-md p-[24px]">
              <div>
                <div className=" font-semibold text-xl">Save With</div>
                <div className=" font-semibold text-xl mb-6">Solar Today</div>
                <div>Energy bills are rising everyday</div>
                <div>Luckily the sun also does.</div>
              </div>
              <div className=" flex justify-between items-center">
                <Link
                  href={"/form"}
                  className=" border-none outline-none px-4 rounded-full py-2 bg-black text-white"
                >
                  Get quote now &nbsp; {" ->"}
                </Link>
                <div className=" underline cursor-pointer">Learn more</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-center">
          <div className=" bg-yellow-200 px-4 py-1 md:w-fit w-full rounded-md text-black">
            Get an instant, online price
          </div>
          <div className=" bg-yellow-200 px-4 py-1 md:w-fit w-full rounded-md text-black">
            Calculate & Predicate Savings Instantly
          </div>
          <div className=" bg-yellow-200 px-4 py-1 md:w-fit w-full rounded-md text-black">
            Verified Installers, Verified Products
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
