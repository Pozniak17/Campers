import "./App.css";
import CardList from "./components/Cards/CardList/CardList";
import FilterList from "./components/Filters/FilterList/FilterList";
import { Layout } from "./components/Layout/Layout.module";

function App() {
  return (
    <Layout>
      <FilterList />
      <CardList />
    </Layout>
  );
}

export default App;
