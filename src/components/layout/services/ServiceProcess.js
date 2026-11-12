
export default function ServiceProcess() {

    const steps = [
        {
            id: 1,
            number: "01",
            icon: "⌕",
            title: "Discover",
            description:
                "We start by understanding your ideas, requirements and business goals to identify the right direction for your project."
        },
        {
            id: 2,
            number: "02",
            icon: "◇",
            title: "Plan",
            description:
                "We define the project scope, select suitable technologies and create a clear roadmap for development."
        },
        {
            id: 3,
            number: "03",
            icon: "</>",
            title: "Develop",
            description:
                "We turn the plan into a working solution through development, testing and continuous improvements."
        },
        {
            id: 4,
            number: "04",
            icon: "↗",
            title: "Deliver",
            description:
                "We finalize the solution, make necessary refinements and prepare it for deployment and use."
        }
    ];

    return (
        <section className="bg-blue-100 rounded-xl mx-4 md:mx-8 px-6 py-20 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="max-w-2xl mx-auto text-center mb-16">

                    <p className="inline-block text-xs md:text-base font-semibold tracking-wide text-blue-600 px-3 py-1 rounded-full mb-5">
                        03 / OUR PROCESS
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 mb-5">
                        From Idea to Implementation.
                    </h2>

                    <p className="text-sm md:text-base leading-7 text-gray-600">
                        Every successful project begins with a clear
                        understanding and follows a thoughtful process
                        from planning to delivery.
                    </p>

                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {steps.map((step) => (

                        <div
                            key={step.id}
                            className="relative bg-white rounded-2xl border border-blue-300 p-7 hover:-translate-y-1 hover:shadow-lg transition duration-300"
                        >

                            {/* Number and Icon */}
                            <div className="flex justify-between items-center mb-8">

                                <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-2xl font-semibold text-[#0068EC]">
                                    {step.icon}
                                </div>

                                <span className="text-4xl font-bold text-slate-950/25">
                                    {step.number}
                                </span>

                            </div>

                            {/* Step Content */}
                            <h3 className="text-xl font-semibold text-slate-950 mb-3">
                                {step.title}
                            </h3>

                            <p className="text-sm leading-7 text-gray-600">
                                {step.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}
