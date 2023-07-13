import React from 'react'
import './DashBoard.css'
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="left-container">
        <h1 className="title">Board.</h1>
        <div className="route-items">
          <div className="route-item">
            <img src="icon1.png" alt="Icon" className="route-icon" />
            <span className="route-text active">Dashboard</span>
          </div>
          <div className="route-item">
            <img src="icon2.png" alt="Icon" className="route-icon" />
            <span className="route-text">Transactions</span>
          </div>
          <div className="route-item">
            <img src="icon3.png" alt="Icon" className="route-icon" />
            <span className="route-text">Schedule</span>
          </div>
          <div className="route-item">
            <img src="icon4.png" alt="Icon" className="route-icon" />
            <span className="route-text">Users</span>
          </div>
          <div className="route-item">
            <img src="icon5.png" alt="Icon" className="route-icon" />
            <span className="route-text">Settings</span>
          </div>
        </div>
        <div className="bottom-options">
          <div className="bottom-option">
            <img src="help.png" alt="Icon" className="bottom-icon" />
            <span className="bottom-text">Help</span>
          </div>
          <div className="bottom-option">
            <img src="contact.png" alt="Icon" className="bottom-icon" />
            <span className="bottom-text">Contact Us</span>
          </div>
        </div>
      </div>
      <div className="right-container">
        {}
      </div>
    </div>
  )
}

export default Dashboard