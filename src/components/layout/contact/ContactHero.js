
export default function ContactHero() {
    return (
        <section className="bg-blue-50 px-6 py-10 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">

                <div className="max-w-3xl mx-auto text-center">

                    <p className="inline-block text-xs font-semibold tracking-wide text-blue-600 bg-blue-200 px-3 py-1 rounded-full mb-6">
                        01 / GET IN TOUCH
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-950 leading-tight mb-6">
                        Let's Start a
                        <span className="text-blue-600"> Conversation.</span>
                    </h1>

                    <p className="text-sm md:text-base leading-8 text-gray-600 max-w-2xl mx-auto">
                        Have a project in mind, an idea to explore or
                        simply want to know more about what we do?
                        We'd love to hear from you. Get in touch
                        and let's discuss what's possible.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mt-9">

                        <span className="text-sm text-gray-600 bg-white border border-[#E5EAF3] px-4 py-2 rounded-full">
                            <span className="text-blue-600 mr-2">✦</span>
                            Project Enquiries
                        </span>

                        <span className="text-sm text-gray-600 bg-white border border-[#E5EAF3] px-4 py-2 rounded-full">
                            <span className="text-blue-600 mr-2">✦</span>
                            Business Collaborations
                        </span>

                        <span className="text-sm text-gray-600 bg-white border border-[#E5EAF3] px-4 py-2 rounded-full">
                            <span className="text-blue-600 mr-2">✦</span>
                            General Enquiries
                        </span>

                    </div>

                </div>

            </div>
        </section>
    );
}
