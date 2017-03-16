import React from 'react';


const ErrorList = ({ errors }) => {
  if (errors.length === 0) return null;

  const errorItems = errors.map((error, idx) => <li key={ idx }>{ error }</li>);

  return (
    <div >
      <ul className="alert">
        <li className="alert-text">{ errorItems }</li>
      </ul>
    </div>
  )
};

export default ErrorList;
