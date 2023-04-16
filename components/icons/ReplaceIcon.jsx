function ReplaceIcon() {
  return (
    <>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <desc></desc>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <rect x="3" y="3" width="6" height="6" rx="1"></rect>
        <rect x="15" y="15" width="6" height="6" rx="1"></rect>
        <path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3"></path>
        <path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3"></path>
      </svg>
    </>
  );
}

export default ReplaceIcon;
