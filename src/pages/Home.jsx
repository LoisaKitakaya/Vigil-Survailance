import PageTitle from "../components/PageTitle";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import prof from "../assets/profesional.jpg";

const Home = () => {
  PageTitle("VS | Home");

  return (
    <div className="home">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* body */}
      <div className="container-fluid">
        {/* intro */}
        <div className="intro">
          <div className="intro-caption">
            <h1>Let us be the eyes for your business</h1>
            <br />
            <p className="fs-4">
              With Live Video Surveillance, CCTV Monitoring Helps You Secure
              Your Property.
            </p>
            <br />
            <div className="intro-links">
              <a href="#" className="btn btn-dark">
                Services <i class="bi bi-arrow-right-short"></i>
              </a>
              <a href="#" className="btn btn-dark">
                Portfolio <i class="bi bi-arrow-right-short"></i>
              </a>
              <a href="#" className="btn btn-dark">
                Blog <i class="bi bi-arrow-right-short"></i>
              </a>
              <a href="#" className="btn btn-dark">
                Shop <i class="bi bi-arrow-right-short"></i>
              </a>
              <a href="#" className="btn btn-dark">
                Pricing <i class="bi bi-arrow-right-short"></i>
              </a>
              <a href="#" className="btn btn-dark">
                About <i class="bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
          {/* ///s */}
          <div className="intro-form">
            <form action="#" className="bg-dark">
              <div className="profesional text-center text-light">
                <img
                  src={prof}
                  class="img-thumbnail rounded mx-auto d-block"
                  alt="..."
                ></img>
                <br />
                <h4>Freedom Loisa</h4>
                <p>Digital Security Expert</p>
                <p>(+254) 725 131 828</p>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="name@example.com"
                />
                <label for="name">Your name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="name@example.com"
                />
                <label for="email">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="phone"
                  class="form-control"
                  placeholder="name@example.com"
                />
                <label for="phone">Phone number</label>
              </div>
              <button type="submit" class="btn btn-warning container-fluid">
                Get a call back
              </button>
              {/* <hr />
              <p className="text-muted fs-6 text-center">
                By submitting my data I agree to be contacted
              </p> */}
            </form>
          </div>
        </div>
        {/* intro */}
        <hr />
        {/* why work with us */}
        <div className="reason">
          <h1 className="text-center">Why work with us?</h1>
          <br />
          <div className="reason-container">
            <div className="reason-item">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle text-center">
                    <i class="bi bi-cash-stack fs-1"></i>
                  </h6>
                  <h3 className="card-title text-center">No Hidden Costs</h3>
                  <p className="card-text text-center">
                    We remain transparent and precise when the very first time
                    our customers approach us. All you pay is a fixed monthly
                    fee, there are no hidden charges for event reporting or
                    anything.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle text-center">
                    <i class="bi bi-clock fs-1"></i>
                  </h6>
                  <h3 className="card-title text-center">Punctual</h3>
                  <p className="card-text text-center">
                    Our turnaround time would be close to none and we will alert
                    you of any event right away.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle text-center">
                    <i class="bi bi-headset fs-1"></i>
                  </h6>
                  <h3 className="card-title text-center">
                    After Sales Support
                  </h3>
                  <p className="card-text text-center">
                    We are one of those companies that care about their
                    customers even after they have signed up for our services.
                  </p>
                </div>
              </div>
            </div>
            <div className="reason-item">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle text-center">
                    <i class="bi bi-hand-thumbs-up fs-1"></i>
                  </h6>
                  <h3 className="card-title text-center">
                    Satisfaction Guaranteed
                  </h3>
                  <p className="card-text text-center">
                    We work closely with our customers and clients with an aim
                    to deliver 100% satisfactory customer services.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle text-center">
                    <i class="bi bi-building fs-1"></i>
                  </h6>
                  <h3 className="card-title text-center">
                    Protect Your Property
                  </h3>
                  <p className="card-text text-center">
                    No matter what business you are involved in! We are all set
                    to take care of your premises with our security measures.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle text-center">
                    <i class="bi bi-graph-up-arrow fs-1"></i>
                  </h6>
                  <h3 className="card-title text-center">
                    Continous Improvement
                  </h3>
                  <p className="card-text text-center">
                    We continuously strive hard to keep our customers and
                    clients happy. Welcoming customer’s feedback and taking
                    steps accordingly is what CCTV Monitoring Services
                    spotlights and will continue to do so.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* why work with us */}
        <hr />
        {/* testimonials */}
        <div className="testimonials"></div>
        {/* testimonials */}
      </div>
      {/* body */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Home;
