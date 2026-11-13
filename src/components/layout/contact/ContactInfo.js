import LinkedIn from "../../../assets/icons/linkedin.svg";
import Instagram from "../../../assets/icons/instagram.svg";

export default function ContactInfo() {

    const socialLinks = [
        {
            id: 1,
            name: "LinkedIn",
            icon: LinkedIn,
            url: "https://www.linkedin.com/company/inhova-technologies/"
        },
        {
            id: 2,
            name: "Instagram",
            icon: Instagram,
            url: "https://www.instagram.com/"
        }
    ];

    return (
        <div className="bg-[#081327] mx-2 my-2 rounded-2xl p-7 md:p-9 text-white">

            <p className="text-xs font-semibold tracking-wide text-blue-600 mb-4">
                CONTACT INFORMATION
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Let's Connect.
            </h2>

            <p className="text-sm leading-7 text-slate-300 mb-10">
                Have questions or want to discuss a project?
                Reach out to us through the contact details below.
                We're looking forward to hearing from you.
            </p>

            {/* Email */}
            <div className="flex items-start gap-4 mb-8">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-800/20 flex items-center justify-center text-[#60A5FA] text-xl">
                    ✉
                </div>

                <div>
                    <h3 className="text-sm font-semibold mb-2">
                        Email Address
                    </h3>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=info@inhova.in"
                        className="text-sm text-slate-300 hover:text-[#60A5FA] transition"
                    >
                        info@inhova.in
                    </a>
                </div>

            </div>

            {/* Location */}
            <div className="flex items-start gap-4 mb-10">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-800/20 flex items-center justify-center text-[#60A5FA] text-xl">
                    ⌖
                </div>

                <div>
                    <h3 className="text-sm font-semibold mb-2">
                        Location
                    </h3>

                    <p className="text-sm text-slate-300">
                        India
                    </p>
                </div>

            </div>

            {/* Social Media */}
            <div className="border-t border-slate-700 pt-7">

                <h3 className="text-sm font-semibold mb-5">
                    Follow Us
                </h3>

                <div className="flex items-center gap-4">

                    {socialLinks.map((social) => (

                        <a
                            key={social.id}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="w-11 h-11 rounded-xl bg-blue-800/20 hover:bg-blue-900 flex items-center justify-center transition duration-300"
                        >
                            <img
                                src={social.icon}
                                alt=""
                                className="w-5 h-5"
                            />
                        </a>

                    ))}

                </div>

            </div>

        </div>
    );
}
