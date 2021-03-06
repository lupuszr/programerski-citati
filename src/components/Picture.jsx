import React from 'react'
import './Picture.css'

const Picture = ({ author, imgSrc }) => {
  if (!imgSrc) return ''
  return (
    <div className="thumbnail">
      <h3>{author}</h3>
      <img  src={imgSrc} alt="Loading..."/>
    </div>
  );
}
export default Picture
