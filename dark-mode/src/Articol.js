import React from 'react';

const Articol = ({ title, body }) => {
  return (
    <article>
      <div style={{ position: 'relative', height: 'fit-content' }}>
        <h4>{title}</h4>
        <div className='underline'></div>
      </div>
      <p>{body}</p>
    </article>
  );
};

export default Articol;
