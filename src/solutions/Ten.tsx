import React from 'react';

export const Ten = () => {
  // Problem 10
  // The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
  // Find the sum of all the primes below two million.

  const solutionTen = () => {
    const primesLimitBools = (value: number) => {
      let primes: boolean[] = [];
      for (let index = 2; index < value; index++) {
        primes[index] = true;
      }
      const limit = Math.sqrt(value);
      for (let outer = 2; outer < limit; outer++) {
        if (primes[outer] === true) {
          for (let inner = outer * outer; inner < value; inner += outer) {
            primes[inner] = false;
          }
        }
      }
      return primes;
    };
    const upperLimit = 2000000;
    return primesLimitBools(upperLimit).reduce(
      (a, b, i) => (b === true ? a + i : a + 0),
      0
    );
  };

  return (
    <div>
      Solution Ten: <span className="Solutions">{solutionTen()}</span>
    </div>
  );
};
