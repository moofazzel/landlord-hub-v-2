import DashboardLayout from "@/components/layouts/dashboard/dashboardLayout";
import PropertiesHeader from "./propertiesHeader";
import RentIcon from "@/components/icons/RentIcon";
import PropertyCard from "@/components/dashboard/properties/propertyCard";

function Properties() {
  return (
    <>
      {/* Properties Header */}
      <div className="sticky top-0 navShadow">
        <PropertiesHeader />
      </div>

      {/* Properties Cards */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-8 mt-10 mx-3 md:mx-0">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </>
  );
}

Properties.Layout = DashboardLayout;

export default Properties;
