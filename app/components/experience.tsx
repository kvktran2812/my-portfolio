const experience = [
    {
        role: "Software Engineer",
        company: "Ki3 Photnics Technologies",
        date: "September 2022 - April 2023",
        desc: [],
        tech_stack: ""
    },
    {
        role: "Software Engineer",
        company: "Ki3 Photnics Technologies",
        date: "September 2022 - April 2023",
        desc: [],
        tech_stack: ""
    },
    {
        role: "Software Engineer",
        company: "Ki3 Photnics Technologies",
        date: "September 2022 - April 2023",
        desc: [],
        tech_stack: ""
    }
]

export default function Experience() {
    return (
        <div>
            {experience.map((exp, id) => (
                <div key={id}>
                    <p>{exp.role}</p>
                </div>
            ))}
        </div>
    )    
}