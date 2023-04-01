import { btn } from "@/lib/types/types";

function Button({ title, type }: btn) {
  return (
    <button
      type={type}
      className="bgGradient mt-2 px-7 py-4 text-md font-semibold text-center text-white transition duration-300 rounded-sm hover:from-blue-700 hover:to-blue-400 ease bg-gradient-to-br md:w-auto"
    >
      {title}
    </button>
  );
}

export default Button;
