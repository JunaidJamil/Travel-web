import React, { useRef } from 'react';
import { useCountUp } from 'react-countup';
const ClientCount = () => {
    const happyClientsRef = useRef(null);
    const destinationsRef = useRef(null);
    const globalBranchRef = useRef(null);
    const campaignsRef = useRef(null);

    const formatter = (value) => {
        if (value >= 1000) {
            return `${(value / 1000).toFixed(1)}k`;
        }
        return value;
    };

    useCountUp({ ref: happyClientsRef, start: 0, end: 168000, duration: 5, formatter });
    useCountUp({ ref: destinationsRef, start: 0, end: 45000, duration: 5, formatter });
    useCountUp({ ref: globalBranchRef, start: 0, end: 49, duration: 5, formatter });
    useCountUp({ ref: campaignsRef, start: 0, end: 26000, duration: 5, formatter });

    return (
        <>
            <section className='client-counting'>
                <div className="container">
                    <div className="main-counting">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className='clients'>
                                            <div className='happy-client'>
                                                <h3 ref={happyClientsRef}>0</h3>
                                                <p>Happy Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className='clients'>
                                            <div className='happy-client'>
                                                <h3 ref={destinationsRef}>0</h3>
                                                <p>Destinations</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className='clients'>
                                            <div className='happy-client'>
                                                <h3 ref={globalBranchRef}>0</h3>
                                                <p>Global Branch</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className='clients'>
                                            <div className='campaigns'>
                                                <h3 ref={campaignsRef}>0</h3>
                                                <p>Campaigns</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClientCount