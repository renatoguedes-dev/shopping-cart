import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "150px auto",
};

const Spinner = () => {
  return (
    <ClipLoader
      color="#1565c0"
      cssOverride={override}
      size={150}
      speedMultiplier={0.5}
    />
  );
};

export default Spinner;
