import Logo from "../../../assets/images/Logo.png";

export default function AboutHero() {

    const highlights = [
        {
            id: 1,
            icon: "✦",
            title: "Ideas",
            description: "Turning concepts into possibilities."
        },
        {
            id: 2,
            icon: "</>",
            title: "Technology",
            description: "Building practical digital solutions."
        },
        {
            id: 3,
            icon: "↗",
            title: "Innovation",
            description: "Moving possibilities forward."
        }
    ];

    return (

        <section className="bg-white px-6 py-16 md:px-12 lg:px-16">

            <div className="max-w-7xl mx-auto">

                {/* Main Introduction */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}

                    <div>

                        <p className="text-sm font-medium text-blue-600 mb-4">
                            01 / WHO WE ARE
                        </p>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-950 leading-tight mb-4">
                            We Turn Ideas Into Digital Possibilities.
                        </h1>

                        <h2 className="text-lg md:text-xl font-medium text-blue-600 mb-5">
                            Technology. Creativity. Engineering.
                        </h2>

                        <p className="text-sm md:text-base leading-7 text-[#64748B] mb-4">
                            Inhova Technologies is an emerging software
                            development company focused on transforming
                            ideas into meaningful digital solutions.
                            We bring together technology, creativity
                            and engineering to build software,
                            applications and digital experiences.
                        </p>

                        <p className="text-sm md:text-base leading-7 text-[#64748B] mb-7">
                            Our focus is simple: understand challenges,
                            develop thoughtful solutions and create
                            technology that makes a difference.
                        </p>

                        <a
                            href="#whatwedo"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-800 text-white text-sm font-medium px-6 py-3 rounded-lg transition duration-300"
                        >
                            Explore Our Expertise
                            <span>→</span>
                        </a>

                    </div>


                    {/* Right Visual */}

                    <div className="flex justify-center items-center">
                        <div className="w-full max-w-md aspect-square rounded-3xl bg-[#F0F5FF] flex items-center justify-center overflow-hidden relative">

                            {/* Decorative Circles */}
                            <div className="absolute w-64 h-64 rounded-full border border-blue-800/20"></div>
                            <div className="absolute w-48 h-48 rounded-full border border-blue-800/20"></div>
                            <div className="absolute w-32 h-32 rounded-full bg-blue-800/10"></div>

                            {/* Central Branding Symbol */}
                            <img src={Logo} alt="" />

                        </div>
                    </div>

                </div>


                {/* What Defines Inhova */}

                <div className="mt-16 bg-[#F0F5FF] rounded-2xl p-6 md:p-8">

                    <h2 className="text-xl font-semibold text-slate-950 mb-6">What Defines Inhova </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                        {highlights.map((item) => (

                            <div
                                key={item.id}
                                className="flex flex-col gap-2"
                            >

                                <div className="text-2xl font-semibold text-blue-600">
                                    {item.icon}
                                </div>

                                <h3 className="text-base font-semibold text-slate-950">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600">
                                    {item.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );

}
