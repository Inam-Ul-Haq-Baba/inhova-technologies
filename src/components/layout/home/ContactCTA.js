
export default function ContactCTA({ navigateToSection }) {

    return (

        <section className="bg-[#F5F8FF] px-6 py-8 md:px-12 lg:px-16">

            <div className="max-w-7xl mx-auto">

                <div className="bg-slate-950 rounded-xl p-6 md:p-8">

                    {/* Label */}
                    <span className="inline-block text-xs text-[#60A5FA] bg-[#102A4C] px-3 py-1 rounded-full mb-4">
                        LET'S CONNECT
                    </span>


                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                        Have an Idea? Let's Build It Together.
                    </h2>


                    {/* Description */}
                    <p className="text-sm text-slate-300 mb-6">
                        Every meaningful digital solution starts somewhere.
                        Let's discuss your ideas and explore what's possible.
                    </p>


                    {/* Contact Button */}
                    <button onClick={() => navigateToSection("contact")} className="flex items-center justify-center gap-2 w-full bg-[#0068EC] hover:bg-[#0054C7] text-white font-medium py-4 rounded-lg transition duration-300" >
                        Get in Touch <span>↗</span> 
                    </button>


                    {/* Email */}
                    <div className="mt-5 flex items-center gap-3 text-sm text-white">
                        <span className="text-blue-600 text-lg">✉</span>
                        <a href="mailto:info@inhova.in" className="hover:bg-blue-800 transition" >info@inhova.in </a>
                    </div>

                </div>

            </div>

        </section>

    );
}
