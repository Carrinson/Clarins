import React, { useState, useEffect } from 'react';

function Footer() {
    const [dateTimeLocation, setDateTimeLocation] = useState('');

    useEffect(() => {
        const updateDateTimeLocation = () => {
            const now = new Date();
            const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
            const date = now.toLocaleDateString(undefined, dateOptions);
            const time = now.toLocaleTimeString(undefined, timeOptions);

            // Using navigator.geolocation to get location (if available)
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
                            .then(response => response.json())
                            .then(data => {
                                const location = `${data.city}, ${data.countryName}`;
                                setDateTimeLocation(`${date} | ${time} | ${location}`);
                            })
                            .catch(() => {
                                setDateTimeLocation(`${date} | ${time} | Location Unavailable`);
                            });
                    },
                    () => {
                        setDateTimeLocation(`${date} | ${time} | Location Unavailable`);
                    }
                );
            } else {
                setDateTimeLocation(`${date} | ${time} | Location Not Supported`);
            }
        };

        updateDateTimeLocation(); // Initial update
        const intervalId = setInterval(updateDateTimeLocation, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup interval
    }, []);

    return (
        <>
            <div className="Footer">
                <div className="Maps">
                    <iframe width="900" height="550" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=720&height=350&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20BusinDN13%20Km%2068,%20Rupea%20505500,%20Romaniaess%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"><a href="https://www.gps.ie/collections/drones/">drone quadcopter</a></iframe>
                </div>
                <div className="contact_about">
                    <div className="contact_us">
                        <div className="contact">
                            <h1>Contact Us</h1>
                            <p>
                                Email: Clarins@skincare.com <br />
                                Number: +40387 239 723 <br />
                                Address: DN13 Km 68, Rupea 505500, Romania <br />
                            </p>
                        </div>
                    </div>

                    <div className="about_us">
                        <div className="about">
                            <div className="about-container">
                                <h1>About Us</h1>
                                <p>
                                    At Clarins, we believe that true beauty <br />
                                    comes from embracing the purity of nature. <br />
                                    We're passionate about creating organic skincare <br />
                                    that harmonizes with your skin, <br />
                                    respecting its delicate balance <br /> while enhancing its natural radiance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ticker-container">
                    <div className="ticker-text">
                        {dateTimeLocation}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;