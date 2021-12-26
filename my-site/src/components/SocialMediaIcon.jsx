import React from 'react'

function SocialMediaIcon({ mediaName, title, link }) {
  return (
    <a href={ link } className="button" id={ mediaName } target="_blank" rel="noreferrer">
      <div className="icon">
        <i className={`fa fa-${mediaName}`}></i>
      </div>
      <span >{title}</span>
    </a>
  );
}

export default SocialMediaIcon;
