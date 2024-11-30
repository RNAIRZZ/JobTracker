import React, { useEffect, useState } from "react";
import "./App.js";
import "./App.css";

function JobNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Simulating fetching job news from an API
    setNews([
      "Job market trends are shifting towards remote work.",
      "AI-related jobs are seeing significant growth.",
      "Startups are hiring, even amid economic uncertainty."
    ]);
  }, []);

  return (
    <div className="JobNews">
      <h3>Job Market News</h3>
      <ul>
        {news.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default JobNews;
