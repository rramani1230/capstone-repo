import React from 'react';

const Breadcrumbs = ({ paths }) => {
  return (
    <nav className="breadcrumbs">
      <ul>
        {paths.map((path, index) => (
          <li key={index}>
            {index !== 0 && <span> {'>'} </span>}
            <span>{path.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
