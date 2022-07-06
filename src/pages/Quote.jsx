import PageTitle from "../components/PageTitle";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const Quote = () => {
  PageTitle("Vigil | Quote");

  return (
    <div className="quote">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* body */}
      <div className="container-fluid">
        {/* quote */}
        <div className="quote-container">
          <h1 className="text-center">Quote</h1>
          <h4 className="text-center">
            Fill the form and get a free quote on whatever you are interested in
          </h4>
          <br />
          <div className="quote-form">
            <form action="#" className="bg-dark text-light">
              <div className="row text-dark">
                <div className="col-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="firstname"
                      placeholder="First Name"
                    />
                    <label for="firstname">First name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="secondname"
                      placeholder="Second Name"
                    />
                    <label for="secondname">Second name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="company"
                      placeholder="Company Name"
                    />
                    <label for="company">Company name</label>
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="Email address"
                    />
                    <label for="email">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="city"
                      placeholder="City Name"
                    />
                    <label for="city">City/town</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="phone"
                      placeholder="Phone Number"
                    />
                    <label for="phone">Phone</label>
                  </div>
                </div>
                <div className="check-boxes text-light">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      name="alarmsystem"
                    />
                    <label class="form-check-label" for="alarmsystem">
                      Alarm system
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      name="videomonitoring"
                    />
                    <label class="form-check-label" for="videomonitoring">
                      Video monitoring
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      name="electronic"
                    />
                    <label class="form-check-label" for="electronic">
                      Electronic security
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      name="automotive"
                    />
                    <label class="form-check-label" for="automotive">
                      Automotive tracking
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      name="equipment"
                    />
                    <label class="form-check-label" for="equipment">
                      Surveillance equipment
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="container-fluid">
                <button type="submit" class="btn btn-warning container-fluid">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* quote */}
      </div>
      {/* body */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Quote;
