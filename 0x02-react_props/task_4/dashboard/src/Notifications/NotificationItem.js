import React from 'react';

export default function NotificationItem({ type, html, value }) {
  return (
    <>
      {value ? (
        <li data-priority={type}>{value}</li>
      ) : (
        <li
          data-priority={type}
          dangerouslySetInnerHTML={{ __html: html }}
        ></li>
      )}
    </>
  );
}
