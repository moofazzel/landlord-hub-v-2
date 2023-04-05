import PropertyNavLink from "@/components/dashboard/properties/propertyNavLink";
import PlusIcon from "@/components/icons/PlusIcon";
import UserAvatar from "@/components/layouts/dashboard/userAvatar";

function PropertiesHeader() {
  return (
    <header className="flex gap-3 justify-between items-center bg-white md:px-6 lg:px-8 py-2.5 ">
      <nav className="inline-flex items-center gap-2 sm:gap-3 mx-3 md:mx-0 z-10">
        <span className="lg:hidden mb-1">
          <PropertyNavLink href="#">{"All"}</PropertyNavLink>
        </span>

        <span className="hidden lg:inline-block">
          <PropertyNavLink href="#">{"All\u00A0Properties"}</PropertyNavLink>
        </span>
        <PropertyNavLink href="#">{"Active\u00A0Lease"}</PropertyNavLink>
        <PropertyNavLink href="#">{"Available"}</PropertyNavLink>
        <PropertyNavLink href="#">{"Under\u00A0Repair"}</PropertyNavLink>
        <PropertyNavLink href="#">{"Archived"}</PropertyNavLink>
        {/* add Property button */}
        <button className="  bg-lh-main font-medium rounded-[5px] px-4  py-3.5 border border-[#a6a6a6] hidden md:block ">
          <PlusIcon />
        </button>
      </nav>
      <div className="hidden lg:block">
        <UserAvatar />
      </div>
      {/* add property floating button */}
      <button className="  bg-lh-main mainShadow font-medium rounded-[5px] px-4  py-3.5 border border-[#a6a6a6] md:hidden fixed right-10 bottom-7">
        <PlusIcon />
      </button>
    </header>
  );
}

export default PropertiesHeader;
