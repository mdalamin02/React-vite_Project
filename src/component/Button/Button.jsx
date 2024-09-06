const Button = ({ setIncrement, Increment, type = "increment" }) => {
  const IncrementHandler = () => {
    setIncrement(Increment + 1);
  };

  const DecrementHandler = () => {
    setIncrement(Increment - 1);
  };
  return (
    <button
      type="button "
      className=""
      onClick={type === "increment" ? IncrementHandler : DecrementHandler}
    >
      {type === "increment" ? "Increment" : "Decrement"}
    </button>
  );
};

export default Button;
