"use client";

import { useMemo, useState } from "react";

export interface CalendarDayCell {
  date: Date;
  day: number;
  muted: boolean;
  available: boolean;
  isToday: boolean;
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function mondayFirstWeekday(date: Date) {
  return (date.getDay() + 6) % 7;
}

interface UseCalendarMonthOptions {
  maxDate?: Date;
}

export function useCalendarMonth({ maxDate }: UseCalendarMonthOptions = {}) {
  const today = useMemo(() => startOfDay(new Date()), []);
  const minYear = today.getFullYear();
  const minMonth = today.getMonth();

  const [year, setYear] = useState(minYear);
  const [month, setMonth] = useState(minMonth);

  const canGoToPreviousMonth = year > minYear || month > minMonth;
  const canGoToNextMonth = maxDate
    ? year < maxDate.getFullYear() || month < maxDate.getMonth()
    : true;

  function goToPreviousMonth() {
    if (!canGoToPreviousMonth) return;
    setMonth((current) => {
      if (current === 0) {
        setYear((y) => y - 1);
        return 11;
      }
      return current - 1;
    });
  }

  function goToNextMonth() {
    if (!canGoToNextMonth) return;
    setMonth((current) => {
      if (current === 11) {
        setYear((y) => y + 1);
        return 0;
      }
      return current + 1;
    });
  }

  const monthLabel = useMemo(() => {
    const label = new Date(year, month, 1).toLocaleDateString("pt-PT", {
      month: "long",
      year: "numeric",
    });
    return label.charAt(0).toUpperCase() + label.slice(1);
  }, [year, month]);

  const days: CalendarDayCell[] = useMemo(() => {
    const firstOfMonth = new Date(year, month, 1);
    const leadingBlanks = mondayFirstWeekday(firstOfMonth);
    const totalDaysCurrent = new Date(year, month + 1, 0).getDate();
    const totalDaysPrev = new Date(year, month, 0).getDate();

    const cells: CalendarDayCell[] = [];

    for (let i = leadingBlanks - 1; i >= 0; i--) {
      const day = totalDaysPrev - i;
      const date = new Date(year, month - 1, day);
      cells.push({ date, day, muted: true, available: false, isToday: false });
    }

    for (let day = 1; day <= totalDaysCurrent; day++) {
      const date = new Date(year, month, day);
      const weekday = date.getDay();
      const isWeekend = weekday === 0 || weekday === 6;
      const isPast = date < today;
      const isToday = date.getTime() === today.getTime();

      const isAfterMax = maxDate ? date > maxDate : false;

      cells.push({
        date,
        day,
        muted: false,
        available: !isPast && !isWeekend && !isAfterMax,
        isToday,
      });
    }

    const trailingBlanks = (7 - (cells.length % 7)) % 7;
    for (let day = 1; day <= trailingBlanks; day++) {
      const date = new Date(year, month + 1, day);
      cells.push({ date, day, muted: true, available: false, isToday: false });
    }

    return cells;
  }, [year, month, today, maxDate]);

  return {
    monthLabel,
    days,
    goToPreviousMonth,
    goToNextMonth,
    canGoToPreviousMonth,
    canGoToNextMonth,
  };
}
