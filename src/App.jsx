import { useState, useMemo } from "react";

import "./styles/fonts.css";
import "./styles/variable.css";
import "./styles/base.css";

import bucket from "./data/bucket.json";
import { filterBucket } from "./utils/helperMethods";
import { useBucketData } from "./hooks/useBucketData";

import Navbar from "./components/Navbar/";
import Header from "./components/Header/";
import Topbar from "./components/Topbar/";
import CollectionGrid from "./components/CollectionGrid/";
import CollectionCard from "./components/CollectionCard/";
import Statistics from "./components/Statistics/";
import Footer from "./components/Footer/";
import Filter from "./components/Filter/";
import Search from "./components/Search/";
import SmallScreenFilter from "./components/SmallScreenFilter/";
import SmallScreenNavbar from "./components/SmallScreenNavbar/";
import Options from "./components/Options/";

export default function App() {
  const { completed, categoryCounts, recentActivities, whatsNext } = useBucketData(bucket);
  const [smallPage, setSmallPage] = useState(0);
  const [smallFilter, setSmallFilter] = useState(false);
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const filteredBucketItems = useMemo(() => filterBucket(bucket, filterCategory, filterStatus), [filterCategory, filterStatus]);

  return (
    <>
      <Navbar
        smallVisible={smallPage === 3}
        categoryCounts={categoryCounts}
        filterBucket={setFilterCategory}
        selected={filterCategory}
      />

      <main>
        <Header total={bucket.length} completed={completed} />

        <Topbar smallHidden={smallPage === 0 || smallPage === 1}>
          <Filter
            smallHidden={smallPage === 0}
            filterBucket={setFilterStatus}
            length={filteredBucketItems.length}
          />

          <Search smallHidden={smallPage === 1} />

          <SmallScreenFilter
            smallHidden={smallPage === 0}
            isOpen={smallFilter}
            toggleFilter={setSmallFilter}
          />
        </Topbar>

        <div className="collectionPage">
          <Options
            categoryCounts={categoryCounts}
            filterBucket={setFilterCategory}
            selected={filterCategory}
            isVisibleOnSmallScreen={true}
            isOpen={smallFilter}
            toggleFilter={setSmallFilter}
            smallHidden={smallPage === 0}
          />

          <CollectionGrid smallHidden={smallPage === 0}>
            {filteredBucketItems.length === 0 ? (
              <div className="emptyQuote">
                If I am alive and kicking, something is coming up right here. Stay tuned! &mdash; Yours truly.
              </div>
            ) : (
              filteredBucketItems.map((item) => (
                <CollectionCard
                  key={item.id}
                  title={item.title}
                  caption={item.caption}
                  completed={item.completed}
                  dateCompleted={item.dateCompleted}
                  slug={item.slug}
                />
              ))
            )}
          </CollectionGrid>

          <Statistics
            total={bucket.length}
            completed={completed}
            categoryCounts={categoryCounts}
            recentActivities={recentActivities}
            whatsNext={whatsNext}
            smallHidden={smallPage === 2}
          />
        </div>

        <Footer />
      </main>

      <SmallScreenNavbar selected={smallPage} setSelected={setSmallPage} />
    </>
  );
}