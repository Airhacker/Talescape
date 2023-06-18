import type { FC } from "react";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="flex items-center justify-between w-11/12 m-auto bg-black">
      <h1>Tales Scape</h1>
      <Link href="/library">Library</Link>
    </div>
  );
};
export default Navbar;
