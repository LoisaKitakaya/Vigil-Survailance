// import Routes, Route, Link
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Routes, Route } from "react-router-dom";

import "./css/App.css";

import loader from "./assets/loader1.gif";

import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

import About from "./pages/About";
import Article from "./pages/Article";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import Quote from "./pages/Quote";
import Services from "./pages/Services";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl58zenlc5e1601t8hfyce6lm/master",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* navigation */}
        <Navbar />
        {/* navigation */}

        {/* app routes */}
        <Routes>
          <Route path="/" element={<Home loader={loader} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog loader={loader} />} />
          <Route path="/portfolio" element={<Portfolio loader={loader} />} />
          <Route path="/article/:slug" element={<Article loader={loader} />} />
          <Route path="/project/:slug" element={<Project loader={loader} />} />
        </Routes>
        {/* app routes */}

        {/* footer */}
        <Footer />
        {/* footer */}
      </div>
    </ApolloProvider>
  );
}

export default App;
