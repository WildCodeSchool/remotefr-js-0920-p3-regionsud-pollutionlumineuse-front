import React from 'react';

export default function SingleRessource(props) {
  const { url, title } = props;
  return <a href={url}>{title}</a>;
}
