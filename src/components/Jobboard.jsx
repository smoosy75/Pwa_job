import { useEffect, useState } from "react";
import JobCard from "./JobCard";

function JobBoard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/api/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des offres :", error)
      );
  }, []);

  return (
    <div className="mx-4 pb-20">
      <h2 className="text-xl font-bold mb-4 mt-5 lg:mt-10 lg:text-2xl">
        Offres d'emploi
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 hover:cursor-pointer">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobBoard;
