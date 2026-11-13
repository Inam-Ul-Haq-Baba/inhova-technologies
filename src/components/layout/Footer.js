
import LogoFull from "../../assets/images/Logo-full.png";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Instagram from "../../assets/icons/instagram.svg";

export default function Footer({navigateToSection, setActiveSection, setActiveServiceId }) {

    const exploreLinks = [
        {
            id: 1,
            title: "Home",
            action: () => navigateToSection("home")
        },
        {
            id: 2,
            title: "Services",
            action: () => navigateToSection("services")
        },
        {
            id: 3,
            title: "About Us",
            action: () => navigateToSection("about")
        },
        {
            id: 4,
            title: "Our Work",
            action: () => {
                navigateToSection("home")
                document.getElementById("our-work")?.scrollIntoView({
                    behavior: "smooth"
                });
            }
        },
        {
            id: 5,
            title: "Contact",
            action: () => navigateToSection("contact")
        }
    ];

    const services = [
        { id: 1, title: "Software Development" },
        { id: 2, title: "Web & Mobile Applications" },
        { id: 3, title: "UI/UX Design" },
        { id: 4, title: "AI Solutions" }
    ];

    const socialLinks = [
        {
            id: 1,
            name: "LinkedIn",
            symbol: LinkedIn,
            link: "https://linkedin.com/company/inhova-technologies"
        },
        {
            id: 2,
            name: "Instagram",
            symbol: Instagram,
            link: "#"
        }
    ];

    return (

        <footer className="bg-slate-950 text-white px-6 pt-12 pb-6 md:px-12 lg:px-16">

            <div className="max-w-7xl mx-auto">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">

                    {/* Company Information */}
                    <div>

                        <img src={LogoFull} alt="Inhova Technologies" className="w-60 object-contain mb-4 bg-white rounded-lg" />

                        <p className="text-sm text-slate-300 mb-3">
                            Enhancing Ideas. Engineering the Future.
                        </p>

                        <p className="text-xs leading-6 text-slate-400">
                            Building meaningful digital solutions through
                            creativity, engineering and technology.
                        </p>

                    </div>


                    {/* Explore Links */}

                    <div>

                        <h3 className="text-base font-semibold mb-5">Explore </h3>

                        <ul className="flex flex-col gap-3">

                                {exploreLinks.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            onClick={item.action}
                                            className="text-sm text-slate-300 hover:text-[#0090FB] transition duration-300"
                                        >
                                            {item.title}
                                        </button>
                                    </li>
                                ))}

                        </ul>

                    </div>


                    {/* Services */}

                    <div>

                        <h3 className="text-base font-semibold mb-5">Our Services </h3>

                        <ul className="flex flex-col gap-3">

                            {services.map((service) => (

                                <li key={service.id}>

                                    <button onClick={() => { setActiveServiceId(service.id); setActiveSection("services"); }}
                                        className="text-sm text-slate-300 hover:text-[#0090FB] transition duration-300" >
                                        {service.title}
                                    </button>

                                </li>

                            ))}

                        </ul>

                    </div>


                    {/* Contact and Social Links */}
                    <div>

                        <h3 className="text-base font-semibold mb-5">Get in Touch </h3>

                        <a href="mailto:info@inhova.in" className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#0090FB] transition mb-6" >
                            <span className="text-[#60A5FA] text-lg">✉</span>
                            info@inhova.in
                        </a>


                        <h3 className="text-base font-semibold mb-4">Follow Us</h3>

                        <div className="flex items-center gap-3">

                            {socialLinks.map((social) => (

                                <a
                                    key={social.id}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="transition duration-300 hover:-translate-y-1"
                                >

                                    <img
                                        src={social.symbol}
                                        alt={social.name}
                                        className="w-6 h-6"
                                    />

                                </a>

                            ))}

                        </div>

                    </div>

                </div>


                {/* Bottom Footer */}

                <div className="border-t border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

                    <p className="text-xs text-slate-400 text-center">
                        © {new Date().getFullYear()} Inhova Technologies.
                        All rights reserved.
                    </p>

                    <a href="/privacy" className="text-xs text-slate-400 hover:text-[#0090FB] transition" >
                        Privacy Policy
                    </a>

                </div>

            </div>

        </footer>

    );

}
