import React from 'react'
import './Dashboard.css'
import MainChart from './charts/MainChart'
import AnotherChart from './charts/AnotherChart'
import {icon1,icon2,icon3,icon4} from "./cardImg/Icons"
import {dashboard, schedules, settings, transactions, users} from "./sidebarImg/sideBarImg"
import bell from "./cardImg/bell.svg"
import profile from "./cardImg/profile.svg"
import MyPieChart from './charts/MyPiechat'
function Dashboard() {
  return (
    <div className="app-dashboard">
      <div className="app-left-container">
        <h1 className="app-title">Board.</h1>
        <div className="app-route-items">
          <div className="app-route-item">
            <img src={dashboard} alt="Icon" className="app-route-icon" />
            <span className="app-route-text app-active">Dashboard</span>
          </div>
          <div className="app-route-item">
            <img src={transactions} alt="Icon" className="app-route-icon" />
            <span className="app-route-text">Transactions</span>
          </div>
          <div className="app-route-item">
            <img src={schedules} alt="Icon" className="app-route-icon" />
            <span className="app-route-text">Schedule</span>
          </div>
          <div className="app-route-item">
            <img src={users} alt="Icon" className="app-route-icon" />
            <span className="app-route-text">Users</span>
          </div>
          <div className="app-route-item">
            <img src={settings} alt="Icon" className="app-route-icon" />
            <span className="app-route-text">Settings</span>
          </div>
        </div>
        <div className="app-bottom-options">
          <div className="app-bottom-option">
            
            <span className="app-bottom-text">Help</span>
          </div>
          <div className="app-bottom-option">
            
            <span className="app-bottom-text">Contact Us</span>
          </div>
        </div>
      </div>
      <div className="app-right-container">
        <nav className='nav'>
          <h2>Dashboard</h2>
          <div className="right-elements">
          <div className="search-bar">
            <input type="text" placeholder="Search..."/>
          </div>
          <div className="profile-picture">
            <img src={bell} alt="PP"/>
           
          </div>
          <div className="profile-picture">
            <img src={profile} alt="PP"/>
            
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
                                <img src={icon2} alt="Icon" className="top-card-icon" />
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
                                <img src={icon3} alt="Icon" className="top-card-icon" />
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
                                <img src={icon4} alt="Icon" className="top-card-icon" />
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
            <div className="cd2-nav">
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