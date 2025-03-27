// import React, { useState } from "react";
// import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
// import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";

// // const riskScore = 10; // Fixed score to "Medium"
// // const riskLabel = "Low"; // Fixed risk label
// // const heatmapData = Array.from({ length: 25 }, (_, i) => ({
// //   x: (i % 5) + 1,
// //   y: Math.floor(i / 5) + 1,
// //   active: i === 11, // Fixed position for "Medium" (row 3, column 2)
// // }));

// const RiskDashboard = ({heatmapData,riskLabel,riskScore}) => {
//   console.log("🚀 ~ RiskDashboard ~ heatmapData:", heatmapData)

//   return (
//     <>
//     <h1 className="risk-name">Calculated Risk</h1>
//     <Card sx={{ maxWidth: 600, textAlign: "center", p: 2, m: "auto", backgroundColor: "#FFF8E1", borderRadius: 3 }}>
//       <CardContent>
//         {/* <Typography variant="subtitle1" fontWeight={600}>
//           Calculated Risk
//         </Typography> */}
//        <div className="risk-header">
//         {/* Speedometer (Radial Gauge) */}
//         <Box sx={{ position: "relative", height: 160, display: "flex", justifyContent: "center" }}>
//           <ResponsiveContainer width="80%" height="100%">
//             <RadialBarChart
//               cx="50%"
//               cy="100%"
//               innerRadius="80%"
//               outerRadius="100%"
//               barSize={15}
//               startAngle={180}
//               endAngle={0}
//               data={[
//                 { value: 25, fill: "#FFFFFF" }, // Full white background
//                 { value: riskScore, fill: "#FFB400" }, // Colored risk score
//               ]}
//             >
//               <PolarAngleAxis type="number" domain={[0, 25]} tick={false} axisLine={false} />
//               <RadialBar minAngle={15} clockWise dataKey="value" />
//             </RadialBarChart>
//           </ResponsiveContainer>
//           {/* Centered Score */}
//           <Box sx={{ position: "absolute", bottom: -30, textAlign: "center", width: "100%" }}>
//             <Typography variant="h4" color="#FF6F00">{riskScore}</Typography>
//             <Typography variant="body1">{riskLabel} </Typography>
//             <Typography sx={{fontSize:15}} variant="body1">{riskLabel} Score</Typography>
//           </Box>
//         </Box>

//         {/* Heatmap Grid */}
//         <Box sx={{ mt: 3, p: 2, backgroundColor: "#FFF3CD", borderRadius: 2 }}>
//           <Grid container spacing={0.5} sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", width: 180, mx: "auto" }}>
//             {heatmapData.map((cell, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   width: 30,
//                   height: 30,
//                   backgroundColor: cell.active ? "#FFB400" : "#EEE",
//                   borderRadius: 1,
//                 }}
//               />
//             ))}
//           </Grid>
//           <Typography variant="caption">Probability vs Consequence</Typography>
//         </Box>
// </div>
//         {/* Probability & Consequence Display */}
//         {/* <Box sx={{ textAlign: "left", mt: 3 }}>
//           <Typography variant="subtitle1">Probability</Typography>
//           <Typography variant="body2">
//             <Box component="span" sx={{ backgroundColor: "#FFB400", p: 1, borderRadius: 1 }}>
//               3
//             </Box> High Probability
//           </Typography>

//           <Typography variant="subtitle1" sx={{ mt: 2 }}>Consequence</Typography>
//           <Typography variant="body2">
//             <Box component="span" sx={{ backgroundColor: "#FFB400", p: 1, borderRadius: 1 }}>
//               2
//             </Box> Medium Consequence
//           </Typography>
//         </Box> */}
//       </CardContent>
//     </Card>
//     {/* Probability & Consequence Display */}
//     <div className="risk-bottom">
//     <Box sx={{ textAlign: "left", mt: 3 }}>
//           <Typography variant="subtitle1">Probability</Typography>
//           <Typography variant="body2">
//             <Box component="span" sx={{ backgroundColor: "#FFB400", p: 1, borderRadius: 1 }}>
//               3
//             </Box> High Probability
//           </Typography>

//           <Typography variant="subtitle1" sx={{ mt: 2 }}>Consequence</Typography>
//           <Typography variant="body2">
//             <Box component="span" sx={{ backgroundColor: "#FFB400", p: 1, borderRadius: 1 }}>
//               2
//             </Box> Medium Consequence
//           </Typography>
//         </Box>
//         </div>
//     </>
//   );
// };

// export default RiskDashboard;
//here newwwww


// import React from "react";
// import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
// import { PieChart, Pie, Cell } from "recharts";

// const RADIAN = Math.PI / 180;

// const needle = (value, data, cx, cy, iR, oR, color) => {
//   let total = 0;
//   data.forEach((v) => {
//     total += v.value;
//   });
//   const ang = 180.0 * (1 - value / total);
//   const length = (iR + 2 * oR) / 3;
//   const sin = Math.sin(-RADIAN * ang);
//   const cos = Math.cos(-RADIAN * ang);
//   const r = 5;
//   const x0 = cx;
//   const y0 = cy;
//   const xba = x0 + r * sin;
//   const yba = y0 - r * cos;
//   const xbb = x0 - r * sin;
//   const ybb = y0 + r * cos;
//   const xp = x0 + length * cos;
//   const yp = y0 + length * sin;

//   return [
//     <circle key="circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
//     <path
//       key="needle"
//       d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
//       stroke="none"
//       fill={color}
//     />,
//   ];
// };

// const getPrimaryColor = (riskLabel) => {
//   const key = riskLabel.toLowerCase();
//   if (key === "critical") {
//     return "#FF0000";
//   } else if (key === "high") {
//     return "#FFFF00";
//   } else if (key === "medium") {
//     return "#FFA500";
//   } else {
//     return "#008000";
//   }
// };
// const getLightBackgroundColor = (riskLabel) => {
//   const key = riskLabel.toLowerCase();
//   if (key === "critical") {
//     return "rgba(255, 0, 0, 0.2)"; // Light Red
//   } else if (key === "high") {
//     return "rgba(255, 255, 0, 0.2)"; // Light Yellow
//   } else if (key === "medium") {
//     return "rgba(255, 165, 0, 0.2)"; // Light Orange
//   } else {
//     return "rgba(0, 128, 0, 0.2)"; // Light Green
//   }
// };


// const RiskDashboard = ({
//   heatmapData,
//   riskLabel,
//   riskScore,
//   average_risk_percentage,
// }) => {
//   const cx = 150;
//   const cy = 100;
//   const iR = 50;
//   const oR = 100;
//   const primaryColor = getPrimaryColor(riskLabel)
//   const secondaryColor = getLightBackgroundColor(riskLabel);
//   const data = [{ name: "Risk", value: 100, color: primaryColor }];

//   return (
//     <>
//       <h1 className="risk-name">Calculated Risk</h1>
//       <Card
//         sx={{
//           maxWidth: 600,
//           textAlign: "center",
//           p: 2,
//           m: "auto",
//           backgroundColor: secondaryColor,
//           borderRadius: 3,
//         }}
//       >
//         <CardContent sx={{ display: "flex" }}>
//           <div className="risk-header">
//             {/* Pie Chart with Needle */}
//             <Box
//               sx={{
//                 position: "relative",
//                 // height: 160,
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <PieChart width={300} height={140}>
//                 <Pie
//                   dataKey="value"
//                   startAngle={180}
//                   endAngle={0}
//                   data={data}
//                   cx={cx}
//                   cy={cy}
//                   innerRadius={iR}
//                   outerRadius={oR}
//                   fill="#8884d8"
//                   stroke="none"
//                 >
//                   {data.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                   ))}
//                 </Pie>
//                 {needle(
//                   average_risk_percentage,
//                   data,
//                   cx,
//                   cy,
//                   iR,
//                   oR,
//                   "#000"
//                 )}
//               </PieChart>
//             </Box>

//             {/* Risk Score and Label */}
//             <Box>
//               <Typography variant="h4" color={primaryColor}>
//                 {average_risk_percentage}
//               </Typography>
//               <Typography variant="body1">{riskLabel}</Typography>
//               <Typography sx={{ fontSize: 15 }} variant="body1">
//                 {riskLabel} Score
//               </Typography>
//             </Box>
//           </div>

//           {/* Heatmap Grid */}
//           <Box
//             sx={{ mt: 3, p: 2, backgroundColor: "#FFF3CD", borderRadius: 2 }}
//           >
//             <Grid
//               container
//               spacing={0.5}
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(5, 1fr)",
//                 width: 180,
//                 mx: "auto",
//               }}
//             >
//               {heatmapData.map((cell, index) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     width: 40,
//                     height: 40,
//                     backgroundColor: cell.active ? primaryColor : "white",
//                     borderRadius: 1,
//                   }}
//                 />
//               ))}
//             </Grid>
//             <Typography variant="caption">
//               Probability vs Consequence
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>

//       {/* Probability & Consequence Display */}
//       <div className="risk-bottom">
//         <Box sx={{ textAlign: "left", mt: 3 }}>
//           <Typography variant="subtitle1">Probability</Typography>
//           <Typography variant="body2">
//             <Box
//               component="span"
//               sx={{ backgroundColor: "#FFB400", p: 1, borderRadius: 1 }}
//             >
//               3
//             </Box>{" "}
//             High Probability
//           </Typography>

//           <Typography variant="subtitle1" sx={{ mt: 2 }}>
//             Consequence
//           </Typography>
//           <Typography variant="body2">
//             <Box
//               component="span"
//               sx={{ backgroundColor: "#FFB400", p: 1, borderRadius: 1 }}
//             >
//               2
//             </Box>{" "}
//             Medium Consequence
//           </Typography>
//         </Box>
//       </div>
//     </>
//   );
// };

// export default RiskDashboard;


import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./RiskDashboard.css"; // Import CSS file

const RADIAN = Math.PI / 180;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx;
  const y0 = cy;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      key="needle"
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="none"
      fill={color}
    />,
  ];
};

const getPrimaryColor = (riskLabel) => {
  const key = riskLabel.toLowerCase();
  return key === "critical"
    ? "#FF0000"
    : key === "high"
    ? "#FFFF00"
    : key === "medium"
    ? "#FFA500"
    : "#008000";
};

const getLightBackgroundColor = (riskLabel) => {
  const key = riskLabel.toLowerCase();
  return key === "critical"
    ? "rgba(255, 0, 0, 0.2)"
    : key === "high"
    ? "rgba(255, 255, 0, 0.2)"
    : key === "medium"
    ? "rgba(255, 165, 0, 0.2)"
    : "rgba(0, 128, 0, 0.2)";
};

const RiskDashboard = ({
  heatmapData,
  riskLabel,
  riskScore,
  average_risk_percentage,
}) => {
  const cx = 150;
  const cy = 100;
  const iR = 50;
  const oR = 100;
  const primaryColor = getPrimaryColor(riskLabel);
  const secondaryColor = getLightBackgroundColor(riskLabel);
  const data = [{ name: "Risk", value: 100, color: primaryColor }];

  return (
    <>
      <h1 className="risk-name">Calculated Risk</h1>
      <div className="card" style={{ backgroundColor: secondaryColor }}>
        <div className="card-content">
          <div className="risk-header">
            {/* Pie Chart with Needle */}
            <div className="pie-container">
              <PieChart width={300} height={140}>
                <Pie
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  data={data}
                  cx={cx}
                  cy={cy}
                  innerRadius={iR}
                  outerRadius={oR}
                  fill="#8884d8"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                {needle(
                  average_risk_percentage,
                  data,
                  cx,
                  cy,
                  iR,
                  oR,
                  "#000"
                )}
              </PieChart>
            </div>

            {/* Risk Score and Label */}
            <div className="risk-info">
              <h2 style={{ color: primaryColor }}>{average_risk_percentage}</h2>
              <p>{riskLabel}</p>
              <p className="risk-score">{riskLabel} Score</p>
            </div>
          </div>

          {/* Heatmap Grid */}
          <div className="heatmap-container">
            <div className="heatmap-grid">
              {heatmapData.map((cell, index) => (
                <div
                  key={index}
                  className="heatmap-cell"
                  style={{
                    backgroundColor: cell.active ? primaryColor : "white",
                  }}
                />
              ))}
            </div>
            <p className="caption">Probability vs Consequence</p>
          </div>
        </div>
      </div>

      {/* Probability & Consequence Display */}
      <div className="risk-bottom">
        <div className="risk-section">
          <h3>Probability</h3>
          <p>
            <span className="badge">3</span> High Probability
          </p>

          <h3>Consequence</h3>
          <p>
            <span className="badge">2</span> Medium Consequence
          </p>
        </div>
      </div>
    </>
  );
};

export default RiskDashboard;