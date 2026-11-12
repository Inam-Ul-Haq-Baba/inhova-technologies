import React from 'react';

export default function Expertise() {

    const services = [
        {
            id: 1,
            title: "Software Development",
            description: "Custom software and full-stack solutions.",
            icon: "⌘"
        },
        {
            id: 2,
            title: "Web & Mobile",
            description: "Modern websites and applications.",
            icon: "▣"
        },
        {
            id: 3,
            title: "UI/UX Design",
            description: "Intuitive and engaging experiences.",
            icon: "◎"
        },
        {
            id: 4,
            title: "AI Solutions",
            description: "Practical intelligent technologies.",
            icon: "✳"
        }
    ];

    return (
        <section className="bg-blue-100 my-3 px-6 py-16 md:px-12 lg:px-16 rounded-lg">

            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}

                <p className="text-sm text-blue-600 mb-2">
                    01 / OUR EXPERTISE
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-[#081327] mb-1">
                    Technology That Moves Ideas Forward.
                </h2>

                <p className="text-sm text-[#64748B] mb-6">
                    Combining engineering, creativity and technology
                    to create meaningful digital solutions.
                </p>


                {/* Service Cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                    {services.map((service) => (

                        <div key={service.id} className="bg-white border border-[#E2EAF7] rounded-xl p-4 hover:shadow-md transition duration-300" >

                            {/* Icon */}

                            <div className="text-xl text-[#0068EC] mb-3"> {service.icon} </div>

                            {/* Title */}

                            <h3 className="text-sm sm:text-xl font-semibold text-black mb-2"> {service.title} </h3>

                            {/* Description */}

                            <p className="text-xs text-gray-600 mb-2"> {service.description} </p>

                            {/* Link */}

                            <a href="/services" className="text-sm text-[#0068EC] hover:text-[#0054C7] transition" >
                                Learn more ↗
                            </a>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}


