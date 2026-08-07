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
    const matchesCategory = category === "all" || item.category === category;
    const matchesStatus = status === "all" || (status === "complete" ? item.completed : !item.completed);
    return matchesCategory && matchesStatus;
  });
}

function searchBucket(items, query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) return items;

  const searchTerms = normalizedQuery
    .split(/\s+/)
    .filter(Boolean);

  return items.filter((item) => {
    const searchableText = [
      item.title,
      item.caption,
      item.category,
      item.location,
      item.notes,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchTerms.every((term) =>
      searchableText.includes(term)
    );
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

export { getCategoryCounts, getRecentActivities, getWhatsNext, filterBucket, searchBucket, reFormatDate };