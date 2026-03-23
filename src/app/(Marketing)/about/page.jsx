import Hero from "@components/about/Hero"
import Grid from "@components/about/Grid"
import Note from "@components/about/Note"
import Purpose from "@components/about/Purpose"

export const metadata = {
 title: "About | Compass",
 description:
    "Learn about Compass, an educational mental health platform promoting early intervention, awareness, and clarity. Designed to support individuals alongside professional care — not for diagnosis or clinical treatment.",
}

export default function AboutPage() {
    return (
    <main className="min-h-screen bg-base-100">
        <section className="max-w-6xl mx-auto mt-10 px-4">
            <Hero/>
            <Grid/>
            <Note/>
            <Purpose/>
        </section>
    </main>
    )
}