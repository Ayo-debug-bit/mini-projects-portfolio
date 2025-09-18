import Link from "next/link";

export default function ProjectCard({ proj }) {

  const repoURL = proj.repo || "#";

  if (!proj) return null;
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transform transition duration-300 border border-sage-200">
      <h2 className="text-xl font-bold mb-2">{proj.title}</h2>
      <p className="text-sm text-gray-700 mb-4">{proj.description}</p>
      <p className="mb-2 font-semibold">{proj.type}</p>
      <a
        href={repoURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-green-700 transition">
        View Repo
        </button>
      </a>
    </div>
  );
}