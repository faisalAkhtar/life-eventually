import { Suspense, lazy } from "react";

import "./styles/fonts.css";
import "./styles/variable.css";
import "./styles/base.css";

import bucket from "./data/bucket.json";
import { useBucketData } from "./hooks/useBucketData";

import Navbar from "./components/Navbar/";
import Header from "./components/Header/";
import Topbar from "./components/Topbar/";
import CollectionGrid from "./components/CollectionGrid/";
const CollectionCard = lazy(() => import("./components/CollectionCard/"));
const Statistics = lazy(() => import("./components/Statistics/"));
import Footer from "./components/Footer/";
import Filter from "./components/Filter/";
import Search from "./components/Search/";
import SmallScreenFilter from "./components/SmallScreenFilter/";
import SmallScreenNavbar from "./components/SmallScreenNavbar/";
const Options = lazy(() => import("./components/Options/"));

export default function App() {
  const {
    completed,
    categoryCounts,
    recentActivities,
    whatsNext,
    filterCategory,
    filterStatus,
    search,
    displayedBucketItems,
    setFilterStatus,
    setSearch,
    handleCategoryChange,
    smallPage,
    smallFilter,
    smallSearch,
    setSmallPage,
    setSmallFilter,
    setSmallSearch
  } = useBucketData(bucket);

  return (
    <>
      <Navbar
        smallVisible={smallPage === 2}
        categoryCounts={categoryCounts}
        filterBucket={handleCategoryChange}
        selected={filterCategory}
      />

      <main>
        <Header total={bucket.length} completed={completed} />

        <Topbar smallHidden={smallPage === 0}>
          <Filter
            selected={filterStatus}
            filterBucket={setFilterStatus}
            isHidden={smallSearch}
          />

          <SmallScreenFilter
            isOpen={smallFilter}
            toggleFilter={setSmallFilter}
            isHidden={smallSearch}
          />

          <Search
            search={search}
            setSearch={setSearch}
            isOpen={smallSearch}
            toggleSearch={setSmallSearch}
          />
        </Topbar>

        <div className="collectionPage">
          <Suspense>
            <Options
              categoryCounts={categoryCounts}
              filterBucket={handleCategoryChange}
              selected={filterCategory}
              isVisibleOnSmallScreen={true}
              isOpen={smallFilter}
              toggleFilter={setSmallFilter}
              smallHidden={smallPage === 0}
            />
          </Suspense>

          <CollectionGrid smallHidden={smallPage === 0}>
            {displayedBucketItems.length === 0 ? (
              <div className="emptyQuote">
                {search.trim() ? (
                  <>Apparently, I have not planned for <strong>"{search}"</strong> yet.</>
                ) : (
                  <>If I am alive and kicking, something is coming up right here. Stay tuned! &mdash; Yours truly.</>
                )}
              </div>
            ) : (
              <Suspense fallback={<div className="emptyQuote">Loading...</div>}>
                {displayedBucketItems.map((item, ind) => (
                  <CollectionCard
                    ind={ind}
                    key={item.id}
                    title={item.title}
                    completed={item.completed}
                    dateCompleted={item.dateCompleted}
                    dateAdded={item.dateAdded}
                    slug={item.slug}
                  />
                ))}
              </Suspense>
            )}
          </CollectionGrid>

          <Suspense>
            <Statistics
              total={bucket.length}
              completed={completed}
              categoryCounts={categoryCounts}
              recentActivities={recentActivities}
              whatsNext={whatsNext}
              smallHidden={smallPage === 1}
            />
          </Suspense>
        </div>

        <Footer smallHidden={smallPage === 2} />
      </main>

      <SmallScreenNavbar selected={smallPage} setSelected={setSmallPage} />
    </>
  );
}