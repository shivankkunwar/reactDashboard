import React from 'react'
import './DashBoard.css'
import MainChart from './charts/MainChart'
import AnotherChart from './charts/AnotherChart'
import icon1 from "./cardImg/icon1.svg"
import MyPieChart from './charts/MyPiechat'
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
            
            <span className="bottom-text">Help</span>
          </div>
          <div className="bottom-option">
            
            <span className="bottom-text">Contact Us</span>
          </div>
        </div>
      </div>
      <div className="right-container">
        <nav className='nav'>
          <h2>Dashboard</h2>
          <div className="right-elements">
          <div className="search-bar">
            <input type="text" placeholder="Search..."/>
          </div>
          <div className="profile-picture">
            {/* <img src="profile.png" alt="PP"/> */}
            PP
          </div>
          <div className="profile-picture">
            {/* <img src="profile.png" alt="PP"/> */}
            PP
          </div>
          </div>
         
        </nav>
       
        <div className="top-cards">
          
            <div className="top-card"style={{backgroundColor: '#DDEFE0'}}>
                        <div className="top-card-left">
                            <div className="top-card-bottom-left">
                                <p className="top-card-text">Total Revenues</p>
                                <p className="top-card-value">$2,129,430</p>
                            </div>
                        </div>
                        <div className="top-card-right">
                            <div className="top-card-top-left">
                                <img src={icon1} alt="Icon" className="top-card-icon" />
                            </div>
                        </div>
            </div>
            <div className="top-card"style={{backgroundColor: '#F4ECDD'}}>
                        <div className="top-card-left">
                            <div className="top-card-bottom-left">
                                <p className="top-card-text">Total Transactions</p>
                                <p className="top-card-value">1,520</p>
                            </div>
                        </div>
                        <div className="top-card-right">
                            <div className="top-card-top-left">
                                <img src={icon1} alt="Icon" className="top-card-icon" />
                            </div>
                        </div>
            </div>
            <div className="top-card"style={{backgroundColor: '#EFDADA'}}>
                        <div className="top-card-left">
                            <div className="top-card-bottom-left">
                                <p className="top-card-text">Total Likes</p>
                                <p className="top-card-value">9,721</p>
                            </div>
                        </div>
                        <div className="top-card-right">
                            <div className="top-card-top-left">
                                <img src={icon1} alt="Icon" className="top-card-icon" />
                            </div>
                        </div>
            </div>
            <div className="top-card"style={{backgroundColor: '#DEE0EF'}}>
                        <div className="top-card-left">
                            <div className="top-card-bottom-left">
                                <p className="top-card-text">Total Users</p>
                                <p className="top-card-value">892</p>
                            </div>
                        </div>
                        <div className="top-card-right">
                            <div className="top-card-top-left">
                                <img src={icon1} alt="Icon" className="top-card-icon" />
                            </div>
                        </div>
            </div>
          
        </div>
        <div className="chart">
            <div className="chart-container">
                    <MainChart/>
            </div>
        </div>
        <div className="bottom-cards">
            <div className="bottom-card">
                                <div className="bottom-card-top">
                                    <h3>Top Products</h3>
                                    <select style={{marginBottom:'15px',marginLeft:'40px',border:'none',color:"#858585"}}>
                                    <option>May-June 2023</option>
                                    <option>July-August 2023</option>
                                   
                                    </select>
                                </div>
                        <div className="bottom-card-content">
                                <div className="pie-chart">
                                <MyPieChart/>
                                </div>
                        <div className="color-description">
                            <div className="color-item">
                                <div className="color green"></div>
                                <p className="description">Basic Trees</p>
                                <p className="percent">50%</p>
                            </div>
                            <div className="color-item">
                                <div className="color yellow"></div>
                                <p className="description">Custom Short Pants</p>
                                <p className="percent">30%</p>
                            </div>
                            <div className="color-item">
                                <div className="color pink"></div>
                                <p className="description">Super Hoodies</p>
                                <p className="percent">20%</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="bottom-card">
            <div className="nav">
                  <h3>Today's Schedule</h3>
                  <button className="see-more-button">See All &gt;</button>
            </div>
            <div className="small-cards-container">
                  <div className="small-cards">
                    <div className="small-card">
                      <div className="colored-line"></div>
                      <div className="card-details">
                        <p>Meeting</p>
                        <p>10:00 AM</p>
                        <p>Conference Room</p>
                      </div>
                    </div>
                    <div className="small-card">
                      <div className="colored-line"></div>
                      <div className="card-details">
                        <p>Product Launch</p>
                        <p>02:00 PM</p>
                        <p>Event Hall</p>
                      </div>
                    </div>
                  </div>
              </div>
              </div>
         </div>
        </div>
        
      </div>
   
  )
}

export default Dashboard