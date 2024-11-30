import React from 'react';
import "./App.js";

function HomePage({ setShowJobForm, setShowJobList, setShowInterviewTips, setShowJobNews, setShowCalendar, setShowHomePage }) {
  return (
    <div className="home-page">
      <h1>Welcome to JobOrbit</h1>
      <p>JobOrbit is your go-to platform for managing job applications, getting job news, tracking interview progress, and more.</p>
      <p>Contact Info: <strong>contact@joborbit.com</strong></p>

      <div className="home-buttons">
        <button onClick={() => { 
          setShowJobForm(true); 
          setShowJobList(false); 
          setShowInterviewTips(false); 
          setShowJobNews(false); 
          setShowCalendar(false);
          setShowHomePage(false);
        }}>Job Form</button>

        <button onClick={() => { 
          setShowJobForm(false); 
          setShowJobList(true); 
          setShowInterviewTips(false); 
          setShowJobNews(false); 
          setShowCalendar(false);
          setShowHomePage(false);
        }}>Job List</button>

        <button onClick={() => { 
          setShowJobForm(false); 
          setShowJobList(false); 
          setShowInterviewTips(true); 
          setShowJobNews(false); 
          setShowCalendar(false);
          setShowHomePage(false);
        }}>Interview Tips</button>

        <button onClick={() => { 
          setShowJobForm(false); 
          setShowJobList(false); 
          setShowInterviewTips(false); 
          setShowJobNews(true); 
          setShowCalendar(false);
          setShowHomePage(false);
        }}>Job News</button>

        <button onClick={() => { 
          setShowJobForm(false); 
          setShowJobList(false); 
          setShowInterviewTips(false); 
          setShowJobNews(false); 
          setShowCalendar(true);
          setShowHomePage(false);
        }}>Calendar</button>
      </div>
    </div>
  );
}

export default HomePage;
