function UserAvatar() {
  return (
    <div className="flex gap-2.5 items-center">
      <img
        className="w-16 h-1/6 rounded-full"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        alt=""
      />

      <div>
        <h1 className="text-sm font-semibold">Ummy Amrin</h1>
        <span className="text-[13px]">Gulsan, Dhaka</span>
      </div>
    </div>
  );
}

export default UserAvatar;
