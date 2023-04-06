import CashflowIcon from "@/components/icons/CashflowIcon";
import Receipts from "@/components/icons/Receipts";
import ReportIcon from "../icons/ReportIcon";

function Services() {
  const services = [
    {
      title: "Track Your Cashflow",
      icon: <CashflowIcon />,
      description:
        "Our easy-to-use dashboard provides a quick analysis of your cashflow. You can quickly discover which properties are under performing, informing critical business decisions.",
    },
    {
      title: "Log Your Receipts",
      icon: <Receipts />,
      description:
        "Conveniently track your receipts with our expense log.  Enter Amount, provide a description, and upload an image of your receipt--It's that easy!",
    },
    {
      title: "Generate Income Reports",
      icon: <ReportIcon />,
      description:
        "Tax season again?  Simply export a summary of your income and expenses to provide to your accountant.",
    },
  ];
  return (
    <>
      <section>
        <h2 className=" max-w-[820px] mx-auto text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold text-lh-dark2 md:leading-[50px]">
          Easy-to-use Business Tools for Small to Mid-Size Real Estate Investors
        </h2>

        <hr className="mt-6 mb-12 w-[50%] mx-auto border-[#4b4b4b]" />

        <div className=" grid gap-[30px] mb-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="text-center bg-white border rounded-[10px] p-[38px] pb-9 duration-300 transform  hover:-translate-y-2 mainShadow"
            >
              <div className="flex justify-center items-center bgIconGradient rounded-full w-28 h-28 mx-auto">
                {service.icon}
              </div>
              <h6 className=" text-xl font-bold text-lh-dark2 my-4">
                {service.title}
              </h6>
              <p className="text-base text-lh-dark-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
