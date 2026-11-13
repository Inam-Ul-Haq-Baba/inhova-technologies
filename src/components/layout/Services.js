import ServicesHero from "./services/ServicesHero";
import ServicesDetails from "./services/ServiceDetails";
import ServiceProcess from "./services/ServiceProcess";
import ServicesCTA from "./services/ServicesCTA";

export default function Services({ navigateToSection, activeServiceId }) {
    return (
        <>
            <ServicesHero navigateToSection={navigateToSection}/>
            <ServicesDetails activeServiceId={activeServiceId}/>
            <ServiceProcess />
            <ServicesCTA navigateToSection={navigateToSection} />
            
        </>
    );
}
