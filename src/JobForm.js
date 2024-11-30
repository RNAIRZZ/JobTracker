import React, { useState } from "react";
import "./App.js";
import "./App.css";

function JobForm({ addJob, setInterviewStage, setChecklist }) {
  const [job, setJob] = useState({
    company: "",
    position: "",
    status: "Applied",
    progress: 0,
    priority: "Low",
    deadline: "",
    interviewStage: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (job.company && job.position && job.status) {
      addJob(job);
      setInterviewStage(job.interviewStage);
      setChecklist([]);
      setJob({
        company: "",
        position: "",
        status: "Applied",
        progress: 0,
        priority: "Low",
        deadline: "",
        interviewStage: "",
      });
    }
  };

  return (
    <div className="job-form">
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={job.company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={job.position}
          onChange={handleChange}
        />
        <input
          type="date"
          name="deadline"
          value={job.deadline}
          onChange={handleChange}
        />
        <select name="status" value={job.status} onChange={handleChange}>
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
          <option value="Completed">Completed</option>
        </select>
        <select name="priority" value={job.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Urgent">Urgent</option>
        </select>
        <select name="interviewStage" value={job.interviewStage} onChange={handleChange}>
          <option value="">Select Interview Stage</option>
          <option value="Technical Interview">Technical Interview</option>
          <option value="Behavioral Interview">Behavioral Interview</option>
          <option value="Coding Test">Coding Test</option>
        </select>
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}

export default JobForm;
