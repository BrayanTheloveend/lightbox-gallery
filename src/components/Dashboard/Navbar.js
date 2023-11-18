import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="overlap">
          <div className="text-wrapper">Sort :</div>
          <div className="profile-and-name">
            <div className="admin">
              <div className="overlap-group">
                <div className="text-wrapper-2">Brayan Th</div>
                <div className="text-wrapper-3">Noubissibrayan@gmail.com</div>
              </div>
            </div>
            <div className="profile">
              <div className="ellipse" />
            </div>
          </div>
          <div className="notification">
            <div className="overlap-2">
              <img className="vector" alt="Vector" src="/img/vector-2.svg" />
              <img className="img" alt="Vector" src="/img/vector-1.svg" />
              <img className="vector-2" alt="Vector" src="/img/vector.svg" />
              <div className="ellipse-2" />
            </div>
          </div>
          <div className="dropdown-menu">
            <div className="overlap-3">
              <div className="text-wrapper-4">Last week</div>
              <img className="downarrow" alt="Downarrow" src="/img/downarrow.svg" />
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-5">Logo</div>
          <div className="slide-menu-item">
            <div className="menu-item">
              <div className="frame">
                <img className="img-2" alt="Logout" src="/img/logout.svg" />
                <div className="text-wrapper-6">Log out</div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame">
                <img className="img-2" alt="Settings" src="/img/settings.svg" />
                <div className="text-wrapper-6">Settings</div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="frame">
                <img className="img-2" alt="Reports" src="/img/reports.svg" />
                <div className="text-wrapper-6">Feedback</div>
              </div>
            </div>
            <div className="menu-item-2">
              <div className="frame">
                <img className="img-2" alt="Message" src="/img/message.svg" />
                <div className="text-wrapper-6">Notifications</div>
              </div>
            </div>
            <div className="menu-item-3">
              <div className="frame">
                <img className="img-2" alt="Sales" src="/img/sales-1.svg" />
                <div className="text-wrapper-6">Shop</div>
              </div>
            </div>
            <div className="menu-item-4">
              <div className="frame">
                <img className="img-2" alt="Customers" src="/img/customers.svg" />
                <div className="text-wrapper-6">Customers</div>
              </div>
            </div>
            <div className="menu-item-5">
              <div className="frame-2">
                <img className="home" alt="Home" src="/img/home.png" />
                <div className="text-wrapper-7">Dashboard</div>
              </div>
              <div className="rectangle" />
            </div>
          </div>
          <img className="icon-clipboard" alt="Icon clipboard" src="/img/icon-clipboard.png" />
        </div>
    </>
  )
}

export default Navbar
