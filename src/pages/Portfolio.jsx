import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";

const GET_PROJECTS = gql`
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

const Portfolio = ({ loader }) => {
  PageTitle("Vigil | Portfolio");

  const { loading, error, data } = useQuery(GET_PROJECTS);
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
    <div className="App-sub-container">
      <div className="this-container">
        <br />
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
                  <div className="card card-card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={project.image.url}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{project.name}</h5>
                          <p className="card-text">{project.snippet}</p>
                          <p className="card-text">
                            <small className="text-muted">Vigil project</small>
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
      <br />
      <br />
    </div>
  );
};

export default Portfolio;
