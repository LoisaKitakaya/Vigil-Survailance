import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

import spinner from "../assets/Settings.gif";

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

const Article = () => {
  const slug = useParams();

  PageTitle(`Vigil | ${slug.slug}`);

  const { loading, error, data } = useQuery(GET_ARTICLES, {
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
    <div className="article">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* body */}
      <div className="container-fluid">
        <div className="article-container">
          <div className="document">
            <br />
            <img
              src={data.post.coverImage.url}
              class="img-fluid rounded"
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
      {/* body */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Article;
