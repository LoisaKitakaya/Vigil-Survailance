import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const QuoteForm = ({ service }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lt6up3s",
        "quote_form",
        form.current,
        "TDPuuTiYPX93_hmQN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setShowSuccess(true);
  };

  return (
    <div className="card bg-light">
      <div className="card-body">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="service"
              value={service}
              readOnly
              placeholder="services"
            />
            <label htmlFor="firstname">Service</label>
          </div>
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
          <br />
          <button
            type="submit"
            className="btn btn-secondary container-fluid mb-3"
          >
            Submit
          </button>
        </form>
      </div>
      {/* toast */}
      <ToastContainer className="toast-alert" position="bottom-end">
        <Toast
          onClose={() => setShowSuccess(false)}
          show={showSuccess}
          delay={3000}
          autohide
          bg="success"
          className="text-light"
        >
          <Toast.Body>
            <i class="bi bi-patch-check-fill"></i> Form submitted successfully!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default QuoteForm;
