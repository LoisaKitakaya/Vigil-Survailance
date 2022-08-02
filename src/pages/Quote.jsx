import PageTitle from "../components/PageTitle";

const Quote = () => {
  PageTitle("Vigil | Quote");

  return (
    <div className="App-sub-container">
      <div className="this-container">
        <div className="display-container">
          <h1 className="text-center">Quote</h1>
          <h4 className="text-center">
            Fill the form and get a free quote on whatever you are interested in
          </h4>
          <br />
          <div className="quote-form">
            <form action="#" className="bg-dark text-light">
              <div className="row text-dark">
                <div className="col-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="firstname"
                      placeholder="First Name"
                    />
                    <label htmlFor="firstname">First name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="secondname"
                      placeholder="Second Name"
                    />
                    <label htmlFor="secondname">Second name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="company"
                      placeholder="Company Name"
                    />
                    <label htmlFor="company">Company name</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email address"
                    />
                    <label htmlFor="email">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      placeholder="City Name"
                    />
                    <label htmlFor="city">City/town</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Phone Number"
                    />
                    <label htmlFor="phone">Phone</label>
                  </div>
                </div>
                <div className="check-boxes text-light">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      name="alarmsystem"
                    />
                    <label className="form-check-label" htmlFor="alarmsystem">
                      Alarm system
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      name="videomonitoring"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="videomonitoring"
                    >
                      Video monitoring
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      name="electronic"
                    />
                    <label className="form-check-label" htmlFor="electronic">
                      Electronic security
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      name="automotive"
                    />
                    <label className="form-check-label" htmlFor="automotive">
                      Automotive tracking
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      name="equipment"
                    />
                    <label className="form-check-label" htmlFor="equipment">
                      Surveillance equipment
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="container-fluid">
                <button
                  type="submit"
                  className="btn btn-warning container-fluid"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Quote;
