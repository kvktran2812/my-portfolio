const experience = [
    {
        role: "Software Engineer",
        company: "Ki3 Photnics Technologies",
        date: "September 2022 - April 2023",
        desc: [
            "Worked with quantum researchers to build an open-source Python library for quantum computing.",
            "Refactored code to improve computational performance, increase by 30%.",
            "Performed software quality assurance, maintained testing coverage above 90%.",
            "Implemented visualization module with D3.js to render large quantum circuits."
        ],
        tech_stack: "Python, Pytest, Numpy, Matplotlib, D3.js"
    },
    {
        role: "ML Engineer",
        company: "AhaMove",
        date: "May 2024 - November 2024",
        desc: [
            "Architected end-to-end ML pipeline to help tackle business problem in CRM and automation.",
            "Optimized and fine-tuned pre-trained language model from HuggingFace for customer service tasks.",
            "Designed and implemented reinforcement learning algorithm for logistics automation.",
            "Deployed model to AWS cloud platform with SageMaker, ensure reliability and scalability."
        ],
        tech_stack: "Pytorch, Tensorflow, HuggingFace, AWS, SageMaker"
    },
    {
        role: "Software Engineer (short-term contract)",
        company: "Ki3 Photnics Technologies",
        date: "April 2025 - May 2025",
        desc: [
            "Developed a socket application for telecommunication of quantum device",
            "Designed user-friendly GUI", 
        ],
        tech_stack: "Socket programming, GUI design, Multi-threading"
    }
]

export default function Experience() {
    return (
        <div>
            {experience.map((exp, id) => (
                <div key={id} className="mt-6">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-gray-500">{exp.date}</p>
                    </div>
                    <p className="text-lg text-gray-700">{exp.company}</p>
                    <p className="text-md text-blue-600 mb-2">{exp.tech_stack}</p>
                    <div className="mb-4">
                        <ul className="list-disc px-8">
                        {exp.desc.map((row, id) => (
                            <li key={id}>{row}</li>
                        ))}
                        </ul>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    )    
}