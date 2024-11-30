const triggerJobUpdateNotification = (job) => {
    if (Notification.permission === "granted") {
      const notification = new Notification("Job Update", {
        body: `${job.company} - ${job.position} status changed to ${job.status}`,
        icon: "https://your-app-icon-url.com", // Optional app icon
        sound: "https://your-sound-url.com/notification.mp3", // Optional sound
      });
  
      notification.onclick = () => {
        window.focus(); // Focus on the app window
      };
    }
  };
  