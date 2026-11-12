
export default function Process() {

    const steps = [
        {
            id: 1,
            number: "01",
            title: "Discover",
            description: "Understand the idea and requirements."
        },
        {
            id: 2,
            number: "02",
            title: "Plan",
            description: "Define the technology and approach."
        },
        {
            id: 3,
            number: "03",
            title: "Build",
            description: "Develop with quality and usability in mind."
        },
        {
            id: 4,
            number: "04",
            title: "Refine",
            description: "Test, improve and prepare for delivery."
        }
    ];

    return (

        <section className="bg-white px-6 py-16 md:px-12 lg:px-16">

            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <p className="text-sm text-blue-600 mb-3">04 / OUR APPROACH </p>

                <h2 className="text-2xl md:text-3xl font-semibold mb-2">From Concept to Creation. </h2>

                <p className="text-sm text-gray-600 mb-6">A thoughtful process behind every digital solution. </p>


                {/* Process Steps */}

                <div className="flex flex-col gap-3">

                    {steps.map((step) => (

                        <div key={step.id} className="flex items-center gap-3" >

                            {/* Step Number */}
                            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#E8F1FF] rounded-xl shrink-0">
                                <span className="text-lg font-medium text-blue-600">{step.number} </span>
                            </div>


                            {/* Step Information */}
                            <div>
                                <h3 className="text-base font-semibold text-black mb-1">{step.title}</h3>
                                <p className="text-xs text-[#64748B]">{step.description}</p>
                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}
