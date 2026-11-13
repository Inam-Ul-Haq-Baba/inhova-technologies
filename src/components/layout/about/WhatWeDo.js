
export default function WhatWeDo() {

    const services = [
        {
            id: 1,
            icon: "</>",
            title: "Software Development",
            description:
                "We develop custom software solutions designed to address business challenges, improve efficiency and support growth."
        },
        {
            id: 2,
            icon: "▣",
            title: "Web & Mobile Applications",
            description:
                "We build responsive websites and mobile applications that deliver smooth, accessible and engaging user experiences."
        },
        {
            id: 3,
            icon: "◎",
            title: "UI/UX Design",
            description:
                "We create intuitive and visually appealing interfaces focused on usability, accessibility and user satisfaction."
        },
        {
            id: 4,
            icon: "✳",
            title: "AI Solutions",
            description:
                "We explore practical AI-powered solutions that help automate processes, simplify tasks and solve real-world problems."
        }
    ];

    return (
        <section id="whatwedo" className="bg-blue-100 rounded-lg mx-4 md:mx-6 px-6 py-20 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="max-w-2xl mb-12">

                    <p className="inline-block text-xs font-semibold tracking-wide text-blue-600 bg-white px-3 py-1 rounded-full mb-5">
                        02 / WHAT WE DO
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 mb-5">
                        Our Expertise
                    </h2>

                    <p className="text-sm md:text-base leading-7 text-gray-600">
                        We bring together technology, creativity and
                        engineering to deliver digital solutions that
                        help turn ideas into reality.
                    </p>

                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {services.map((service) => (

                        <div
                            key={service.id}
                            className="bg-white p-7 rounded-2xl border border-[#E5EAF3] hover:border-[#0068EC]/40 hover:shadow-lg transition duration-300"
                        >

                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-200 text-blue-600 text-2xl font-semibold mb-6">
                                {service.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-slate-950 mb-3">
                                {service.title}
                            </h3>

                            <p className="text-sm leading-7 text-gray-600">
                                {service.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}
