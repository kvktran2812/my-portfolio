import Image from "next/image"
import Experience from "./experience";

export default function HomePage() {
    return (
        <div className="w-2xl">
            {/* Profile Image */}
            <div className="w-2xl grid place-items-center">
                <Image
                    className="rounded-full ring-4 ring-gray-500 dark:ring-gray-500 p-2" 
                    src="/profile.jpg"
                    alt="My Profile"
                    width={300}
                    height={300}
                />
            </div>
            
            {/* Profile Summary */}
            <div className="mt-8">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    Khuong Vinh Khang Tran
                </p>
                <p className="text-2xl text-gray-900 dark:text-white">
                    Machine Learning & Software Engineer
                </p>
                <p className="mt-4">
                    A passionate BSc Computer Science graduate with hands-on experience in machine learning and software development 
                    from internships. Skilled in building scalable solutions, optimizing algorithms, and turning data into actionable insights. 
                    Eager to tackle complex problems and contribute to innovative projects 
                </p>
            </div>


            {/* GitHub and LinkedIn here */}
            <div className="mt-4 mb-8 flex gap-4">
                <a href="https://github.com/kvktran2812">
                    <Image 
                        src="/github.svg" 
                        alt="GitHub" 
                        width={30} 
                        height={30}
                    />
                </a>
                <a href="https://www.linkedin.com/in/khuong-vinh-khang-tran-a078aa1b3/">
                    <Image 
                        src="/linkedin.svg" 
                        alt="LinkedIn" 
                        width={30} 
                        height={30}
                    />
                </a>
            </div>



            {/* Brief Experience */}
            <Experience />

        </div>
    )
}