import BathIcon from "@/components/icons/BathIcon";
import BedIcon from "@/components/icons/BedIcon";
import RentIcon from "@/components/icons/RentIcon";

function PropertyCard() {
  return (
    <div className="rounded-[20px] bg-white">
      <img
        className="rounded-t-[20px] w-full"
        width={385}
        src="https://wallpapercave.com/wp/wp2124436.jpg"
        alt=""
      />
      <div className="py-5 px-5">
        <h4 className="text-xl lg:text-base xl:text-xl font-semibold text-lh-dark2 mb-5">
          1010, Dhaka, Al 1236
        </h4>
        <div className="flex justify-between">
          <div>
            <span className="text-lg lg:text-base xl:text-lg font-medium ">
              <RentIcon /> Bath
            </span>
            <div className="text-base lg:text-xs xl:text-base ml-10 lg:ml-0 xl:ml-10">
              <span>$</span>
              2500
            </div>
          </div>

          <div>
            <span className="text-lg font-medium ">
              <BathIcon /> Rent
            </span>
            <div className="text-base ml-10 lg:ml-0 xl:ml-10">
              <span>$</span>3
            </div>
          </div>

          <div>
            <span className="text-lg font-medium ">
              <BedIcon /> Bed
            </span>
            <div className="text-base ml-10 lg:ml-0 xl:ml-10">
              <span>$</span>6
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
