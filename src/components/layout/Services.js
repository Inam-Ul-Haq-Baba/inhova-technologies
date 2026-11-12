import ServicesHero from "./services/ServicesHero";
import ServicesDetails from "./services/ServiceDetails";
import ServiceProcess from "./services/ServiceProcess";
import ServicesCTA from "./services/ServicesCTA";

export default function Services() {
    return (
        <>
            <ServicesHero />
            <ServicesDetails />
            <ServiceProcess />
            <ServicesCTA />
            
        </>
    );
}
