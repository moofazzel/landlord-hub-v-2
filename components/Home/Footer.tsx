import Link from "next/link";
import FbIcon from "../icons/FbIcon";
import TwitterIcon from "../icons/Twittericon";
import YtIcon from "../icons/YtIcon";
import WhatsappIcon from "../icons/WhatsappIcon";

function Footer() {
  return (
    <footer className="bg-[#080808] text-white text-center py-10 md:py-28">
      <p className="text-lg">
        “This product is brought to you by Ivey Solutions, LLC”
      </p>
      <div className="flex justify-center gap-5 mt-6 md:mt-12">
        <Link
          href="#"
          className="flex justify-center items-center  w-[51px] h-[51px] rounded-full border-[1.5px] hover:bg-white group transition-all duration-500"
        >
          <FbIcon
            className={
              "fill-white group-hover:fill-[#0D0D0D] transition-all duration-500"
            }
          />
        </Link>

        <Link
          href="#"
          className="flex justify-center items-center  w-[51px] h-[51px] rounded-full border-[1.5px] hover:bg-white group transition-all duration-500"
        >
          <TwitterIcon
            className={
              "fill-white group-hover:fill-[#0D0D0D] transition-all duration-500"
            }
          />
        </Link>

        <Link
          href="#"
          className="flex justify-center items-center  w-[51px] h-[51px] rounded-full border-[1.5px] hover:bg-white group transition-all duration-500"
        >
          <YtIcon
            className={
              "fill-white group-hover:fill-[#0D0D0D] transition-all duration-500"
            }
          />
        </Link>

        <Link
          href="#"
          className="flex justify-center items-center  w-[51px] h-[51px] rounded-full border-[1.5px] hover:bg-white group transition-all duration-500"
        >
          <WhatsappIcon
            className={
              "fill-white group-hover:fill-[#0D0D0D] transition-all duration-500"
            }
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
