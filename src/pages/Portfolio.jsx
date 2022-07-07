import { useQuery, gql } from "@apollo/client";

import PageTitle from "../components/PageTitle";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

import spinner from "../assets/Settings.gif";
import { Link } from "react-router-dom";

const GET_POJECTS = gql`
  query GET_PROJECTS {
    projects {
      id
      slug
      name
      snippet
      image {
        url
      }
    }
  }
`;

const Portfolio = () => {
  PageTitle("Vigil | Portfolio");

  const { loading, error, data } = useQuery(GET_POJECTS);
  console.log(data);

  if (loading)
    return (
      <div className="App">
        <div className="animation-container">
          <div className="loader">
            <img src={spinner} alt="..." />
          </div>
          <div className="loader-text">
            <h2>Loading...</h2>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="App">
        <div className="animation-container">
          <div className="loader">
            <h1>Error!</h1>
          </div>
          <div className="loader-text">
            <h2>Something went wrong!</h2>
          </div>
        </div>
      </div>
    );

  return (
    <div className="portfolio">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* body */}
      <div className="container-fluid">
        <div className="portfolio-container">
          <h1 className="text-center">Company Portfolio</h1>
          <h4 className="text-center">Check out what we have been up to</h4>
          <br />
          <div className="projects-container">
            {data.projects.map((project, index) => {
              const list = (
                <>
                  <Link
                    to={`/project/${project.slug}`}
                    key={index}
                    className="slug-link text-dark"
                  >
                    <div class="card card-card mb-3">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            src={project.image.url}
                            class="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">{project.name}</h5>
                            <p class="card-text">{project.snippet}</p>
                            <p class="card-text">
                              <small class="text-muted">Vigil project</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );

              return list;
            })}
          </div>
        </div>
      </div>
      {/* body */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Portfolio;
