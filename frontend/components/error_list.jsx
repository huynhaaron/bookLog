import React from 'react';


const ErrorList = ({ errors }) => {
  if (errors.length === 0) return null;

  const errorItems = errors.map((error, idx) => <li className="alert-text" key={ idx }>{ error }</li>);

  return (
    <div >
      <ul className="alert">
        { errorItems }
      </ul>
    </div>
  )
};

export default ErrorList;
