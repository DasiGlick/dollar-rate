import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getAllData, getAverageByMonth } from '../service';

const months = [];

async function getAllMonths() {
    const data = await getAllData();
    data.foreach(function (month) {
        months.push(month.month);
    });
    return months;
};

const allMonths = getAllMonths();

export default function SelectMonth() {
    const [selectedMonth, setSelectedMonth] = useState();
    const [averagePerMonth, setAveragePerMonth] = useState();

    const handleChange = (event) => {
        setSelectedMonth(event.target.value);
        setAveragePerMonth(getAverageByMonth(selectedMonth));
    };

    return (
        <div>
            <Box sx={{ minWidth: 150 }}>
                <FormControl sx={{ minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-label">choose month</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedMonth}
                        label="choose month"
                        onChange={handleChange}
                    >
                        {allMonths.map((month, index) => {
                            return(
                                <MenuItem value={index}>{month}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Box>
            <p>{averagePerMonth}</p>
        </div>
    );
}
