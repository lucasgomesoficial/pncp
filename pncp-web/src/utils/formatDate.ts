export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  const dayFormatted = day < 10 ? `0${day}` : day;
  const monthFormatted = month < 10 ? `0${month}` : month;

  return `${dayFormatted}/${monthFormatted}/${year}`;
}
