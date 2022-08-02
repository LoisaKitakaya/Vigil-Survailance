import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

import PageTitle from "../components/PageTitle";

const GET_ARTICLES = gql`
  query GET_ARTICLE($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      coverImage {
        url
      }
      content {
        html
      }
      date
    }
  }
`;

const Article = ({loader}) => {
  const slug = useParams();

  PageTitle(`Vigil | ${slug.slug}`);

  const { loading, error, data } = useQuery(GET_ARTICLES, {
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
              src={data.post.coverImage.url}
              className="img-fluid rounded"
              alt="..."
            />
            <br />
            <br />
            <br />
            <h2 className="text-center">{data.post.title}</h2>
            <br />
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: data.post.content.html }}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Article;
