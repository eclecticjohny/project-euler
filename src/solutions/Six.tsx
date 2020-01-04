import React from 'react';

export const Six = () => {
  // Problem 6
  // The sum of the squares of the first ten natural numbers is,
  // 12 ²+ 22² + ... + 102² = 385
  // The square of the sum of the first ten natural numbers is,
  // (1 + 2 + ... + 10)² = 55² = 3025
  // Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
  // Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

  const solutionSix = () => {
    const oneToOneHundred = Array.from({ length: 100 }, (x, i) => i + 1);
    const sumOfSquares = oneToOneHundred.reduce(
      (a, b) => a + Math.pow(b, 2),
      0
    );
    const squareOfSums = Math.pow(
      oneToOneHundred.reduce((a, b) => a + b, 0),
      2
    );
    return squareOfSums - sumOfSquares;
  };

  return (
    <div>
      Solution Six: <span className="Solutions">{solutionSix()}</span>
    </div>
  );
};
