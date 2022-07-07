import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

import spinner from "../assets/Settings.gif";

const GET_PROJECT = gql`
  query GET_PROJECT($slug: String!) {
    project(where: { slug: $slug }) {
      id
      name
      image {
        url
      }
      description {
        html
      }
    }
  }
`;

const Project = () => {
  const slug = useParams();

  PageTitle(`Vigil | ${slug.slug}`);

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { slug: slug.slug },
  });
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
    <div className="project">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* body */}
      <div className="container-fluid">
        <div className="project-container">
          <div className="document">
            <br />
            <img
              src={data.project.image.url}
              class="img-fluid rounded"
              alt="..."
            />
            <br />
            <br />
            <br />
            <h2 className="text-center">{data.project.name}</h2>
            <br />
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: data.project.description.html,
              }}
            />
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

export default Project;
