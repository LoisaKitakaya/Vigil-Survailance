import PageTitle from "../components/PageTitle";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const Home = () => {
  PageTitle("VS | Home");

  return (
    <div className="home container-fluid">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Home;
