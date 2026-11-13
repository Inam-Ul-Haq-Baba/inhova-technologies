
export default function AboutCTA({ navigateToSection }) {
    return (
        <section className="bg-[#F5F8FF] px-6 py-16 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">

                <div className="relative overflow-hidden bg-[#081327] rounded-3xl px-7 py-14 md:px-14 md:py-16">

                    {/* Decorative Elements */}
                    <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#0068EC]/20 blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-[#0068EC]/10 blur-3xl"></div>

                    <div className="relative z-10 max-w-3xl mx-auto text-center">

                        <p className="inline-block text-xs font-semibold tracking-wide text-[#60A5FA] bg-[#0068EC]/20 px-4 py-2 rounded-full mb-6">
                            LET'S WORK TOGETHER
                        </p>

                        <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-6">
                            Let's Create Something
                            <span className="text-blue-300"> Meaningful.</span>
                        </h2>

                        <p className="text-sm md:text-base leading-7 text-slate-300 max-w-2xl mx-auto mb-9">
                            Have an idea, a challenge or a project in mind?
                            We'd love to hear from you. Let's explore how
                            technology can help bring your vision to life.
                        </p>

                        <button onClick={()=> navigateToSection("contact") }
                            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-800 text-white text-sm font-medium px-7 py-3.5 rounded-lg transition duration-300"
                        >
                            Get in Touch
                            <span className="text-lg">→</span>
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}
