import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

import PageTitle from "../components/PageTitle";

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

const Project = ({loader}) => {
  const slug = useParams();

  PageTitle(`Vigil | ${slug.slug}`);

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { slug: slug.slug },
  });
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
        <div className="display-container">
          <div className="document">
            <br />
            <img
              src={data.project.image.url}
              className="img-fluid rounded"
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
      <br />
      <br />
    </div>
  );
};

export default Project;
