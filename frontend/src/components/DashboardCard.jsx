import React from "react";
import { Zap, Lock, Database } from "lucide-react";

const DashboardCard = ({ title, description }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 mb-8">

      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>

      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
        {description}
      </p>

      {/* Feature Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Zap className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">
              Real-Time Analysis
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Instant threat detection and trust score updates
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <Lock className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">
              Secure by Design
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Enterprise-grade security for network infrastructure
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Database className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">
              ML-Powered
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Advanced machine learning algorithms
            </p>
          </div>
        </div>

      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <p className="text-sm text-slate-400">Total Devices</p>
          <h3 className="text-3xl font-bold text-white mt-2">128</h3>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <p className="text-sm text-slate-400">Active Alerts</p>
          <h3 className="text-3xl font-bold text-red-500 mt-2">7</h3>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <p className="text-sm text-slate-400">Anomalies Detected</p>
          <h3 className="text-3xl font-bold text-yellow-400 mt-2">23</h3>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <p className="text-sm text-slate-400">Trust Score Avg</p>
          <h3 className="text-3xl font-bold text-green-400 mt-2">92%</h3>
        </div>

      </div>

      {/* System Status */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            Model Status
          </h3>
          <p className="text-slate-400">
            BiGRU-Attention anomaly detection model is running and monitoring traffic.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            Dataset Status
          </h3>
          <p className="text-slate-400">
            Latest dataset uploaded and processed successfully.
          </p>
        </div>

      </div>

    </div>
  );
};

export default DashboardCard;