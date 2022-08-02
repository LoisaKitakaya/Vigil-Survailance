import PageTitle from "../components/PageTitle";

import aboutImage from "../assets/intro-image.jpg";

const About = () => {
  PageTitle("Vigil | About");

  return (
    // border
    <div className="App-sub-container">
      <div className="this-container">
        <div className="display-container">
          <h1 className="text-center">About</h1>
          <h4 className="text-center">Get to know us better</h4>
          <br />
          <div className="about-sub">
            <div className="about-cont">
              <p>Servicing Clients across Canada</p>
              <h2>Alberta, British Columbia and Saskatchewan</h2>
              <p>
                We have handled thousands of cases over the years. We believe
                that our experience and reputation speaks for itself.
                <br />
                <br />
                Contact us today to book a free consultation with one of our
                professional and friendly support representatives to find out
                how we can assist you.
                <br />
                <br />
                Presently servicing clients in the following locations:
                Edmonton, Red Deer, Calgary, Bonnyville, Strathcona, County
                Edson, Gibbons, Grand Prairie, Fort McMurray, Leduc/Nisku
                Acheson, Winterburn, Slave Lake, Hinton and Lethbridge.
                <br />
                <br />
                Call GPS Security Group today: 1-844-989-2017
              </p>
            </div>
            <div className="about-cont">
              <img src={aboutImage} alt="..." />
            </div>
          </div>
          <div className="about-sub">
            <div className="about-cont">
              <p>Servicing Clients across Canada</p>
              <h2>Alberta, British Columbia and Saskatchewan</h2>
              <p>
                We have handled thousands of cases over the years. We believe
                that our experience and reputation speaks for itself.
                <br />
                <br />
                Contact us today to book a free consultation with one of our
                professional and friendly support representatives to find out
                how we can assist you.
                <br />
                <br />
                Presently servicing clients in the following locations:
                Edmonton, Red Deer, Calgary, Bonnyville, Strathcona, County
                Edson, Gibbons, Grand Prairie, Fort McMurray, Leduc/Nisku
                Acheson, Winterburn, Slave Lake, Hinton and Lethbridge.
                <br />
                <br />
                Call GPS Security Group today: 1-844-989-2017
              </p>
            </div>
            <div className="about-cont">
              <img src={aboutImage} alt="..." />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
    // border
  );
};

export default About;
