
export default function ServiceDetails() {

    const services = [
        {
            id: 1,
            number: "01",
            icon: "</>",
            title: "Software Development",
            description:
                "We develop custom software solutions tailored to business requirements. From backend systems to complete applications, we focus on building reliable, scalable and efficient software.",
            offerings: [
                "Custom Software Solutions",
                "Backend Development",
                "Database Design & Integration",
                "API Development & Integration"
            ],
            technologies: ["Java", "Node.js", "Express.js", "Python"]
        },
        {
            id: 2,
            number: "02",
            icon: "▣",
            title: "Web & Mobile Applications",
            description:
                "We build responsive websites and mobile applications that combine modern design with practical functionality, delivering smooth experiences across devices.",
            offerings: [
                "Website Development",
                "Web Application Development",
                "Mobile Application Development",
                "Responsive Web Design"
            ],
            technologies: ["React", "JavaScript", "Tailwind CSS", "Java"]
        },
        {
            id: 3,
            number: "03",
            icon: "◎",
            title: "UI/UX Design",
            description:
                "We design intuitive and visually engaging digital experiences with a focus on usability, accessibility and clear user interactions.",
            offerings: [
                "User Interface Design",
                "User Experience Design",
                "Wireframing & Prototyping",
                "Responsive Design"
            ],
            technologies: ["Figma", "Prototyping", "UI Design"]
        },
        {
            id: 4,
            number: "04",
            icon: "✳",
            title: "AI Solutions",
            description:
                "We explore practical artificial intelligence solutions that help simplify tasks, automate processes and address real-world challenges.",
            offerings: [
                "AI-Powered Applications",
                "Image Recognition",
                "Object Detection",
                "Intelligent Automation"
            ],
            technologies: ["Python", "Machine Learning", "Computer Vision", "YOLO"]
        }
    ];

    return (
        <section className="bg-white px-6 py-20 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="max-w-2xl mb-12">

                    <p className="inline-block text-xs font-semibold tracking-wide text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-5">
                        02 / WHAT WE OFFER
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 mb-5">
                        Technology Solutions for Every Idea.
                    </h2>

                    <p className="text-sm md:text-base leading-7 text-gray-600">
                        We offer a range of digital services designed to
                        help transform concepts into functional,
                        user-friendly and effective solutions.
                    </p>

                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                    {services.map((service) => (

                        <div
                            key={service.id}
                            className="bg-blue-50 border border-blue-100 rounded-2xl p-7 md:p-9 hover:border-blue-600/40 hover:shadow-lg transition duration-300"
                        >

                            {/* Card Header */}
                            <div className="flex justify-between items-center mb-7">

                                <div className="w-14 h-14 flex items-center justify-center bg-gray-200 text-blue-600 text-2xl font-semibold rounded-xl">
                                    {service.icon}
                                </div>

                                <span className="text-4xl font-bold text-slate-950/25">
                                    {service.number}
                                </span>

                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl md:text-2xl font-semibold text-slate-950 mb-4">
                                {service.title}
                            </h3>

                            <p className="text-sm leading-7 text-gray-600 mb-7">
                                {service.description}
                            </p>

                            {/* What We Offer */}
                            <div className="mb-7">

                                <h4 className="text-sm font-semibold text-slate-950 mb-4">
                                    What We Offer
                                </h4>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                                    {service.offerings.map((offering, index) => (

                                        <div
                                            key={index}
                                            className="flex items-start gap-2 text-sm text-gray-600"
                                        >
                                            <span className="text-blue-600 font-bold">
                                                ✓
                                            </span>

                                            <span>{offering}</span>
                                        </div>

                                    ))}

                                </div>

                            </div>

                            {/* Technologies */}
                            <div className="border-t border-[#DCE5F2] pt-5">

                                <h4 className="text-sm font-semibold text-slate-950 mb-3">
                                    Technologies
                                </h4>

                                <div className="flex flex-wrap gap-2">

                                    {service.technologies.map((technology, index) => (

                                        <span
                                            key={index}
                                            className="text-xs font-medium text-blue-600 bg-white border border-[#DCE5F2] px-3 py-2 rounded-lg"
                                        >
                                            {technology}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}
