function getCategoryCounts(bucket) {
  return bucket.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
}

function getRecentActivities(bucket, count = 3) {
  return [...bucket]
    .sort((a, b) => {
      if (!a.dateCompleted) return 1;
      if (!b.dateCompleted) return -1;
      return new Date(b.dateCompleted) - new Date(a.dateCompleted);
    })
    .slice(0, count);
}

function getWhatsNext(bucket) {
  const remaining = bucket.filter(
    item => !item.completed
  );
  return remaining[
    Math.floor(Math.random() * remaining.length)
  ];
}

function filterBucket(bucket, category, status) {
  return bucket.filter(item => {
    const categoryOk = category === "all" || item.category === category;
    const statusOk = status === "all" || (status === "complete" ? item.completed : !item.completed);
    return categoryOk && statusOk;
  });
}

function reFormatDate(dateStr) {
  const date = new Date(dateStr);

  if (isNaN(date)) return "";

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(date);
};

export { getCategoryCounts, getRecentActivities, getWhatsNext, filterBucket, reFormatDate };