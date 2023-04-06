import DashboardLayout from "@/components/layouts/dashboard/dashboardLayout";
import PropertiesHeader from "../propertiesHeader";
import PropertyCard from "@/components/dashboard/properties/propertyCard";
import Link from "next/link";

function Properties() {
  const properties = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {/* Properties Header */}
      <div className="sticky top-0 navShadow">
        <PropertiesHeader />
      </div>

      {/* Properties Cards */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-8 mt-10 mx-3 md:mx-0">
        {properties.map((property, i) => (
          <Link href={"/dashboard/properties/1"} key={i}>
            <PropertyCard
              img={"https://wallpapercave.com/wp/wp2124436.jpg"}
              location={"1010, Dhaka, Al 1236"}
              rent={2500}
              bath={3}
              bed={3}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

Properties.Layout = DashboardLayout;

export default Properties;
