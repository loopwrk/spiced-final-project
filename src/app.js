import React, { useState, useEffect } from "react";
import Sampler from "./sampler";
import MusicPlayers from "./musicplayers";

import * as Tone from "tone";

export default function App() {
    const [showModalValue, setShowModalValue] = useState(false);
    const [showModalTourValue, setShowModalTourValue] = useState(true);
    const [expandIconClass, setExpandIconClass] = useState(
        "open-tour-dates-modal"
    );
    const [showHideTourDates, setShowHideTourDates] = useState(
        "tour-dates-container-default"
    );
    const [bpm, setBpm] = useState();

    const showModal = function() {
        if (showModalValue === false) {
            setShowModalValue(true);
        } else if (showModalValue === true) {
            setShowModalValue(false);
        }
    };

    const showModalTour = function() {
        if (showHideTourDates === "tour-dates-container-default") {
            setShowHideTourDates("tour-dates-container");
        } else if (showHideTourDates === "tour-dates-container") {
            setShowHideTourDates("tour-dates-container-hide");
        } else if (showHideTourDates === "tour-dates-container-hide") {
            setShowHideTourDates("tour-dates-container");
        }

        if (expandIconClass === "open-tour-dates-modal") {
            setExpandIconClass("open-tour-dates-modal-rotate");
        } else if (expandIconClass === "open-tour-dates-modal-rotate") {
            setExpandIconClass("open-tour-dates-modal");
        }
    };

    return (
        <React.Fragment>
            <div id="body-wrapper">
                <header></header>

                {showModalTourValue && (
                    <div className={showHideTourDates}>
                        <p>31 SEPTEMBER</p>
                        <p>Brudenell Social Club</p>
                        <p className="city">Leeds, England</p>
                        <p className="get-tickets">Get Tickets</p>

                        <p>3 OCTOBER</p>
                        <p>The Deaf Institute</p>
                        <p className="city">Manchester, England</p>
                        <p className="get-tickets">Get Tickets</p>

                        <p>11 OCTOBER</p>
                        <p>DIY Spice for London</p>
                        <p className="city">London, England</p>
                        <p className="get-tickets">Get Tickets</p>

                        <p>12 OCTOBER</p>
                        <p>The ShackleWell Arms</p>
                        <p className="city">London, England</p>
                        <p className="get-tickets">Get Tickets</p>

                        <p>13 OCTOBER</p>
                        <p>The Windmill</p>
                        <p className="city">London, England</p>
                        <p className="get-tickets">Get Tickets</p>

                        <p>25 OCTOBER</p>
                        <p>Loophole</p>
                        <p className="city">Berlin, Germany</p>
                        <p className="get-tickets">Get Tickets</p>

                        <p>26 OCTOBER</p>
                        <p>MultiTonal Festival @ Kraftwerk</p>
                        <p className="city">Berlin, Germany</p>
                        <p className="get-tickets">Get Tickets</p>

                        <p>27 OCTOBER</p>
                        <p>ACUD MACHT NEU</p>
                        <p className="city">Berlin, Germany</p>
                        <p className="get-tickets">Get Tickets</p>

                        <p>31 OCTOBER</p>
                        <p>Vega Musikkens Hus</p>
                        <p className="city">Copenhagen, Demark</p>
                        <p className="get-tickets">Get Tickets</p>

                        <p>1 November</p>
                        <p>Underwerket</p>
                        <p className="city">Copenhagen, Demark</p>
                        <p className="get-tickets">Get Tickets</p>

                        <p>4 November</p>
                        <p>The Legends Bar</p>
                        <p className="city">Frederikssund, Denmark</p>
                        <p className="get-tickets">Get Tickets</p>

                        <p>23 November</p>
                        <p>Strange Forms Festival</p>
                        <p className="city">Leeds, England</p>
                        <p className="get-tickets">Get Tickets</p>

                        <p>24 November</p>
                        <p>Strange Forms Festival</p>
                        <p className="city">Leeds, England</p>
                        <p className="get-tickets">Get Tickets</p>
                    </div>
                )}

                <div className="tour-dates">
                    <h2 className="next-gig">NEXT GIG</h2>
                </div>
                <div className="tour-dates2">
                    <h2>SEPT</h2>
                </div>
                <div className="tour-dates3">
                    <h2>31</h2>
                </div>
                <div className="tour-dates-expand">
                    <img
                        className={expandIconClass}
                        onClick={showModalTour}
                        src="/images/expand.png"
                    />
                </div>
                <div className="see-all-dates">
                    <p>SEE ALL GIGS</p>
                </div>

                {showModalValue && (
                    <div className="sampler-container">
                        <img
                            className="close-modal"
                            onClick={showModal}
                            src="/images/close.png"
                        />
                        <Sampler />
                    </div>
                )}

                <div className="sampler-opener" onClick={showModal}>
                    <img
                        className="open-modal"
                        onClick={showModal}
                        src="/images/expand.png"
                    />
                </div>
                <div className="sampler-opener-text">
                    <h2>MAKE YOUR OWN BEATS</h2>
                </div>

                <div className="logo-container">
                    <img className="logo" src="/images/logo.png" />
                </div>

                <div className="video-wrapper">
                    <iframe
                        className="video"
                        src="https://www.youtube.com/embed/vFNbj8KI0Rc?start=17&controls=0&showinfo=0&loop=1&modestbranding=1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                    ></iframe>
                </div>

                <MusicPlayers />
            </div>
        </React.Fragment>
    );
}
