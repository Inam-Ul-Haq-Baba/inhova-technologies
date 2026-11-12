
import SmartLawn from "../../../assets/images/projects/smart-lawn.jpeg";
import JustType from "../../../assets/images/projects/justtype.png";
import Blogsy from "../../../assets/images/projects/blogsy.png";
import lucidexam from "../../../assets/images/projects/lucidexam.png";
import InamPortfolio from "../../../assets/images/projects/InamPortfolio.png";

export default function WorkPreview() {

    const projects = [
        {
            id: 1,
            title: "Smart Lawn Maintenance",
            image: SmartLawn,
            technologies: "YOLOv9 · Android · Java . Python . FAST API",
            category: "Academic / Personal Project"
        },
        {
            id: 2,
            title: "JustType",
            image: JustType,
            technologies: "HTML . JavaScript · Tailwind CSS . jQuery",
            category: "Personal Project"
        },
        {
            id: 3,
            title: "Lucid Exam",
            image: lucidexam,
            technologies: "HTML . JavaScript . Python . Flask . PostgreSQL . Razorpay",
            category: "Personal Project"
        },
        {
            id: 4,
            title: "Blogsy",
            image: Blogsy,
            technologies: "HTML . Tailwind CSS . Node.js · Express · EJS . PostgreSQL",
            category: "Personal Project"
        },
        {
            id: 5,
            title: "Personal Portfolio",
            image: InamPortfolio,
            technologies: "React, Tailwind CSS",
            category: "Portfolio"
        }
    ];

    return (

        <section className="bg-[#F5F8FF] px-6 py-16 md:px-12 lg:px-16">

            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}

                <p className="text-sm text-[#0068EC] mb-2">
                    03 / SELECTED WORK
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-[#081327] mb-2">
                    Ideas Brought to Life.
                </h2>

                <p className="text-sm text-[#64748B] mb-6">
                    A selection of projects and digital solutions
                    that demonstrate our capabilities.
                </p>


                {/* Project Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {
                    projects.map((project) => (

                        <div key={project.id} className="bg-white rounded-2xl overflow-hidden border border-[#E2EAF7] hover:shadow-lg transition duration-300" >

                            {/* Project Image */}
                            <div className="h-72 md:h-80 flex items-center justify-center bg-[#F8FAFC] p-3">

                                <img src={project.image} alt={project.title} className="w-full h-full object-contain" />

                            </div>

                            {/* Project Information */}

                            <div className="p-4">

                                <h3 className="text-base font-semibold text-[#081327] mb-1">{project.title} </h3>

                                <p className="text-xs text-[#64748B] mb-2">{project.technologies} </p>

                                <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{project.category} </span>

                            </div>

                        </div>

                    ))
                }

                </div>


                {/* Explore More */}

                <div className="mt-6">
                    <a href="/work" className="text-sm font-medium text-[#0068EC] hover:text-[#0054C7] transition" >Explore Our Work → </a>
                </div>

            </div>
        </section>
    );
}
