import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { notifications } from '../Constants/di';
import '../Styles/Notify.css';
import '../Styles/Tog.css';

const NotificationPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).get("status"); // all, read, unread

  const [active, setActive] = useState(searchParams || "/notification");
  const handleToggle = (location) => {
    if (active === location) return;
    setActive(location);
  };

  const filteredData = notifications.filter((item) => {
    if (searchParams === "all") return true;
    if (searchParams === "read" && item.read) return true;
    if (searchParams === "unread" && !item.read) return true;
    return false;
  });

  return (
    <div>
      <div className="toggles">
        <Link to="/notification?status=all">
          <button
            className={`btn btn-primary btn-all-badges ${active === "/notification" ? "active" : ""} ${active === "all" ? "active" : ""}`}
            onClick={() => handleToggle("all")}
          >
            All Notifications
          </button>
        </Link>
        
        <Link to="/notification?status=read">
          <button
            className={`btn btn-primary btn-popular-badges ${active === "read" ? "active" : ""}`}
            onClick={() => handleToggle("read")}
          >
            Read Notifications
          </button>
        </Link>
        
        <Link to="/notification?status=unread">
          <button
            className={`btn btn-primary btn-ongoing-badges ${active === "unread" ? "active" : ""}`}
            onClick={() => handleToggle("unread")}
          >
            Unread Notifications
          </button>
        </Link>
      </div>

      <div className='Notify'>
        {filteredData.map((item) => (
          <div key={item.id} className='Notifydiv'>
            <img src={item.imgsrc} alt="" className='Notifyimg' />
            <p className=''>
              {searchParams === "all" ? (item.read ? "" : "Unread") : ""}
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
