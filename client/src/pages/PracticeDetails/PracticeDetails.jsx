import { Link,useParams } from "react-router-dom";

function PracticeDetails() {

   const { slug } = useParams();

    console.log(slug);

    return (
        <main className="min-h-screen bg-neutral-950 text-white">

            <section className="max-w-6xl mx-auto px-12 py-12">

                <Link
                    to="/practice-paths"
                    className="text-[#aea584]"
                >
                    ← Back
                </Link>

                <h1 className="text-5xl font-serif mt-8">
                    Practice Details
                </h1>

                <p className="text-gray-400 mt-4">
                    This page will display details of the selected practice.
                </p>

            </section>

        </main>
    );
}

export default PracticeDetails;