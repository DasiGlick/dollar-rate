import * as React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getLast } from '../service';
import { getAverage3Averages } from './approximateForecast';

let forecasts = [];
let difference = [];
let averageDifference = [];
let matrixPartC = [];
let iterator = 2;
let sum = 0;

export async function updateArrays() {
    let forecast = getAverage3Averages();
    forecasts.push(forecast);
    let really = getLast().average;
    difference.push(really-forecast);
}

function createAverageDifferenceLine() {
    difference.forEach(function() {
        sum = difference[iterator] + difference[iterator - 1] + difference[iterator -2];
        averageDifference.push(sum / 3);
        iterator++;
    });
    averageDifference.unshift(averageDifference.shift(0), averageDifference.shift(0));
}

function createMatrix() {
    createAverageDifferenceLine();
    difference.forEach(function(d) {
        averageDifference.forEach(function(a) {
            matrixPartC.push([d, a]);
        });
    });
}

function multiplicationMatrices() {
    createMatrix();
    const matrixA = math.matrix(forecasts);
    const matrixB = math.matrix(matrixPartC);
    const matrixAB = math.multiply(matrixA, matrixB);
    return matrixAB;
}

function showTable() {
    const rows = multiplicationMatrices();

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': {border: 0} }}
                        >
                            <TableCell align="center">{row[0]}</TableCell>
                            <TableCell align="center">{row[1]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default function PartC() {
    
    return (
        <div>
            <Button variant="outlined" onClick={showTable()} className="show">show</Button>
        </div>
    );
}