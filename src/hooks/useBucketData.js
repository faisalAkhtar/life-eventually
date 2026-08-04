import { getCategoryCounts, getRecentActivities, getWhatsNext } from "../utils/helperMethods";

export function useBucketData(bucket) {
  const completed = bucket.filter(item => item.completed).length;
  const categoryCounts = getCategoryCounts(bucket);
  const recentActivities = getRecentActivities(bucket, 3);
  const whatsNext = getWhatsNext(bucket);

  return {
    completed,
    categoryCounts,
    recentActivities,
    whatsNext
  };
}