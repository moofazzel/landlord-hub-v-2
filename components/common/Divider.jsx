function Divider({ divide }) {
  return (
    <div className="relative mb-4 mt-6 z-10 ">
      <hr className="bg-lh-grey" />
      <span className="absolute text-center px-3 font-medium text-lh-grey-100 -translate-x-1/2 bg-white left-1/2 top-1/2 -translate-y-1/2 text-ellipsis">
        {divide}
      </span>
    </div>
  );
}

export default Divider;
