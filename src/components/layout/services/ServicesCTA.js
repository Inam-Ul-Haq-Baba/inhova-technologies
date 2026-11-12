export default function ServicesCTA() {
    return (
        <section className="bg-white px-6 py-16 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">

                <div className="relative overflow-hidden bg-[#081327] rounded-3xl px-7 py-14 md:px-14 md:py-16">

                    {/* Decorative Elements */}
                    <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#0068EC]/20 blur-3xl"></div>

                    <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-[#0068EC]/10 blur-3xl"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto text-center">

                        <p className="inline-block text-xs font-semibold tracking-wide text-[#60A5FA] bg-[#0068EC]/20 px-4 py-2 rounded-full mb-6">
                            LET'S BUILD SOMETHING
                        </p>

                        <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-6">
                            Have an Idea?
                            <span className="text-blue-300">
                                {" "}Let's Make It Happen.
                            </span>
                        </h2>

                        <p className="text-sm md:text-base leading-7 text-slate-300 max-w-2xl mx-auto mb-9">
                            Whether you're starting with an idea or looking
                            to improve an existing solution, we're ready
                            to explore the possibilities with you.
                            Let's create something meaningful together.
                        </p>

                        <a
                            href="mailto:info@inhova.in"
                            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-800 text-white text-sm font-medium px-7 py-3.5 rounded-lg transition duration-300"
                        >
                            Discuss Your Project
                            <span className="text-lg">→</span>
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}
