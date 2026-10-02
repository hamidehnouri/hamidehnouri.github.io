import React, { useId } from 'react';
import { githubActivity, profile } from '../data.js';

const DAY = 86_400_000;
const start = Date.parse(`${githubActivity.start}T00:00:00Z`);
const end = Date.parse(`${githubActivity.end}T00:00:00Z`);
const totalDays = Math.round((end - start) / DAY) + 1;
const totalWeeks = Math.ceil(totalDays / 7);
const firstHalf = Math.ceil(totalWeeks / 2);
const colors = ['#303940', '#205753', '#278783', '#2fb5af', 'var(--arc-cyan)'];
const dateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
const monthFormat = new Intl.DateTimeFormat('en-GB', { month: 'short', timeZone: 'UTC' });

export function formatDate(iso) {
  return dateFormat.format(new Date(`${iso}T00:00:00Z`));
}

function CalendarHalf({ firstWeek, weeks }) {
  const patternId = `calendar-${useId().replace(/:/g, '')}`;
  const visibleDays = Math.min(weeks * 7, totalDays - firstWeek * 7);
  const fullWeeks = Math.floor(visibleDays / 7);
  const remainingDays = visibleDays % 7;
  const labels = [];
  let lastMonth = -1;
  let lastLabel = -3;

  for (let week = 0; week < weeks; week++) {
    const date = new Date(start + (firstWeek + week) * 7 * DAY);
    if (date.getUTCMonth() !== lastMonth) {
      lastMonth = date.getUTCMonth();
      if (!(firstWeek === 0 && week === 0) && week - lastLabel >= 3 && week < weeks - 2) {
        labels.push({ week, label: monthFormat.format(date) });
        lastLabel = week;
      }
    }
  }

  return (
    <svg className="arc-gh-half" viewBox={`0 0 ${42 + weeks * 12} 108`} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={patternId} x="42" y="24" width="12" height="12" patternUnits="userSpaceOnUse">
          <rect width="9" height="9" fill={colors[0]} />
        </pattern>
      </defs>
      <rect x="42" y="24" width={fullWeeks * 12} height="84" fill={`url(#${patternId})`} />
      {remainingDays > 0 && <rect x={42 + fullWeeks * 12} y="24" width="12" height={remainingDays * 12} fill={`url(#${patternId})`} />}
      {[[1, 'Mon'], [3, 'Wed'], [5, 'Fri']].map(([row, label]) => (
        <text key={label} x="0" y={32 + row * 12} className="arc-gh-label">{label}</text>
      ))}
      {labels.map(({ week, label }) => <text key={week} x={42 + week * 12} y="14" className="arc-gh-label">{label}</text>)}
      {githubActivity.days.map(([date, count, level]) => {
        const offset = Math.round((Date.parse(`${date}T00:00:00Z`) - start) / DAY);
        const week = Math.floor(offset / 7);
        if (week < firstWeek || week >= firstWeek + weeks) return null;
        return (
          <rect key={date} x={42 + (week - firstWeek) * 12} y={24 + (offset % 7) * 12} width="9" height="9" fill={colors[level]}>
            <title>{date}: {count} {count === 1 ? 'contribution' : 'contributions'}</title>
          </rect>
        );
      })}
    </svg>
  );
}

export default function GitHubActivity() {
  const total = githubActivity.days.reduce((sum, [, count]) => sum + count, 0);
  const activeDays = githubActivity.days.length;

  return (
    <fieldset className="arc-github" aria-labelledby="arc-github-title">
      <legend id="arc-github-title">GITHUB ACTIVITY</legend>
      <div className="arc-gh-header">
        <h2><strong>{total}</strong> contributions in this snapshot</h2>
        <a href={`${profile.github}?tab=overview`} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="arc-gh-calendar" role="img" aria-label={`GitHub calendar, ${formatDate(githubActivity.start)} to ${formatDate(githubActivity.end)}. ${total} contributions across ${activeDays} active days. Exact counts are listed in Daily activity.`}>
        <CalendarHalf firstWeek={0} weeks={firstHalf} />
        <CalendarHalf firstWeek={firstHalf} weeks={totalWeeks - firstHalf} />
      </div>
      <div className="arc-gh-caption">
        <span>{formatDate(githubActivity.start)} — {formatDate(githubActivity.end)}</span>
        <span className="arc-gh-legend" aria-label="Contribution intensity from less to more">
          Less {colors.map((_, level) => <span key={level} className="arc-gh-cell" data-level={level} aria-hidden="true" />)} More
        </span>
      </div>
      <details className="arc-gh-daily">
        <summary>Daily activity · {activeDays} active days</summary>
        <ul className="arc-gh-date-list">
          {githubActivity.days.map(([date, count]) => (
            <li key={date}><time dateTime={date}>{formatDate(date)}</time><strong>{count} {count === 1 ? 'contribution' : 'contributions'}</strong></li>
          ))}
        </ul>
        <p>Public profile snapshot from {formatDate(githubActivity.end)}. All other displayed dates have zero contributions.</p>
      </details>
    </fieldset>
  );
}
