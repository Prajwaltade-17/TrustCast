import React from "react";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-white text-2xl mb-6">Dashboard Content</h1>

      <DashboardCard
        title="Network Security Monitoring"
        description="Real-time monitoring of network traffic and device trust scores."
      />
    </div>
  );
};

export default Dashboard;