import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const TourFaq = () => {
    const [isPanel1Open, setIsPanel1Open] = useState(false);
    const [isPanel2Open, setIsPanel2Open] = useState(false);
    const [isPanel3Open, setIsPanel3Open] = useState(false);
    const [isPanel4Open, setIsPanel4Open] = useState(false);
    const [isPanel5Open, setIsPanel5Open] = useState(false);


    const handleAccordionChange = (panel) => (event, isExpanded) => {
        switch (panel) {
            case 'panel1':
                setIsPanel1Open(isExpanded);
                break;
            case 'panel2':
                setIsPanel2Open(isExpanded);
                break;
            case 'panel3':
                setIsPanel3Open(isExpanded);
                break;
            case 'panel4':
                setIsPanel4Open(isExpanded);
                break;
            case 'panel5':
                setIsPanel5Open(isExpanded);
                break;
            default:
                break;
        }
    };


    return (
        <div className="container">
            <div className="row">
                <div className='col-lg-10 offset-lg-1 faqs' data-aos="zoom-in-up">
                    <Accordion expanded={isPanel1Open} onChange={handleAccordionChange('panel1')} sx={isPanel1Open ? { backgroundColor: '#F2F4F6' } : {}}>
                        <AccordionSummary
                            expandIcon={isPanel1Open ? <ImCross /> : <FaPlus />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <div className='faq-head'>
                                <h2>01</h2>
                                <h4>How do I make a reservation on your website</h4>

                            </div>
                        </AccordionSummary>

                        <AccordionDetails>
                            <div className='faq-detail'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={isPanel2Open} onChange={handleAccordionChange('panel2')} sx={isPanel2Open ? { backgroundColor: '#F2F4F6' } : {}}>
                        <AccordionSummary
                            expandIcon={isPanel2Open ? <ImCross /> : <FaPlus />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <div className='faq-head'>
                                <h2>02</h2>
                                <h4>What documents do I need for my trip, and how do I obtain them?</h4>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='faq-detail'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={isPanel3Open} onChange={handleAccordionChange('panel3')} sx={isPanel3Open ? { backgroundColor: '#F2F4F6' } : {}}>
                        <AccordionSummary
                            expandIcon={isPanel3Open ? <ImCross /> : <FaPlus />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <div className='faq-head'>
                                <h2>03</h2>
                                <h4>In the event that I need to modify or cancel my reservation, what are
                                    the policies in place?</h4>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='faq-detail'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={isPanel4Open} onChange={handleAccordionChange('panel4')} sx={isPanel4Open ? { backgroundColor: '#F2F4F6' } : {}}>
                        <AccordionSummary
                            expandIcon={isPanel4Open ? <ImCross /> : <FaPlus />}
                            aria-controls="panel4-content"
                            id="panel4-header"
                        >
                            <div className='faq-head'>
                                <h2>04</h2>
                                <h4>Can you specify the types of credit/debit cards, digital wallets, or
                                    other online payment methods accepted?</h4>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='faq-detail'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={isPanel5Open} onChange={handleAccordionChange('panel5')} sx={isPanel5Open ? { backgroundColor: '#F2F4F6' } : {}}>
                        <AccordionSummary
                            expandIcon={isPanel5Open ? <ImCross /> : <FaPlus />}
                            aria-controls="panel5-content"
                            id="panel5-header"
                        >
                            <div className='faq-head'>
                                <h2>05</h2>
                                <h4>What are the working hours, and what can I expect in terms of
                                    response times?</h4>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='faq-detail'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </p>
                            </div>
                        </AccordionDetails>
                    </Accordion>







                </div>
            </div>
        </div>
    );
};

export default TourFaq;
