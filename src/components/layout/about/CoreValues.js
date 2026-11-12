
export default function CoreValues() {

    const values = [
        {
            id: 1,
            number: "01",
            icon: "✦",
            title: "Innovation",
            description:
                "We embrace new ideas, explore emerging technologies and continuously look for better ways to solve problems."
        },
        {
            id: 2,
            number: "02",
            icon: "◇",
            title: "Quality",
            description:
                "We focus on building reliable, efficient and user-friendly solutions with attention to every detail."
        },
        {
            id: 3,
            number: "03",
            icon: "⌘",
            title: "Collaboration",
            description:
                "We believe great solutions come from sharing knowledge, exchanging ideas and working together."
        },
        {
            id: 4,
            number: "04",
            icon: "◎",
            title: "Integrity",
            description:
                "We value honesty, transparency and responsibility in every decision, interaction and project."
        }
    ];

    return (
        <section className="bg-[#F5F8FF] px-6 py-20 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="max-w-2xl mb-12">

                    <p className="inline-block text-xs font-semibold tracking-wide text-blue-600 bg-[#DCEBFF] px-3 py-1 rounded-full mb-5">
                        04 / OUR VALUES
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 mb-5">
                        The Principles Behind Everything We Do.
                    </h2>

                    <p className="text-sm md:text-base leading-7 text-gray-600">
                        Our values shape our culture, guide our decisions
                        and influence how we build relationships and
                        deliver meaningful digital solutions.
                    </p>

                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {values.map((value) => (

                        <div
                            key={value.id}
                            className="bg-white rounded-2xl border border-[#E5EAF3] p-7 hover:-translate-y-1 hover:shadow-lg transition duration-300"
                        >

                            <div className="flex items-center justify-between mb-8">

                                <div className="w-12 h-12 rounded-xl bg-[#EAF2FF] flex items-center justify-center text-2xl text-[#0068EC]">
                                    {value.icon}
                                </div>

                                <span className="text-sm font-semibold text-gray-600">
                                    {value.number}
                                </span>

                            </div>

                            <h3 className="text-xl font-semibold text-slate-950 mb-3">
                                {value.title}
                            </h3>

                            <p className="text-sm leading-7 text-gray-600">
                                {value.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}
