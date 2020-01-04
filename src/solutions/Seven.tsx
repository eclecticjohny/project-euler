import React from 'react';

export const Seven = () => {
  // Problem 7
  // By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
  // What is the 10 001st prime number?

  const solutionSeven = () => {
    const primeChecker = (num: number) => {
      for (let index = 2; index < num; index++) {
        if (num % index === 0) {
          return null;
        }
      }
      return num > 1;
    };

    const primeCount = 10001;
    for (let index = 2, counter = 0; index !== 0; index++) {
      if (primeChecker(index) !== null) {
        counter++;
      }
      if (counter === primeCount) {
        return index;
      }
    }
  };

  return (
    <div>
      Solution Seven: <span className="Solutions">{solutionSeven()}</span>
    </div>
  );
};
