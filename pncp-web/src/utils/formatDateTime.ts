export function formatDateTime(dateTimeString: string): string {
  const date = new Date(dateTimeString);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  const dayFormatted = day < 10 ? `0${day}` : day;
  const monthFormatted = month < 10 ? `0${month}` : month;
  const hoursFormatted = hours < 10 ? `0${hours}` : hours;
  const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
  const secondsFormatted = seconds < 10 ? `0${seconds}` : seconds;

  return `${dayFormatted}/${monthFormatted}/${year} - ${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
}
