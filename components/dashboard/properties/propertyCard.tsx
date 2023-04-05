import BathIcon from "@/components/icons/BathIcon";
import BedIcon from "@/components/icons/BedIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import RentIcon from "@/components/icons/RentIcon";

function PropertyCard() {
  return (
    <div className="rounded-[20px] bg-white mainShadow">
      <img
        className="rounded-t-[20px] w-full"
        width={385}
        src="https://wallpapercave.com/wp/wp2124436.jpg"
        alt=""
      />
      <div className="py-5 px-5">
        <h4 className="text-xl lg:text-base xl:text-xl font-semibold text-lh-dark2 space-x-3 mb-5">
          <LocationIcon />

          <span>1010, Dhaka, Al 1236</span>
        </h4>
        <div className="flex justify-between">
          <div>
            <span className="text-base lg:text-base xl:text-base font-medium ">
              <RentIcon /> Rent
            </span>
            <div className="text-xs lg:text-xs xl:text-base ml-10 lg:ml-0 xl:ml-10">
              <span className="text-xs">$</span>
              <span className="text-xs">2500</span>
            </div>
          </div>

          <div>
            <span className="text-base font-medium ">
              <BathIcon /> Bath
            </span>
            <div className="text-xs ml-10 lg:ml-0 xl:ml-10">3</div>
          </div>

          <div>
            <span className="text-base font-medium ">
              <BedIcon /> Bed
            </span>
            <div className="text-xs ml-10 lg:ml-0 xl:ml-10">6</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
