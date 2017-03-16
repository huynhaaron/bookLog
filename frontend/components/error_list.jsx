import React from 'react';


const ErrorList = ({ errors }) => {
  console.log(errors);
  if (errors.length === 0) return null;

  const errorItems = errors.map((error, idx) => <li key={ idx }>{ error }</li>);

  return (
    <div >
      <ul>
        { errorItems }
      </ul>
    </div>
  )
};

export default ErrorList;
