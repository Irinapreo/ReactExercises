import React from 'react';

function HelloMessage({name, age, address}) {
  return <div>Hello {name} I am {age} years old and I live in {address}.</div>;
}

export default HelloMessage;
