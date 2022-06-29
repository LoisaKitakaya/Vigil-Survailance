import PageTitle from "../components/PageTitle";
import HomeLanding from "../layout/HomeLanding";

const Home = () => {
  PageTitle("VS | Home");

  return (
    <div className="home">
      {/* home landing section */}

      {/* intro */}
      <div className="intro">
        <HomeLanding />
      </div>
      {/* intro */}

      {/* home landing section */}
    </div>
  );
};

export default Home;
