import Link from "next/link"

const nav_items = [
    {
        link: "/",
        name: "Home",
    },
    {
        link: "/experience",
        name: "Experience",
    },
    {
        link: "/projects",
        name: "Projects",
    },
    {
        link: "/activities",
        name: "Activities",
    },
]

export default function Navbar() {
    return (
        <div>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
                    <ul className="rounded-xl border-2 border-solid p-2 w-2xl justify-center items-center flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        {
                            nav_items.map((link, id) => (
                                <li key={id}>
                                    <a href={link.link} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}