import clipboard from "../../public/Assets/images/clipboard.png";
import Image from "next/image";
import DotIcon from "../icons/DotIcon";

function AnalyzeData() {
  return (
    <section className="flex gap-5 flex-col-reverse md:flex-row justify-between items-center my-8 lg:my-10">
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

      <div className="flex-1">
        <Image className="ml-auto" src={clipboard} alt="" />
      </div>
    </section>
  );
}

export default AnalyzeData;
