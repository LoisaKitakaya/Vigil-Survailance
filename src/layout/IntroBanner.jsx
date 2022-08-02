import { Link } from "react-router-dom";
import "../css/layout.css";

const IntroBanner = () => {
  return (
    <div className="intro-banner text-light">
      <div className="container banner-container">
        <h1 className="banner-title">
          Check out our store for all your surveillance needs
        </h1>
        <p className="banner-text fs-4">
          Legit Products, Factory Prices, Excellent Service
        </p>
        <br />
        <Link to={"/services"} className="btn btn-dark">
          <i className="bi bi-list-stars"></i> Our services
        </Link>
        <a
          href="https://vigilsurveillance.netlify.app/"
          className="btn btn-dark"
        >
          <i className="bi bi-cart"></i> Go to shop
        </a>
      </div>
    </div>
  );
};

export default IntroBanner;
