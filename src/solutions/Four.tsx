import React from "react";

export const Four = () => {
    // Problem 4
    // A palindromic number reads the same both ways.
    // The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
    // Find the largest palindrome made from the product of two 3-digit numbers.

    const solutionFour = () => {
        let palindromes: number[] = [];
        for (let outer = 100; outer <= 999; outer++) {
            for (let inner = 100; inner <= 999; inner++) {
                const product = inner * outer;
                if (
                    product.toString() ===
                    product
                        .toString()
                        .split("")
                        .reverse()
                        .join("")
                ) {
                    palindromes.push(product);
                }
            }
        }

        return Math.max.apply(null, palindromes);
    };

    return (
        <div>
            Solution Four: <span className="Solutions">{solutionFour()}</span>
        </div>
    );
};
