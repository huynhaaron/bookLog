import React from 'react';


const ErrorList = ({ errors }) => {
  if (errors.length === 0) return null;
  const errorItems = errors.map(error => <li key={ error }>{ error }</li>)

  return (
    <div className="alert">
      <ul className="error-list">
        { errorItems }
      </ul>
    </div>
  )
};

export default ErrorList;
