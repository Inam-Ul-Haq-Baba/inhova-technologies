
export default function MissionVision() {

    const content = [
        {
            id: 1,
            number: "01",
            title: "Our Mission",
            subtitle: "What Drives Us",
            description:
                "Our mission is to transform ideas into meaningful digital solutions through thoughtful engineering, creativity and modern technology. We strive to build reliable, user-focused software that addresses real-world challenges and creates value."
        },
        {
            id: 2,
            number: "02",
            title: "Our Vision",
            subtitle: "Where We Aspire to Be",
            description:
                "Our vision is to become a trusted technology partner known for innovation, quality and meaningful digital experiences. We aspire to contribute to a future where technology makes businesses smarter, processes simpler and possibilities greater."
        }
    ];

    return (
        <section className="bg-white px-6 py-20 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="max-w-2xl mb-12">

                    <p className="inline-block text-xs font-semibold tracking-wide text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-5">
                        03 / OUR DIRECTION
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 mb-5">
                        Driven by Purpose. Guided by Vision.
                    </h2>

                    <p className="text-sm md:text-base leading-7 text-gray-600">
                        Our mission and vision shape the way we approach
                        technology, solve problems and build meaningful
                        digital solutions.
                    </p>

                </div>

                {/* Mission & Vision Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                    {content.map((item) => (

                        <div
                            key={item.id}
                            className="relative overflow-hidden bg-blue-50 border rounded-2xl p-8 md:p-10"
                        >

                            <span className="absolute top-5 right-7 text-6xl font-bold text-slate-950/20">
                                {item.number}
                            </span>

                            <div className="relative z-10">

                                <p className="text-sm font-medium text-blue-600 mb-3">
                                    {item.subtitle}
                                </p>

                                <h3 className="text-2xl md:text-3xl font-semibold text-slate-950 mb-5">
                                    {item.title}
                                </h3>

                                <p className="text-sm md:text-base leading-8 text-gray-600">
                                    {item.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}
