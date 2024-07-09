import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BasicLineChart from './linechart';
import BasicTable from './basicTable';
import SelectMonth from './selectMonth';
import ApproximateForecast from './approximateForecast';
import PartC from './partC';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '50%', alignItems: 'center' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Graph" {...a11yProps(0)} />
          <Tab label="Table" {...a11yProps(1)} />
          <Tab label="Select Month" {...a11yProps(2)} />
          <Tab label="Next Month" {...a11yProps(3)} />
          <Tab label="MAtrix Multiplication" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <BasicLineChart />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <BasicTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SelectMonth />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ApproximateForecast />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <PartC />
      </CustomTabPanel>
    </Box>
  );
}
