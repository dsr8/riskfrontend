import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";


const riskScore = 6; // Fixed score to "Medium"
const riskLabel = "Medium"; // Fixed risk label
const heatmapData = Array.from({ length: 25 }, (_, i) => ({
  x: (i % 5) + 1,
  y: Math.floor(i / 5) + 1,
  active: i === 11, // Fixed position for "Medium" (row 3, column 2)
}));

const RiskDashboard = () => {
  return (
    <>
    <h1 className="risk-name">Calculated Risk</h1>
    <Card sx={{ maxWidth: 600, textAlign: "center", p: 2, m: "auto", backgroundColor: "#FFF8E1", borderRadius: 3 }}>
      <CardContent>
        {/* <Typography variant="subtitle1" fontWeight={600}>
          Calculated Risk
        </Typography> */}
       <div className="risk-header">
        {/* Speedometer (Radial Gauge) */}
        <Box sx={{ position: "relative", height: 160, display: "flex", justifyContent: "center" }}>
          <ResponsiveContainer width="80%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="100%"
              innerRadius="80%"
              outerRadius="100%"
              barSize={15}
              startAngle={180}
              endAngle={0}
              data={[
                { value: 25, fill: "#FFFFFF" }, // Full white background
                { value: riskScore, fill: "#FFB400" }, // Colored risk score
              ]}
            >
              <PolarAngleAxis type="number" domain={[0, 25]} tick={false} axisLine={false} />
              <RadialBar minAngle={15} clockWise dataKey="value" />
            </RadialBarChart>
          </ResponsiveContainer>
          {/* Centered Score */}
          <Box sx={{ position: "absolute", bottom: 14, textAlign: "center", width: "100%" }}>
            <Typography variant="h4" color="#FF6F00">{riskScore}</Typography>
            <Typography variant="body1">{riskLabel} Score</Typography>
          </Box>
        </Box>

        {/* Heatmap Grid */}
        <Box sx={{ mt: 3, p: 2, backgroundColor: "#FFF3CD", borderRadius: 2 }}>
          <Grid container spacing={0.5} sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", width: 180, mx: "auto" }}>
            {heatmapData.map((cell, index) => (
              <Box
                key={index}
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: cell.active ? "#FFB400" : "#EEE",
                  borderRadius: 1,
                }}
              />
            ))}
          </Grid>
          <Typography variant="caption">Probability vs Consequence</Typography>
        </Box>
</div>
        {/* Probability & Consequence Display */}
        {/* <Box sx={{ textAlign: "left", mt: 3 }}>
          <Typography variant="subtitle1">Probability</Typography>
          <Typography variant="body2">
            <Box component="span" sx={{ backgroundColor: "#FFB400", p: 1, borderRadius: 1 }}>
              3
            </Box> High Probability
          </Typography>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>Consequence</Typography>
          <Typography variant="body2">
            <Box component="span" sx={{ backgroundColor: "#FFB400", p: 1, borderRadius: 1 }}>
              2
            </Box> Medium Consequence
          </Typography>
        </Box> */}
      </CardContent>
    </Card>
    {/* Probability & Consequence Display */}
    <div className="risk-bottom">
    <Box sx={{ textAlign: "left", mt: 3 }}>
          <Typography variant="subtitle1">Probability</Typography>
          <Typography variant="body2">
            <Box component="span" sx={{ backgroundColor: "#FFB400", p: 1, borderRadius: 1 }}>
              3
            </Box> High Probability
          </Typography>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>Consequence</Typography>
          <Typography variant="body2">
            <Box component="span" sx={{ backgroundColor: "#FFB400", p: 1, borderRadius: 1 }}>
              2
            </Box> Medium Consequence
          </Typography>
        </Box>
        </div>
    </>
  );
};

export default RiskDashboard;
