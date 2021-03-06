import React from 'react';

export default function SingleRessource(props) {
  const { url, title } = props;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  );
}
