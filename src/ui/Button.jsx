import clsx from "clsx";

/* eslint-disable react/prop-types */
function Button({ children, width }) {
  return (
    <button
      className={clsx(
        "p-3 outline-none hover:opacity-75 min-w-32 transition bg-accent/75 rounded-md",
        {
          "w-full": width === "full",
        }
      )}
    >
      {children}
    </button>
  );
}

export default Button;
