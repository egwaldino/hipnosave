export function formatDateTimeLabel(date: Date, time: string) {
  const weekday = date.toLocaleDateString("pt-PT", { weekday: "long" });
  const monthDay = date.toLocaleDateString("pt-PT", { day: "numeric", month: "long" });
  const capitalizedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);

  return `${capitalizedWeekday}, ${monthDay} — ${time}`;
}

export function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function tomorrow() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date;
}

export function firstAvailableWeekday(from: Date) {
  const date = new Date(from.getFullYear(), from.getMonth(), from.getDate());

  while (date.getDay() === 0 || date.getDay() === 6) {
    date.setDate(date.getDate() + 1);
  }

  return date;
}
