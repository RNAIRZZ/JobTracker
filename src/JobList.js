import React from "react";
import "./App.js";
import "./App.css";

function JobList({ jobs, deleteJob, updateProgress, handleStatusChange, interviewTips }) {
  return (
    <div className="job-list">
      <h2>Job Applications</h2>
      {jobs.map((job, index) => (
        <div key={index} className="job-item">
          <h3>{job.company} - {job.position}</h3>
          <p>Status: {job.status}</p>
          <p>Priority: {job.priority}</p>
          <p>Progress: {job.progress}%</p>
          {job.interviewStage && (
            <div>
              <h4>Interview Stage: {job.interviewStage}</h4>
              <ul>
                {interviewTips[job.interviewStage].map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
          <button onClick={() => deleteJob(index)}>Delete</button>
          <button onClick={() => updateProgress(index, job.progress + 10)}>Increase Progress</button>
          <button onClick={() => handleStatusChange(index, "Interviewing")}>Change Status to Interviewing</button>
        </div>
      ))}
    </div>
  );
}

export default JobList;
