

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TourFaq from './TourFaq';
import "./Header.css"
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
const Faq = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <>
    <section className='faq-section'>

      <div className="container">
        <div className='recommend-head'>
          <h2>Frequently Asked Questions</h2>
          <p>You need to come at least once in your life</p>
        </div>
        <div className="row">

          <Box sx={{ width: '100%' }}>
            <div  className="tab-parent">
            <Box sx={{ width: '50%' }} className="tab-child">
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

              <Tab label="Tours Booking" {...a11yProps(0)} />
                <Tab label="Activities" {...a11yProps(1)} />
                <Tab label="Destinations" {...a11yProps(2)} />
                <Tab label="Hotels Booking" {...a11yProps(3)} />
                <Tab label="Rental Car" {...a11yProps(4)} />
                <Tab label="Property" {...a11yProps(5)} />
                <Tab label="Tickets Booking" {...a11yProps(6)} />

              </Tabs>
            </Box>
            </div>
            <CustomTabPanel value={value} index={0}>
              <TourFaq />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <TourFaq />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <TourFaq />
            </CustomTabPanel>
          </Box>

        </div>
      </div>


    </section>

    </>



  )
}

export default Faq



