import { HeartIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="p-6">
      <div className="flex flex-row items-center justify-center space-x-2">
        <div className="text-gray-400 text-base md:text-lg font-bold">
          made with
        </div>
        <div>
          <HeartIcon
            width={15}
            height={15}
            className="text-red-300 animate-ping"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 mt-2">
        <div className="text-gray-300 text-sm font-bold">
          Powered by{" "}
          <span className="hover:text-gray-700">NextJS + Tailwindcss</span>{" "}
          &amp; <span className="hover:text-gray-700">Travis CI</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
