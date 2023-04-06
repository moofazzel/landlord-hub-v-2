import BathIcon from "@/components/icons/BathIcon";
import BedIcon from "@/components/icons/BedIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import RentIcon from "@/components/icons/RentIcon";
import { PropertiesCardValue } from "@/lib/types/types";
import Image from "next/image";

function PropertyCard({ img, location, rent, bath, bed }: PropertiesCardValue) {
  return (
    <div className="rounded-[15px] bg-white mainShadow">
      <Image className="rounded-t-[15px] w-full" width={385} src={img} alt="" />
      <div className="py-5 px-5">
        <h4 className="text-xl lg:text-base xl:text-xl font-semibold text-lh-dark2 space-x-3 mb-5">
          <LocationIcon />

          <span>{location}</span>
        </h4>
        <div className="flex justify-between">
          <div>
            <span className="text-lg lg:text-base xl:text-xl font-medium ">
              <RentIcon /> Rent
            </span>
            <div className="text-xs lg:text-xs xl:text-base ml-10 lg:ml-0 xl:ml-10">
              <span className="text-base">$</span>
              <span className="text-base">{rent}</span>
            </div>
          </div>

          <div>
            <span className="text-lg font-medium ">
              <BathIcon /> Bath
            </span>
            <div className="text-base ml-10 lg:ml-0 xl:ml-10">{bath}</div>
          </div>

          <div>
            <span className="text-lg font-medium ">
              <BedIcon /> Bed
            </span>
            <div className="text-base ml-10 lg:ml-0 xl:ml-10">{bed}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
