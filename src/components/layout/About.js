
import AboutHero from "./about/AboutHero";
import MissionVision from "./about/MissionVision";
import CoreValues from "./about/CoreValues";
import AboutCTA from "./about/AboutCTA";
import WhatWeDo from "./about/WhatWeDo";

export default function About({navigateToSection}) {

    return (
        <>
            <AboutHero />

            <WhatWeDo />

            <MissionVision />

            <CoreValues />

            <AboutCTA navigateToSection={navigateToSection} />
        </>
    );

}
