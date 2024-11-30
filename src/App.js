import React, { useState, useEffect } from "react";
import "./App.css";

// API Key for Real-time News
const NEWS_API_KEY = "0b8ddcbda54e48c5abdb2e4ac32f20ac";
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

function App() {
  // State variables
  const [activeFeature, setActiveFeature] = useState(null); // Track the currently active feature
  const [news, setNews] = useState([]); // State to store news
  const [toDoList, setToDoList] = useState([]); // To-Do list tasks
  const [interviewStage, setInterviewStage] = useState("aptitude");
  const [jobs, setJobs] = useState([]); // State to store added jobs
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    date: "",
  }); // State to hold new job input
  const [addJobVisible, setAddJobVisible] = useState(false); // State to toggle the visibility of the job form

  // Fetch latest news
  useEffect(() => {
    fetchNews();
  }, []);

  // Fetch news
  const fetchNews = async () => {
    try {
      const response = await fetch(NEWS_API_URL);
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // Add a new task to the To-Do List
  const addTask = (task) => {
    setToDoList([...toDoList, { text: task, completed: false }]);
  };

  // Toggle task completion status
  const toggleTaskCompletion = (index) => {
    const updatedToDoList = [...toDoList];
    updatedToDoList[index].completed = !updatedToDoList[index].completed;
    setToDoList(updatedToDoList);
  };

  // Remove a task from the To-Do List
  const removeTask = (index) => {
    const updatedToDoList = toDoList.filter((_, i) => i !== index);
    setToDoList(updatedToDoList);
  };

  // Handle input change for new job
  const handleJobInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  // Add a new job to the jobs list and persist it in localStorage
  const addJob = (e) => {
    e.preventDefault();
    if (newJob.title && newJob.company && newJob.date) {
      const updatedJobs = [...jobs, newJob];
      setJobs(updatedJobs);
      localStorage.setItem("jobs", JSON.stringify(updatedJobs)); // Save jobs to localStorage
      setNewJob({
        title: "",
        company: "",
        location: "",
        description: "",
        date: "",
      }); // Reset job form after submission
      setAddJobVisible(false); // Hide job form after submission
    }
  };

  // Remove a job from the jobs list and update localStorage
  const removeJob = (index) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs)); // Update localStorage
  };

  // Load jobs from localStorage when the app mounts
  useEffect(() => {
    const savedJobs = localStorage.getItem("jobs");
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  // Interview preparation tips based on the current stage (aptitude, technical, HR)
  const getInterviewTips = () => {
    if (interviewStage === "aptitude") {
      return (
        <div>
          <h3>Aptitude Test Preparation Tips</h3>
          <ul>
            <li>Practice solving problems quickly to improve speed.</li>
            <li>Understand key topics: Algebra, Arithmetic, Probability, and Geometry.</li>
            <li>Focus on time management during practice tests.</li>
            <li>Learn shortcuts and tricks to simplify calculations.</li>
            <li>Work on logical reasoning and pattern recognition.</li>
            <li>Take mock tests to simulate the exam environment.</li>
            <li>Review each mistake you make and understand the correct approach.</li>
            <li>Use online platforms like CodeSignal or HackerRank for mock tests.</li>
            <li>Focus on improving accuracy, not just speed.</li>
            <li>Keep a positive attitude and stay calm under pressure during the exam.</li>
          </ul>
        </div>
      );
    }
    if (interviewStage === "technical") {
      return (
        <div>
          <h3>Technical Interview Preparation Tips</h3>
          <ul>
            <li>Review data structures and algorithms thoroughly.</li>
            <li>Understand the complexity of algorithms and their use cases.</li>
            <li>Practice coding problems on platforms like LeetCode, HackerRank, or Codewars.</li>
            <li>Master problem-solving techniques such as dynamic programming, recursion, and backtracking.</li>
            <li>Prepare for system design interviews if applying for senior roles.</li>
            <li>Work on debugging code efficiently.</li>
            <li>Understand core programming concepts, including object-oriented programming.</li>
            <li>Be prepared to write code in a clean and efficient manner.</li>
            <li>Ask clarifying questions if the problem statement is unclear during the interview.</li>
            <li>Communicate your thought process clearly while solving coding problems.</li>
          </ul>
        </div>
      );
    }
    if (interviewStage === "hr") {
      return (
        <div>
          <h3>HR Interview Preparation Tips</h3>
          <ul>
            <li>Prepare answers for common HR questions: "Tell me about yourself," "Why do you want to join us?", etc.</li>
            <li>Highlight your achievements and skills with examples.</li>
            <li>Be honest about your strengths and weaknesses but try to frame weaknesses positively.</li>
            <li>Demonstrate a good cultural fit by researching the company's values.</li>
            <li>Be prepared to discuss your resume in detail.</li>
            <li>Stay calm, composed, and confident during the interview.</li>
            <li>Ensure your communication skills are clear and professional.</li>
            <li>Research the company, its leadership, and its goals before the interview.</li>
            <li>Express interest in continuous learning and personal growth within the company.</li>
            <li>Ask insightful questions about the company’s work culture and future prospects.</li>
          </ul>
        </div>
      );
    }
    return null;
  };

  // Toggle active feature and close others automatically
  const toggleFeature = (feature) => {
    if (activeFeature === feature) {
      setActiveFeature(null); // Close if the same button is clicked
    } else {
      setActiveFeature(feature); // Open the selected feature
    }
  };

  return (
    <div className="App">
      <h1>Job Tracker</h1>
      
      {/* Button Section */}
      <div className="button-container">
        <button onClick={() => toggleFeature("news")}>
          {activeFeature === "news" ? "Hide News" : "Show News"}
        </button>
        <button onClick={() => toggleFeature("toDoList")}>
          {activeFeature === "toDoList" ? "Hide To-Do List" : "Show To-Do List"}
        </button>
        <button onClick={() => toggleFeature("interviewPrep")}>
          {activeFeature === "interviewPrep" ? "Hide Interview Prep" : "Show Interview Prep"}
        </button>
        <button onClick={() => toggleFeature("addJob")}>
          {activeFeature === "addJob" ? "Cancel" : "Add Job"}
        </button>
      </div>

      {/* Welcome Message */}
      <div className="welcome-messagecontainer">
        <h2>Welcome to JobTracker, your one-stop destination for job interviews</h2>
      </div>

      {/* News */}
      {activeFeature === "news" && (
        <div className="news">
          <h2>Latest News</h2>
          <ul>
            {news.slice(0, 5).map((article, index) => (
              <li key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* To-Do List */}
      {activeFeature === "toDoList" && (
        <div className="feature-content">
          <h2>To-Do List</h2>
          <ul>
            {toDoList.map((task, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                />
                {task.text}
                <button onClick={() => removeTask(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="New Task"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value) {
                addTask(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
      )}

      {/* Interview Preparation */}
      {activeFeature === "interviewPrep" && (
        <div className="feature-content">
          <h2>Interview Preparation</h2>
          {getInterviewTips()}
          <div className="stage-buttons">
            <button onClick={() => setInterviewStage("aptitude")}>
              Aptitude
            </button>
            <button onClick={() => setInterviewStage("technical")}>
              Technical
            </button>
            <button onClick={() => setInterviewStage("hr")}>
              HR
            </button>
          </div>
        </div>
      )}

      {/* Add Job Form */}
      {activeFeature === "addJob" && (
        <div className="feature-content">
          <h2>Add New Job</h2>
          <form onSubmit={addJob}>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={newJob.title}
              onChange={handleJobInputChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={newJob.company}
              onChange={handleJobInputChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={newJob.location}
              onChange={handleJobInputChange}
            />
            <textarea
              name="description"
              placeholder="Job Description"
              value={newJob.description}
              onChange={handleJobInputChange}
            />
            <input
              type="date"
              name="date"
              value={newJob.date}
              onChange={handleJobInputChange}
              required
            />
            <button type="submit">Add Job</button>
          </form>
        </div>
      )}

      {/* Job List */}
      <div className="job-list">
        <h2>Jobs</h2>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <strong>{job.title}</strong> - {job.company} ({job.location})
              <p>{job.description}</p>
              <p>{job.date}</p>
              <button onClick={() => removeJob(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
