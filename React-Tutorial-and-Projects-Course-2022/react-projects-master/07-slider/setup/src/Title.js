import React from 'react'

function Title({ title }) {
  return (
    <div className='title'>
      <h2>
        <span>/</span>{title}
      </h2>
    </div>
  );
}

export default Title