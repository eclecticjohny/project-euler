import React from "react";

export const Solutions = () => {
    return (
        <>
            <div>
                Solution One:{" "}
                <span style={solutionOutputStyle}>{solutionOne()}</span>
            </div>
        </>
    );
};

// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const solutionOne = () => {
    const numberToUse = 1000;
    const numberSummer = (num: number) => {
        let multiples: number[] = [];
        for (let i = 0; i < num; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                multiples = [...multiples, i];
            }
        }
        return multiples.reduce((a, b) => a + b, 0);
    };
    return numberSummer(numberToUse);
};

const solutionOutputStyle: React.CSSProperties = {
    color: "red",
    fontWeight: "bold"
};
