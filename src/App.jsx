import "./styles/fonts.css";
import "./styles/variable.css";
import "./styles/base.css";

import bucket from "./data/bucket.json";

import Navbar from "./components/Navbar/";
import Header from "./components/Header/";
import Topbar from "./components/Topbar";
import CollectionGrid from "./components/CollectionGrid";
import CollectionCard from "./components/CollectionCard";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Search from "./components/Search";

export default function App() {
  const completed = bucket.filter(item => item.completed).length;

  return (
    <>
      <Navbar />
      <main>
        <Header total={bucket.length} completed={completed} />
        <Topbar>
          <Filter />
          <Search />
        </Topbar>
        <div className="collectionPage">
          <CollectionGrid>
            {bucket.map((item, ind) => (
              <CollectionCard key={{ ind }} val={{ item }} />
            ))}
          </CollectionGrid>
          <Statistics />
        </div>
        <Footer />
      </main>
    </>
  );
}