import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import "../css/animation.css";

import PageTitle from "../components/PageTitle";
import IntroBanner from "../layout/IntroBanner";

import prof from "../assets/profesional.jpg";
import homeimage from "../assets/home.jpg";

const GET_RECENT = gql`
  query {
    posts(first: 3, orderBy: date_DESC) {
      id
      slug
      title
      snippet
      coverImage {
        url
      }
      date
    }
  }
`;

const Home = ({ loader }) => {
  PageTitle("Vigil | Home");

  const { loading, error, data } = useQuery(GET_RECENT);
  console.log(data);

  if (loading)
    return (
      <div className="App-sub-container-2">
        <div className="load-and-error">
          <img src={loader} alt="loader" />
        </div>
        <br />
        <br />
      </div>
    );

  if (error)
    return (
      <div className="App-sub-container-2">
        <div className="load-and-error">
          <div className="alert alert-danger text-center" role="alert">
            <h1>Ooops! Something went wrong!</h1>
            <hr />
            <h4>Error: {error.message}</h4>
          </div>
        </div>
        <br />
        <br />
      </div>
    );

  return (
    // border
    <div className="App-sub-container">
      {/* component */}
      <IntroBanner />
      {/* component */}
      <div className="this-container">
        <div className="display-container">
          <div className="intro">
            <div className="intro-caption">
              <h1>Vigil, the eyes for your business</h1>
              <br />
              <p className="fs-4">
                With Live Video Surveillance, CCTV Monitoring Helps You Secure
                Your Property.
              </p>
              <br />
              <div className="intro-img">
                <img src={homeimage} className="img-fluid rounded" alt="..." />
              </div>
            </div>
            {/* ///s */}
            <div className="intro-form">
              <form action="#" className="bg-dark">
                <div className="profesional text-center text-light">
                  <img
                    src={prof}
                    className="img-thumbnail rounded mx-auto d-block"
                    alt="..."
                  ></img>
                  <br />
                  <h4>Freedom Loisa</h4>
                  <p>Digital Security Expert</p>
                  <p>(+254) 725 131 828</p>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                  <label htmlhtmlFor="name">Your name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                  <label htmlhtmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                  <label htmlhtmlFor="phone">Phone number</label>
                </div>
                <button
                  type="submit"
                  className="btn btn-warning container-fluid"
                >
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

          {/* why work with us */}
          <div className="reason">
            <h1>Why work with us?</h1>
            <br />
            <div className="reason-container">
              <div className="reason-item">
                <div className="card text-bg-secondary">
                  <div className="card-body">
                    <h6 className="card-subtitle text-center">
                      <i className="bi bi-cash-stack fs-1"></i>
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
                      <i className="bi bi-clock fs-1"></i>
                    </h6>
                    <h3 className="card-title text-center">Punctual</h3>
                    <p className="card-text text-center">
                      Our turnaround time would be close to none and we will
                      alert you of any event right away.
                    </p>
                  </div>
                </div>

                <div className="card text-bg-secondary">
                  <div className="card-body">
                    <h6 className="card-subtitle text-center">
                      <i className="bi bi-headset fs-1"></i>
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
                      <i className="bi bi-hand-thumbs-up fs-1"></i>
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
                <div className="card text-bg-secondary">
                  <div className="card-body">
                    <h6 className="card-subtitle text-center">
                      <i className="bi bi-building fs-1"></i>
                    </h6>
                    <h3 className="card-title text-center">
                      Protect Your Property
                    </h3>
                    <p className="card-text text-center">
                      No matter what business you are involved in! We are all
                      set to take care of your premises with our security
                      measures.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-subtitle text-center">
                      <i className="bi bi-graph-up-arrow fs-1"></i>
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
          <div className="testimonials">
            <h1 className="text-center">Testimonials</h1>
            <h4 className="text-center">
              Don’t Just Take Our Word For It, Read It From Them
            </h4>
            <br />
            <div className="testimonial-container">
              <div className="card">
                <div className="card-body">
                  <p className="card-text text-center">
                    "We continuously strive hard to keep our customers and
                    clients happy. Welcoming customer’s feedback and taking
                    steps accordingly is what CCTV Monitoring Services
                    spotlights and will continue to do so."
                  </p>
                  <hr />
                  <h3 className="card-title text-center">Owner</h3>
                  <h6 className="card-subtitle text-center">
                    Automotive Dealership
                  </h6>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <p className="card-text text-center">
                    "CCTVmonitoring.com staff is well-trained and do their job
                    with accuracy, Honest, reliable, and are dedicated to their
                    roles and responsibility. Highly recommend them!"
                  </p>
                  <hr />
                  <h3 className="card-title text-center">Chief Executive</h3>
                  <h6 className="card-subtitle text-center">
                    Community Hall {"&"} Event Center
                  </h6>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <p className="card-text text-center">
                    "Once you sign up with the CCTVMonitoring.com team, their
                    trained professionals take the responsibility of watching
                    your premises as their own business and keep you updated
                    24X7."
                  </p>
                  <hr />
                  <h3 className="card-title text-center">Owner</h3>
                  <h6 className="card-subtitle text-center">
                    Electronic Store
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* testimonials */}
          <hr />
          {/* recent posts */}
          <div className="recent-posts">
            <h1 className="text-center">Recent Posts</h1>
            <h4 className="text-center">
              Articles, blogs and news related to surveillance
            </h4>
            <br />
            <div className="recent-post-container">
              {data.posts.map((article, index) => {
                const list = (
                  <>
                    <Link
                      to={`/article/${article.slug}`}
                      key={index}
                      className="slug-link text-dark"
                    >
                      <div className="card mb-3">
                        <img
                          src={article.coverImage.url}
                          className="card-img-top img-fluid"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{article.title}</h5>
                          <p className="card-text">{article.snippet}</p>
                          <p className="card-text">
                            <small className="text-muted">{article.date}</small>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </>
                );

                return list;
              })}
            </div>
          </div>
          {/* recent posts */}
        </div>
      </div>
      <br />
      <br />
    </div>
    // border
  );
};

export default Home;
