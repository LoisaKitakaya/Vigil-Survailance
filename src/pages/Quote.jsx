import PageTitle from "../components/PageTitle";

const Quote = () => {
  PageTitle("Vigil | Quote");

  return (
    <div className="App-sub-container">
      <div className="this-container">
        <br />
        <h1 className="text-center">Quote</h1>
        <h4 className="text-center">
          Fill the form and get a free quote on services you are interested in
        </h4>
        <br />
        <div className="quote-form">
          <form action="#" className="bg-dark card text-light">
            <div className="card-body text-dark">
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
              <div className="row text-dark">
                <div className="col-6 text-light float-start">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      name="automotive"
                    />
                    <label className="form-check-label" htmlFor="automotive">
                      Alarm system installation
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
                      Video feed monitoring
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
                      Surveillance consultancy
                    </label>
                  </div>
                </div>
                <div className="col-6 text-light float-end">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      name="alarmsystem"
                    />
                    <label className="form-check-label" htmlFor="alarmsystem">
                      Automotive tracking
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
                      Equipment purchase
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
                      Equipment installation
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-warning container-fluid mb-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Quote;
