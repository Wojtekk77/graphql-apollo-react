import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Launches from "./components/Launches";
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <h2>No to Zaczynamy zabawe z Reactem :)</h2>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
