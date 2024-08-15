import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-content">
      <p>
        This is a fictional store and none of the products displayed here exist.
      </p>
      <p>
        Products&apos; information and images:
        <Link to="https://fakestoreapi.com/" target="_blank">
          {" "}
          Fake Store API.
        </Link>
      </p>
      <p>
        Home page background photo by
        <Link to="https://unsplash.com/@zvandrei" target="_blank">
          {" "}
          Andrey Zvyagintsev{" "}
        </Link>
        on
        <Link to="https://unsplash.com/"> Unsplash.</Link>
      </p>
    </div>
  );
};

export default About;
