import DotIcon from "../icons/DotIcon";
import Shape2 from "@/public/Assets/shapes/Shape2";
import AnallyzeLottie from "../common/lotties/AnallyzeLottie";

function AnalyzeData() {
  return (
    <section className="flex gap-5 flex-col-reverse md:flex-row justify-between items-center mt-10 lg:-mt-10 mb-10 lg:mb-0">
      <div className="flex-1">
        <h2 className="text-[30px] font-semibold text-lh-dark2 mb-12">
          Analyze your data
        </h2>
        <ul className="ml-5 space-y-10 flex-1">
          <li>
            <DotIcon />
            All your tracked expenses are consolidated into a centralized
            dashboard to give you a look at your monthly cashflow.
          </li>
          <li>
            <DotIcon />
            Analyze specific properties in greater detail by filtering your data
            by property, year, or month.
          </li>
          <li>
            <DotIcon />
            Discover critical insight, such as an underperforming property, to
            make informed business decisions.
          </li>
        </ul>
      </div>

      <div className="flex-1 z-10">
        <div className="overflow-hidden">
          <AnallyzeLottie />
        </div>
      </div>
    </section>
  );
}

export default AnalyzeData;
