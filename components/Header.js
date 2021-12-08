import { ViewGridIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";

function Header() {
  return (
    <header className="flex justify-between w-full p-5  text-sm text-gray-700 ">
      {/* left section */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      {/* right section */}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Image</p>

        {/* Icon */}
        <ViewGridIcon className="h-10 w-10 p-2 hover:bg-gray-100 rounded-full cursor-pointer" />

        {/* Avatar */}
        {/* creating own avatar component */}
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
