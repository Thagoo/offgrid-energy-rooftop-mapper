import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-yellow-500 border-b py-3 px-2 md:px-20">
      <div className="text-xl font-semibold">
        <Link href={"/"}>Offgrid</Link>
      </div>
      <div className="bg-black rounded-full px-4 py-1 text-white">Help ?</div>
    </div>
  );
};

export default Navbar;
