import React from 'react';

function App() {
  let a: string = 'Hello';
  const num: number = 1;

  const sayHello = (id: number): string => {
    return `Redux ${id}`;
  }

  const walkAround = (name: string, address: number): void => {
    console.log(`${name} is walking around ${address}`);
  }

  const gettingHome = (): string | number => {
    return 1;
  }

  return (
    <>
      <h1> Billing {a} - {num} </h1>
      <h1> {sayHello(1)} </h1>
      <h2> {walkAround("Juan", 321)} </h2>
    </>
  );
}

export default App;
