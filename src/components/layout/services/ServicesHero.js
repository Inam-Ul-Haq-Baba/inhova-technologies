import LogoNoTag from "../../../assets/images/Logo-no-tagline.png";

export default function ServicesHero({navigateToSection}) {
    return (
        <section className="bg-blue-50 px-6 py-20 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>

                        <p className="inline-block text-xs font-semibold tracking-wide text-[#0068EC] bg-[#DCEBFF] px-3 py-1 rounded-full mb-6">
                            01 / OUR SERVICES
                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#081327] leading-tight mb-6">
                            Solutions Built Around
                            <span className="text-[#0068EC]"> Your Ideas.</span>
                        </h1>

                        <p className="text-sm md:text-base leading-8 text-[#64748B] mb-8 max-w-xl">
                            From initial concepts to fully developed digital
                            products, we help turn your ideas into practical
                            technology solutions. We combine creativity,
                            engineering and modern technologies to build
                            solutions that matter.
                        </p>

                        <button
                            onClick={()=>navigateToSection("contact")}
                            className="inline-flex items-center gap-3 bg-[#0068EC] hover:bg-[#0054C7] text-white text-sm font-medium px-7 py-3.5 rounded-lg transition duration-300"
                        >
                            Discuss Your Project
                            <span className="text-lg">→</span>
                        </button>

                    </div>

                    {/* Right Visual */}
                    <div className="flex justify-center items-center">

                        <div className="relative w-full max-w-md aspect-square rounded-3xl bg-white border border-[#E5EAF3] flex items-center justify-center overflow-hidden">

                            <div className="w-full max-w-md aspect-square rounded-3xl bg-white flex items-center justify-center overflow-hidden relative">
                            
                                {/* Decorative Circles */}
                                <div className="absolute w-64 h-64 rounded-full border border-blue-800/20"></div>
                                <div className="absolute w-48 h-48 rounded-full border border-blue-800/20"></div>
                                <div className="absolute w-32 h-32 rounded-full bg-blue-800/10"></div>
                            
                                {/* Central Branding Symbol */}
                                <img src={LogoNoTag} alt="" />
                            
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute top-12 right-12 w-14 h-14 bg-[#EAF2FF] rounded-2xl flex items-center justify-center text-[#0068EC] text-2xl font-bold shadow-md">
                                {"</>"}
                            </div>

                            <div className="absolute bottom-14 left-10 w-14 h-14 bg-[#EAF2FF] rounded-2xl flex items-center justify-center text-[#0068EC] text-2xl shadow-md">
                                ✦
                            </div>

                            <div className="absolute bottom-12 right-12 w-10 h-10 bg-[#0068EC] rounded-xl rotate-12 opacity-80"></div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
