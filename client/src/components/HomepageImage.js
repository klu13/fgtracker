import React from 'react';

function HomepageImage() {
  const url = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-1-1596825535.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*';
  return (
    <img src={url} style={{width: 650}} alt='Fall Guys Wave' />
  );
}

export default HomepageImage;