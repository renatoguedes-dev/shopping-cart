import homeImage from "../assets/images/woman.jpg";
import ShopNowButton from "./ShopNowButton";

const Home = () => {
  return (
    <>
      <img
        className="home-background"
        src={homeImage}
        alt="woman with sunglasses"
      />
      <div className="home-content">
        <h1>Welcome to our store!</h1>
        <h2>
          Guedes is your one-stop destination for fashion-forward clothing and
          exquisite jewelry for both men and women. Step into a world of endless
          possibilities and let us redefine your shopping journey.
        </h2>
        <ShopNowButton />
      </div>
    </>
  );
};

export default Home;
