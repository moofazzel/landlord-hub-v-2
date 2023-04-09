import DashDataTable from "@/components/dashboard/dashDataTable";
import DashHeader from "@/components/dashboard/dashHeader";
import DashboardLayout from "@/components/layouts/dashboard/dashboardLayout";

function Dashboard() {
  // dash header data
  const properties = [
    { value: "All Properties" },
    { value: "Arlene Mccoy" },
    { value: "Devon Webb" },
    { value: "Tom Cook" },
    { value: "Tanya Fox" },
    { value: "Hellen Schmidt" },
  ];
  // dash header data
  const years = [{ value: 2022 }, { value: 2023 }, { value: 2024 }];
  // dash header data
  const months = [
    { value: "All Month" },
    { value: "February" },
    { value: "March" },
  ];
  return (
    <>
      <div className="space-y-[30px]">
        {/* Dashboard Header */}
        <div className="sticky top-0 navShadow z-10">
          <DashHeader properties={properties} years={years} months={months} />
        </div>

        {/* Data table */}
        <div className=" md:p-8">
          <DashDataTable />
        </div>
      </div>
    </>
  );
}
export default Dashboard;

Dashboard.Layout = DashboardLayout;
