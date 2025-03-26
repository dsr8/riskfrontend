// import React from "react";
// import { useState, useEffect } from "react";
// import Slider from "./Slider";
// import Navbar from "./Navbar";
// import Card from "./Card"; // Importing the Card component
// import { Grid, Typography, Box } from "@mui/material";
// import RiskDashboard from "./RiskDashboard";
// import axios from "axios";
// import Loading from "./Loading";
// import { faHome, faUsers, faCog, faTachometerAlt, faExclamationTriangle,faClipboardCheck, faChartBar, faFileExport  } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const getSessionData = () => {
//   const token = sessionStorage.getItem("authToken");
//   const user = JSON.parse(sessionStorage.getItem("user")); // Parse the stored user object

//   if (token && user) {
//     console.log("User data:", user);
//     console.log("Auth token:", token);
//     return { token, user };
//   } else {
//     console.log("No session data found");
//     return null;
//     // window.location.href = '/';
//   }
// };

// const session = getSessionData();

// // import { Card as muicard, CardContent, Slider, Typography as speedTypography } from "@mui/material";
// // import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
// // Heatmap Data
// const heatmapData = [
//   {
//     label: "Very likely",
//     values: ["Critical", "High", "Medium", "Low", "No Risk"],
//   },
//   { label: "Likely", values: ["Critical", "High", "Medium", "Low", "No Risk"] },
//   {
//     label: "Possible",
//     values: ["High", "Medium", "Low", "No Risk", "No Risk"],
//   },
//   {
//     label: "Unlikely",
//     values: ["Medium", "Low", "No Risk", "No Risk", "No Risk"],
//   },
//   {
//     label: "Very unlikely",
//     values: ["Low", "No Risk", "No Risk", "No Risk", "No Risk"],
//   },
// ];

// // Color Mapping
// const getColor = (riskLevel) => {
//   switch (riskLevel) {
//     case "Critical":
//       return "#d32f2f"; // Red
//     case "High":
//       return "#ff5722"; // Orange
//     case "Medium":
//       return "#ff9800"; // Yellow
//     case "Low":
//       return "#ffeb3b"; // Light Yellow
//     case "No Risk":
//       return "#4caf50"; // Green
//     default:
//       return "#ccc"; // Default Gray
//   }
// };

// const getDashboardData = async () => {
//   const res = await axios.get("http://127.0.0.1:8000/api/dashboard-data");
//   return res.data;
// };

//   // Function to fetch dashboard data
//   const getDashboardresponse = async (days) => {
    
//     try {
//       const res = await axios.get(`http://127.0.0.1:8000/api/dashboard-data-days`, {
//         params: { nodays: days }, // Sending nodays as a query parameter
//       });
//       return res.data;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       return null;
//     }
//   };
// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const [data, setData] = useState(null);


//   const [selected, setSelected] = useState("");
//   const [selected2, setSelected2] = useState("");
//   const [query, setQuery] = useState("");

//   const [selected3, setSelected3] = useState("7 days"); // Default to "Last 7 days"

//   const lastdays = async (e) => {
//     const newDays = e.target.value;
//     setSelected3(newDays);
    
//     const dashboardData = await getDashboardresponse(newDays);
//     if (dashboardData?.success) {
//       setData(dashboardData.data);
//     }
//   };

//   const handleRiskAssessment = (event) => {
//     setSelected(event.target.value);
//   };
//   const bussinessunit = (event) => {
//     setSelected2(event.target.value);
//   };

//   const fetch = async () => {
//     try {
//       const dashboardData = await getDashboardData();
//       if (dashboardData.success) {
//         setData(dashboardData.data);
//       }
//       console.log(dashboardData);
//     } catch (err) {
//       console.error(err);
//     }
//   };

  
//   useEffect(() => {
//     const session = getSessionData();

//     if (session) {
//       setUser(session.user);
//     } else {
//       window.location.href = "/";
//     }
//     fetch();
//   }, []);
//   if (!data) {
//     return <Loading />;
//   }
//   return (
//     <>
//       <Navbar />
//       <div className="riskselector">
//         <select value={selected} onChange={handleRiskAssessment} className="dropdown">
//           <option value="">Risk Assessment</option>
//           <option value="All Assessment">All Assessments</option>
//           <option value="Recent Assessement">Recent Assessements</option>
//           <option value="Critical Assessment">Critical Assessements</option>
//         </select>
//         {/* <p>Selected: {selected}</p> */}
//         <select value={selected2} onChange={bussinessunit} className="dropdown left">
//           <option value="">Site Code/Business Unit</option>
//           <option value="All Assessment">All Units</option>
//           <option value="Recent Assessement">Business Unit 1</option>
//           <option value="Critical Assessment">Business Unit 2</option>
//         </select>
//         {/* <p>Selected: {selected}</p> */}
//         <div className="search-container">
//   <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" viewBox="0 0 16 16">
//     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//   </svg>
//         <input
//         type="text"
//         placeholder="Search risks..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="search-bar"
//         />
//     </div>

//     <select value={selected3} onChange={lastdays} className="dropdown">
//           <option value="Last24hours">Last 24 hours</option>
//           <option value="Last7days">Last 7 days</option>
//           <option value="Last30days">Last 30 days</option>
//           <option value="90days">Last 90 days</option>
//         </select>
//      <button className="exportbtn"><FontAwesomeIcon icon={faFileExport}  />Export</button>

//       </div>
//       <div className="dashboard-container">
//         <Card
//           title="Critical Risks"
//           count={data.risk_levels.critical.count}
//           percent={`${data.risk_levels.critical.percent}%`}
//           color="red"
//         />
//         <Card
//           title="High Risks"
//           count={data.risk_levels.high.count}
//           percent={`${data.risk_levels.high.percent}%`}
//           color="yellow"
//         />
//         <Card
//           title="Medium Risks"
//           count={data.risk_levels.medium.count}
//           percent={`${data.risk_levels.medium.percent}%`}
//           color="orange"
//         />
//         <Card
//           title="Low Risks"
//           count={data.risk_levels.low.count}
//           percent={`${data.risk_levels.low.percent}%`}
//           color="green"
//         />
//       </div>
//       <div className="matrix-container">
//         <div className="card">
//           <div className="card-contener">
//             <h2 className="card-title">Risk Types Distribution</h2>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-contener risk_score">
//             <h2 className="card-title">Total Risk Score</h2>
//             <div className="half-circle-ring"></div>
//             <p>{data.risk_score.score}%</p>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-contener">
//             <h2 className="card-title">Risk Status</h2>
//             <div className="risk-bar">
//               <div className="risk-status-bar">
//                 <svg width="70" height="70" viewBox="0 0 50 50">
//                   {/* Circle */}
//                   <circle cx="25" cy="25" r="20" fill="green" />

//                   {/* Text inside the circle */}
//                   <text
//                     x="25"
//                     y="30"
//                     fill="white"
//                     fontSize="20px"
//                     fontWeight="bold"
//                     textAnchor="middle"
//                   >
//                     {data.risk_status.resolved}
//                   </text>
//                 </svg>
//                 <p>resolved</p>
//               </div>
//               <div className="risk-status-bar">
//                 <svg width="70" height="70" viewBox="0 0 50 50">
//                   {/* Circle */}
//                   <circle cx="25" cy="25" r="20" fill="#fbbf24" />

//                   {/* Text inside the circle */}
//                   <text
//                     x="25"
//                     y="30"
//                     fill="white"
//                     fontSize="20px"
//                     fontWeight="bold"
//                     textAnchor="middle"
//                   >
//                     {data.risk_status.open}
//                   </text>
//                 </svg>
//                 <p>open</p>
//               </div>
//               <div className="risk-status-bar">
//                 <svg width="70" height="70" viewBox="0 0 50 50">
//                   {/* Circle */}
//                   <circle cx="25" cy="25" r="20" fill="red" />

//                   {/* Text inside the circle */}
//                   <text
//                     x="25"
//                     y="30"
//                     fill="white"
//                     fontSize="20px"
//                     fontWeight="bold"
//                     textAnchor="middle"
//                   >
//                     {data.risk_status.overdue}
//                   </text>
//                 </svg>
//                 <p>overdue</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/*--------speedometer and boxes-----------*/}

//       <div>
//         <RiskDashboard
//           heatmapData={data.risk_score.heatmap_data}
//           riskLabel={data.risk_score.label}
//           riskScore={data.risk_score.score}
//         />
//       </div>
//     </>
//   );
// };

// export default Dashboard;
import React from "react";
import { useState, useEffect } from "react";
import Slider from "./Slider";
import Navbar from "./Navbar";
import Card from "./Card"; // Importing the Card component
import { Grid, Typography, Box } from "@mui/material";
import RiskDashboard from "./RiskDashboard";
import axios from "axios";
import Loading from "./Loading";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { faHome, faUsers, faCog, faTachometerAlt, faExclamationTriangle,faClipboardCheck, faChartBar, faFileExport  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    case "critical":
      return "#d32f2f"; // Red
    case "high":
      return "#ff5722"; // Orange
    case "medium":
      return "#ff9800"; // Yellow
    case "low":
      return "#ffeb3b"; // Light Yellow
    case "no Risk":
      return "#4caf50"; // Green
    default:
      return "#ccc"; // Default Gray
  }
};

const getDashboardData = async () => {
  const res = await axios.get("https://addminwebworld.com/laravel/api/dashboard-data");
  return res.data;
};
  // Function to fetch dashboard data
  const getDashboardresponse = async (days) => {
    
    try {
      const res = await axios.get(`https://addminwebworld.com/laravel/api/dashboard-data-days`, {
        params: { nodays: days }, // Sending nodays as a query parameter
      });
      return res.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  const [types, setTypes] = useState([]);

    const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");
  const [query, setQuery] = useState("");

  const [selected3, setSelected3] = useState("7 days"); // Default to "Last 7 days"

  const lastdays = async (e) => {
    const newDays = e.target.value;
    setSelected3(newDays);
    
    const dashboardData = await getDashboardresponse(newDays);
    if (dashboardData?.success) {
      setData(dashboardData.data);
    }
  };

  const handleRiskAssessment = (event) => {
    setSelected(event.target.value);
  };
  const bussinessunit = (event) => {
    setSelected2(event.target.value);
  };

  const fetch = async () => {
    try {
      const dashboardData = await getDashboardData();
      if (dashboardData.success) {
        setData(dashboardData.data);
        const uniqueTypes = Object.values(
          dashboardData.data.risks.reduce((acc, r) => {
            if (!acc[r.type]) {
              acc[r.type] = { name: r.type, color: getColor(r.type), count: 0 };
            }
            acc[r.type].count += 1;
            return acc;
          }, {})
        );

        setTypes(uniqueTypes);
      }
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

  const renderLabel = ({ name }) => `${name}`;
  console.log(types);
  return (
    <>
      <Navbar />
      <div className="riskselector">
       <select value={selected} onChange={handleRiskAssessment} className="dropdown">
         <option value="">Risk Assessment</option>
         <option value="All Assessment">All Assessments</option>
         <option value="Recent Assessement">Recent Assessements</option>
         <option value="Critical Assessment">Critical Assessements</option>
        </select>
        {/* <p>Selected: {selected}</p> */}
        <select value={selected2} onChange={bussinessunit} className="dropdown left">
          <option value="">Site Code/Business Unit</option>
          <option value="All Assessment">All Units</option>
          <option value="Recent Assessement">Business Unit 1</option>
         <option value="Critical Assessment">Business Unit 2</option>
       </select>
       {/* <p>Selected: {selected}</p> */}
        <div className="search-container">
  <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
   </svg>
         <input
        type="text"
        placeholder="Search risks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-bar"
        />
    </div>

    <select value={selected3} onChange={lastdays} className="dropdown">
          <option value="Last24hours">Last 24 hours</option>
          <option value="Last7days">Last 7 days</option>
          <option value="Last30days">Last 30 days</option>
          <option value="90days">Last 90 days</option>
        </select>
     <button className="exportbtn"><FontAwesomeIcon icon={faFileExport}  />Export</button>

      </div>
      
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
            <div className="distribution-chat-container">
              <PieChart width={300} height={250}>
                <Pie
                  data={types}
                  // cx={0}
                  // cy={0}
                  label={renderLabel}
                  innerRadius={40}
                  outerRadius={60}
                  fill="#8884d8"
                  paddingAngle={3}
                  dataKey="count"
                >
                  {types.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </div>
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
          average_risk_percentage={data.risk_score.average_risk_percentage}
        />
      </div>
    </>
  );
};

export default Dashboard;