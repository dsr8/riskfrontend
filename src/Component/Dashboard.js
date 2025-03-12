import React from "react";
import { useState, useEffect } from "react";
import Slider from "./Slider";
import Navbar from "./Navbar";
import Card from "./Card"; // Importing the Card component
import { Grid, Typography, Box } from "@mui/material";
import RiskDashboard from "./RiskDashboard";
import axios from "axios";
import Loading from "./Loading";

const getSessionData = () => {
  const token = sessionStorage.getItem("authToken");
  const user = JSON.parse(sessionStorage.getItem("user")); // Parse the stored user object

  if (token && user) {
    console.log("User data:", user);
    console.log("Auth token:", token);
    return { token, user };
  } else {
    console.log("No session data found");
    return null;
    // window.location.href = '/';
  }
};

const session = getSessionData();

// import { Card as muicard, CardContent, Slider, Typography as speedTypography } from "@mui/material";
// import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
// Heatmap Data
const heatmapData = [
  {
    label: "Very likely",
    values: ["Critical", "High", "Medium", "Low", "No Risk"],
  },
  { label: "Likely", values: ["Critical", "High", "Medium", "Low", "No Risk"] },
  {
    label: "Possible",
    values: ["High", "Medium", "Low", "No Risk", "No Risk"],
  },
  {
    label: "Unlikely",
    values: ["Medium", "Low", "No Risk", "No Risk", "No Risk"],
  },
  {
    label: "Very unlikely",
    values: ["Low", "No Risk", "No Risk", "No Risk", "No Risk"],
  },
];

// Color Mapping
const getColor = (riskLevel) => {
  switch (riskLevel) {
    case "Critical":
      return "#d32f2f"; // Red
    case "High":
      return "#ff5722"; // Orange
    case "Medium":
      return "#ff9800"; // Yellow
    case "Low":
      return "#ffeb3b"; // Light Yellow
    case "No Risk":
      return "#4caf50"; // Green
    default:
      return "#ccc"; // Default Gray
  }
};

const getDashboardData = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/dashboard-data");
  return res.data;
};
const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);

  const fetch = async () => {
    try {
      const dashboardData = await getDashboardData();
      if (dashboardData.success) {
        setData(dashboardData.data);
      }
      console.log(dashboardData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const session = getSessionData();

    if (session) {
      setUser(session.user);
    } else {
      window.location.href = "/";
    }
    fetch();
  }, []);
  if (!data) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <Card
          title="Critical Risks"
          count={data.risk_levels.critical.count}
          percent={`${data.risk_levels.critical.percent}%`}
          color="red"
        />
        <Card
          title="High Risks"
          count={data.risk_levels.high.count}
          percent={`${data.risk_levels.high.percent}%`}
          color="yellow"
        />
        <Card
          title="Medium Risks"
          count={data.risk_levels.medium.count}
          percent={`${data.risk_levels.medium.percent}%`}
          color="orange"
        />
        <Card
          title="Low Risks"
          count={data.risk_levels.low.count}
          percent={`${data.risk_levels.low.percent}%`}
          color="green"
        />
      </div>
      <div className="matrix-container">
        <div className="card">
          <div className="card-contener">
            <h2 className="card-title">Risk Types Distribution</h2>
          </div>
        </div>
        <div className="card">
          <div className="card-contener risk_score">
            <h2 className="card-title">Total Risk Score</h2>
            <div className="half-circle-ring"></div>
            <p>{data.risk_score.score}%</p>
          </div>
        </div>
        <div className="card">
          <div className="card-contener">
            <h2 className="card-title">Risk Status</h2>
            <div className="risk-bar">
              <div className="risk-status-bar">
                <svg width="70" height="70" viewBox="0 0 50 50">
                  {/* Circle */}
                  <circle cx="25" cy="25" r="20" fill="green" />

                  {/* Text inside the circle */}
                  <text
                    x="25"
                    y="30"
                    fill="white"
                    fontSize="20px"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {data.risk_status.resolved}
                  </text>
                </svg>
                <p>resolved</p>
              </div>
              <div className="risk-status-bar">
                <svg width="70" height="70" viewBox="0 0 50 50">
                  {/* Circle */}
                  <circle cx="25" cy="25" r="20" fill="#fbbf24" />

                  {/* Text inside the circle */}
                  <text
                    x="25"
                    y="30"
                    fill="white"
                    fontSize="20px"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {data.risk_status.open}
                  </text>
                </svg>
                <p>open</p>
              </div>
              <div className="risk-status-bar">
                <svg width="70" height="70" viewBox="0 0 50 50">
                  {/* Circle */}
                  <circle cx="25" cy="25" r="20" fill="red" />

                  {/* Text inside the circle */}
                  <text
                    x="25"
                    y="30"
                    fill="white"
                    fontSize="20px"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {data.risk_status.overdue}
                  </text>
                </svg>
                <p>overdue</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*--------speedometer and boxes-----------*/}

      <div>
        <RiskDashboard
          heatmapData={data.risk_score.heatmap_data}
          riskLabel={data.risk_score.label}
          riskScore={data.risk_score.score}
        />
      </div>
    </>
  );
};

export default Dashboard;