import * as React from 'react';
import { getLast, getLast3 } from '../service';

const last = getLast().month;
const last3 = getLast3();
let sum = 0;
const finalAverage = getAverage3Averages();

export function getAverage3Averages() {
    // last3.forEach(function (last) {
    //     sum += last.average;
    // });
    return sum/3;
}

export default function ApproximateForecast() {

    return (
        <div>
            <p>The next month: {last}</p>
            <p>Approximate forecast for this month: {finalAverage}</p>
        </div>
    );
}
