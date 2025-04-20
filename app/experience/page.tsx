import Experience from "../components/experience"

export default function Page() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 sm:items-start w-2xl mx-auto">
                <Experience />
            </main>
        </div>
    )
}