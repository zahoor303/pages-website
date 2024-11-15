export default function Skillspage() {
    return (
      <div className="min-h-screen bg-yellow-100 p-8">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">
          Skills Page
        </h1>
        <div className="container mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Skill Cards */}
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"].map(
            (skill, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold text-gray-800">{skill}</h2>
                <p className="mt-2 text-gray-600">
                  Expertise in {skill}, enabling dynamic and responsive design and development.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
  