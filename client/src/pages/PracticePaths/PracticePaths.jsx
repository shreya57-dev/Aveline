import { useState } from "react";
import { Link } from "react-router-dom";
import PracticeCard from "../../components/PracticeCard/PracticeCard";
import heroImage from "../../assets/images/hero/hero_image.png";
import forearmStandCenter from "../../assets/images/practice_paths/forearm_stand_centre.png";
import headStandCenter from "../../assets/images/practice_paths/headstand_center.png";
import handStandCenter from "../../assets/images/practice_paths/handstand_center.png";
import press_to_handstandCenter from "../../assets/images/practice_paths/press_to_handstand_center.png";

function PracticePaths() {

const [selectedLevel, setSelectedLevel] = useState("All");

    const levels=[
      "All","Beginner","Intermediate","Advanced"
    ];

    const practicePaths = [
        {
            title: "Headstand Foundations",
            slug: "headstand_foundations",
            level: "Beginner",
            lessons: 6,
            image: headStandCenter,
        },

        {
            title: "Handstand Journey",
            slug: "handstand_journey",
            level: "Intermediate",
            lessons: 7,
            image: handStandCenter,
        },

        {
            title: "Press to Handstand",
            slug: "press_to_handstand",
            level: "Advanced",
            lessons: 8,
            image: press_to_handstandCenter,
        },

        {
            title: "Forearm Stand",
            slug: "forearm_stand",
            level: "Intermediate",
            lessons: 5,
            image: forearmStandCenter,
        },
    ];

    const filteredPaths =
    selectedLevel === "All"
        ? practicePaths
        : practicePaths.filter(
              (path) => path.level === selectedLevel
          );

  return (
    <main className="min-h-screen bg-neutral-950 text-white">


      <section className="max-w-7xl mx-auto px-12 py-12">

        {/* Header */}

        <header className="flex justify-between items-center">
          <Link to="/">
            <span className="text-4xl font-serif tracking-[0.2em] text-white">
              AVELINE
            </span>
          </Link>

          <Link to="/login">
            <span className="text-white hover:text-[#aea584] transition-colors duration-200">
              Sign In
            </span>
          </Link>
        </header>

        {/* Heading */}

        <div className="mt-24">
        <h1 className="text-5xl font-serif">
          Practice Paths
        </h1>

        <p className="mt-4 text-gray-400">
          Choose your path
        </p>
        </div>

        {/* Filters */}

       <div className="mt-12 flex gap-4 mb-4">

          {
            levels.map((level)=>(
              <button
              key={level}
               onClick={() => setSelectedLevel(level)} className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedLevel === level
            ? "bg-[#aea584] text-black"
            : "border border-gray-700 text-white hover:border-[#aea584]"
             }`} >
            {level}
          </button>
            ))
          }
          
        </div>

        {/* Cards */}
       
          <div className="grid grid-cols-2 gap-8 mt-12">

            {
              filteredPaths.map((path) => (

              <PracticeCard
                  key={path.slug}
                  image={path.image}
                  title={path.title}
                  level={path.level}
                  lessons={path.lessons}
              />

               ))
           }

          </div>

      </section>

    </main>
  );
}

export default PracticePaths;