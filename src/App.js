// import Routes, Route, Link
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Routes, Route } from "react-router-dom";

import "./css/App.css";

import Home from "./pages/Home";
import Services from "./pages/Services";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl58zenlc5e1601t8hfyce6lm/master",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App container">
        {/* app routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        {/* app routes */}
      </div>
    </ApolloProvider>
  );
}

export default App;
