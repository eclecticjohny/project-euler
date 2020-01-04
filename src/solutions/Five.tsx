import React from 'react';

export const Five = () => {
  // Problem 5
  // 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
  // What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

  const solutionFive = () => {
    const oneToTwenty = Array.from({ length: 20 }, (x, i) => i + 1);
    for (let i = 20; i !== 0; i++) {
      if (oneToTwenty.every(num => i % num === 0)) {
        return i;
      }
    }
  };

  return (
    <div>
      Solution Five: <span className="Solutions">{solutionFive()}</span>
    </div>
  );
};
