import { useState, useMemo } from "react";
import { getCategoryCounts, getRecentActivities, getWhatsNext, filterBucket, searchBucket } from "../utils/helperMethods";

export function useBucketData(bucket) {
  const completed = bucket.filter(item => item.completed).length;
  const categoryCounts = getCategoryCounts(bucket);
  const recentActivities = getRecentActivities(bucket, 3);
  const [whatsNext] = useState(() => getWhatsNext(bucket));

  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [search, setSearch] = useState('');

  const filteredBucketItems = useMemo(() => filterBucket(bucket, filterCategory, filterStatus), [filterCategory, filterStatus]);
  const displayedBucketItems = useMemo(() => searchBucket(filteredBucketItems, search), [filteredBucketItems, search]);
  const handleCategoryChange = (category) => { setFilterCategory(category); setFilterStatus("all"); setSearch("") };

  const [smallPage, setSmallPage] = useState(0);
  const [smallFilter, setSmallFilter] = useState(false);
  const [smallSearch, setSmallSearch] = useState(false);

  return {
    completed,
    categoryCounts,
    recentActivities,
    whatsNext,

    filterCategory,
    setFilterCategory,
    filterStatus,
    setFilterStatus,
    search,
    setSearch,

    filteredBucketItems,
    displayedBucketItems,
    handleCategoryChange,

    smallPage,
    setSmallPage,
    smallFilter,
    setSmallFilter,
    smallSearch,
    setSmallSearch,
  };
}