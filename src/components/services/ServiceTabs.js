import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Electricity from './Electricity';
import Medical from './Medical';
import Airtime from './Airtime';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
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

export default function ServiceTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            {/* <Box sx={{ borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab className="py-2 px-4 border border-blue-500 text-pink-500"  label="Electricity" {...a11yProps(0)} />
                    <Tab  {...a11yProps(0)} label="Electricity" >
                        <button className='py-2 px-4 rounded-md text-white border border-blue-400'>Electricity</button>
                    </Tab>
                    <Tab label="Medicals" {...a11yProps(1)} />
                    <Tab label="Internet" {...a11yProps(2)} />
                    <Tab label="Airtime" {...a11yProps(3)} />
                    <Tab label="Pharmacy" {...a11yProps(4)} />
                    <Tab label="Restaurant" {...a11yProps(5)} />
                </Tabs>
            </Box> */}
            {/* <TabPanel value={value} index={0}>
                <Electricity />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Medical />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Airtime />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Airtime />
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Three
            </TabPanel> */}
        </Box>
    );
}