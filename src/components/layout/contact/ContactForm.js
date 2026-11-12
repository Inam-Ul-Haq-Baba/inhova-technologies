
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setIsSending(true);
        setStatus({ type: "", message: "" });

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus({
                type: "success",
                message: "Your message has been sent successfully! We'll get back to you soon."
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

        } catch (error) {
            console.error("EmailJS Error:", error);

            setStatus({
                type: "error",
                message: "Something went wrong. Please try again later."
            });

        } finally {
            setIsSending(false);
        }
    }

    return (
        <div className="bg-white rounded-2xl border border-blue-300 my-2 mx-2 p-7 md:p-9 w-full">

            <p className="text-xs font-semibold tracking-wide text-blue-600 mb-4">
                SEND US A MESSAGE
            </p>

            <h2 className="text-xl lg:text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
                Tell Us About Your Project.
            </h2>

            <p className="text-sm leading-7 text-gray-600 mb-8">
                Fill out the form below and we'll get back to you
                as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name and Email */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                            Your Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                            className="w-full border border-[#DCE5F2] rounded-lg px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#0068EC] focus:ring-2 focus:ring-[#0068EC]/10 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="w-full border border-[#DCE5F2] rounded-lg px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#0068EC] focus:ring-2 focus:ring-[#0068EC]/10 transition"
                        />
                    </div>

                </div>

                {/* Subject */}
                <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                        Subject
                    </label>

                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        required
                        className="w-full border border-[#DCE5F2] rounded-lg px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#0068EC] focus:ring-2 focus:ring-[#0068EC]/10 transition"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                        Your Message
                    </label>

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or enquiry..."
                        rows="5"
                        required
                        className="w-full border border-[#DCE5F2] rounded-lg px-4 py-3 text-sm text-slate-700 outline-none resize-none focus:border-[#0068EC] focus:ring-2 focus:ring-[#0068EC]/10 transition"
                    />
                </div>

                {/* Status Message */}
                {status.message && (
                    <p
                        role="status"
                        aria-live="polite"
                        className={`text-sm p-3 rounded-lg ${
                            status.type === "success"
                                ? "bg-green-50 text-green-700"
                                : "bg-red-50 text-red-700"
                        }`}
                    >
                        {status.message}
                    </p>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-blue-600 hover:bg-blue-800 disabled:bg-blue-400 text-white text-sm font-medium px-7 py-3.5 rounded-lg transition duration-300"
                >
                    {isSending ? "Sending Message..." : "Send Message"}

                    {!isSending && <span className="text-lg">→</span>}
                </button>

            </form>

        </div>
    );
}
