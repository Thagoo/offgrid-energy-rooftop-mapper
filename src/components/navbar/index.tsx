import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-yellow-500 border-b py-3 px-2 md:px-20">
      <div className="text-xl font-semibold">
        <Link href={"/"}>Offgrid</Link>
      </div>
      <div className="border border-yellow-500 px-4 rounded-full">Help ?</div>
    </div>
  );
};

export default Navbar;
