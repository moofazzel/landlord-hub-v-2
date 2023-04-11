import { useSelector } from "react-redux";

function Button({ title, type }) {
  const { loading } = useSelector((state) => state.user);
  return (
    <button
      type={type}
      className="bgGradient mt-2 px-7 py-4 text-md font-semibold text-center text-white transition duration-300 rounded-sm hover:from-blue-700 hover:to-blue-400 ease md:w-auto flex justify-center items-center"
    >
      {/* <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin "></div> */}
      {loading ? (
        <div className="w-8 h-8 rounded-full animate-spin border-4 border-solid border-white border-t-transparent"></div>
      ) : (
        title
      )}
    </button>
  );
}

export default Button;
