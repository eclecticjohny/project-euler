import React from 'react';

export const Nine = () => {
  // Problem 9
  //  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
  // a² + b² = c²
  // For example, 3² + 4² = 9 + 16 = 25 = 5².
  // There exists exactly one Pythagorean triplet for which a + b + c = 1000.
  // Find the product abc.

  const solutionNine = () => {
    const pythagoreanTriplet = (num: number) => {
      let triplets: number[][] = [];
      for (let a = 1; a < num - 1; a++) {
        for (let b = a; b < num; b++) {
          const c = Math.sqrt(a * a + b * b);
          if (c % 1 === 0) {
            triplets.push([a, b, c]);
          }
        }
      }
      return triplets;
    };

    const seedNumber = 500;
    const targetNumber = 1000;
    const tripletsFromSeed = pythagoreanTriplet(seedNumber);
    for (let index = 0; index < tripletsFromSeed.length; index++) {
      if (tripletsFromSeed[index].reduce((a, b) => a + b, 0) === targetNumber) {
        return tripletsFromSeed[index].reduce((a, b) => a * b, 1);
      }
    }
  };

  return (
    <div>
      Solution Nine: <span className="Solutions">{solutionNine()}</span>
    </div>
  );
};
