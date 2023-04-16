import SinglePropertyCard from "@/components/dashboard/properties/singlePropertyCard";
import SinglePropertyTable from "@/components/dashboard/properties/singlePropertyTable";
import DashboardLayout from "@/components/layouts/dashboard/dashboardLayout";
import house from "../../../public/Assets/images/housejpg.jpg";
import { useRouter } from "next/router";
import {
  useGetCalculationsQuery,
  useGetPropertyQuery,
} from "@/features/api/apiSlice";

function SingleProperty() {
  const router = useRouter();
  const { propertyId } = router.query;

  // Get property data to DB by ID
  const { data: property } = useGetPropertyQuery(propertyId);

  // Get All Calculations by property ID
  const { data: allCalculations, isLoading: isCalcDataLoading } =
    useGetCalculationsQuery(propertyId);
  return (
    <>
      <div className="mx-5 lg:mx-8 ">
        <div className=" bg-white rounded-[30px] p-6">
          <div className="max-w-[600px] mx-auto">
            <SinglePropertyCard img={house} property={property} />
          </div>
        </div>
        {/* Property Data Table */}
        <SinglePropertyTable
          allCalculations={allCalculations}
          isCalcDataLoading={isCalcDataLoading}
        />
      </div>
    </>
  );
}
SingleProperty.Layout = DashboardLayout;
export default SingleProperty;
