import React from 'react';

export default function PracticalDescription(props) {
  const { title, description, utility, image } = props;
  return (
    <article className="description">
      <img src={image} alt="" className="photoDesc" />
      <h3>{title} </h3>
      <p>{description}</p>
      <h3>Pour quelle utilité ?</h3>
      <p>{utility}</p>
    </article>
  );
}
