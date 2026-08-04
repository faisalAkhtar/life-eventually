import { useState, useEffect } from "react";

import "./styles/fonts.css";
import "./styles/variable.css";
import "./styles/base.css";

import bucket from "./data/bucket.json";

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

const svgModules = import.meta.glob('./assets/icons/*.svg', {
  eager: true,
  query: '?react',
  import: 'default'
});

export default function App() {
  const completed = bucket.filter(item => item.completed).length;

  const categoryCounts = bucket.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const svgMap = {};
  Object.entries(svgModules).forEach(([path, component]) => {
    const filename = path.split('/').pop().replace('.svg', '');
    svgMap[filename] = component;
  });

  const [filteredBucketItems, setFilteredBucketItems] = useState(bucket);
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    if (filterCategory === 'all' && filterStatus === 'all') {
      setFilteredBucketItems(bucket);
    } else if (filterCategory === 'all') {
      if (filterStatus === 'complete') {
        setFilteredBucketItems(bucket.filter(item => item.completed));
      } else {
        setFilteredBucketItems(bucket.filter(item => !item.completed));
      }
    } else if (filterStatus === 'all') {
      setFilteredBucketItems(bucket.filter(item => item.category === filterCategory));
    } else {
      if (filterStatus === 'complete') {
        setFilteredBucketItems(bucket.filter(item => item.completed && item.category === filterCategory));
      } else {
        setFilteredBucketItems(bucket.filter(item => !item.completed && item.category === filterCategory));
      }
    }
  }, [filterCategory, filterStatus]);

  const recentActivities = [...bucket]
    .sort((a, b) => {
      if (a.dateCompleted === "") return 1;
      if (b.dateCompleted === "") return -1;
      return new Date(b.dateCompleted) - new Date(a.dateCompleted)
    })
    .slice(0, 3);

  const whatsNext = () => {
    const onlyCompleted = bucket.filter(item => !item.completed);
    return onlyCompleted[Math.floor(Math.random() * onlyCompleted.length)];
  };

  const [smallPage, setSmallPage] = useState(0);
  const [smallFilter, setSmallFilter] = useState(false);

  return (
    <>
      <Navbar
        smallVisible={smallPage === 3}
        categoryCounts={categoryCounts}
        svgMap={svgMap}
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
            Icon={svgMap['filter']}
          />
        </Topbar>

        <div className="collectionPage">
          <Options
            categoryCounts={categoryCounts}
            svgMap={svgMap}
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
                  image={item.image}
                  Empty={svgMap['empty']}
                  slug={item.slug}
                />
              ))
            )}
          </CollectionGrid>

          <Statistics
            total={bucket.length}
            completed={completed}
            categoryCounts={categoryCounts}
            svgMap={svgMap}
            recentActivities={recentActivities}
            whatsNext={whatsNext()}
            smallHidden={smallPage === 2}
          />
        </div>

        <Footer />
      </main>

      <SmallScreenNavbar
        HomeSvg={svgMap['home']}
        SearchSvg={svgMap['search']}
        StatsSvg={svgMap['stats']}
        QuoteSvg={svgMap['quote']}
        selected={smallPage}
        setSelected={setSmallPage}
      />
    </>
  );
}