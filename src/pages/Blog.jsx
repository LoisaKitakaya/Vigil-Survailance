import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";

const GET_ARTICLES = gql`
  query GET_ARTICLES {
    posts {
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

const Blog = ({loader}) => {
  PageTitle("Vigil | Blog");

  const { loading, error, data } = useQuery(GET_ARTICLES);
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
          <h1 className="text-center">Company Articles {"&"} News</h1>
          <h4 className="text-center">
            Resources related to surveillance and security
          </h4>
          <br />
          <div className="projects-container">
            {data.posts.map((post, index) => {
              const list = (
                <>
                  <Link
                    to={`/article/${post.slug}`}
                    key={index}
                    className="slug-link text-dark"
                  >
                    <div className="card card-card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src={post.coverImage.url}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.snippet}</p>
                            <p className="card-text">
                              <small className="text-muted">{post.date}</small>
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
      <br />
      <br />
    </div>
  );
};

export default Blog;
