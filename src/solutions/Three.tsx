import React from "react";

export const Three = () => {
    // Problem 3
    // The prime factors of 13195 are 5, 7, 13 and 29.
    // What is the largest prime factor of the number 600851475143?

    const solutionThree = () => {
        const sampleNumber = 600851475143;
        const findPrimeFactors = (num: number) => {
            let primeFactors: number[] = [];
            while (num % 2 === 0) {
                primeFactors = [2];
                num = num / 2;
            }
            let sqrtNum = Math.sqrt(num);
            for (let i = 3; i <= sqrtNum; i++) {
                if (num % i === 0) {
                    primeFactors.push(i);
                    num = num / i;
                }
            }
            if (num > 2) {
                primeFactors.push(num);
            }
            return primeFactors;
        };
        return Math.max.apply(null, findPrimeFactors(sampleNumber));
    };

    return (
        <div>
            Solution Three: <span className="Solutions">{solutionThree()}</span>
        </div>
    );
};
