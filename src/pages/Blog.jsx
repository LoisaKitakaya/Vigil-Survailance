import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

import spinner from "../assets/Settings.gif";

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

const Blog = () => {
  PageTitle("Vigil | Blog");

  const { loading, error, data } = useQuery(GET_ARTICLES);
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
    <div className="blog">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* body */}
      <div className="container-fluid">
        <div className="blog-container">
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
                    <div class="card card-card mb-3">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            src={post.coverImage.url}
                            class="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">{post.title}</h5>
                            <p class="card-text">{post.snippet}</p>
                            <p class="card-text">
                              <small class="text-muted">{post.date}</small>
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

export default Blog;
