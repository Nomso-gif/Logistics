const Button = ({ text, type = "button", className = "", onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`px-4 py-1 rounded ${className}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
