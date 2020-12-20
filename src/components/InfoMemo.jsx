import React from 'react';
import './infomemo.css';

export default function InfoMemo({ memoryList }) {
  return (
    <div className="infomemo">
      {memoryList.map((m) => (
        <CardInfo
          key={m.id}
          title={m.title}
          image={m.image}
          description={m.description}
        />
      ))}
    </div>
  );
}

const CardInfo = ({ title, image, description }) => (
  <div className="cardInfo">
    <div className="cardInfo_header">
      <h3>{title}</h3>
    </div>
    <div className="cardInfo_body">
      <img src={image} alt="inforessource" />
      <p>{description}</p>
    </div>
  </div>
);
