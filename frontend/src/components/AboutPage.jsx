import React from 'react';
import { ArrowLeft, Shield, Activity, Database, Lock, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutPage = ({ onNavigate }) => {
  const navigate = useNavigate();
  const features = [
    {
      icon: Activity,
      title: "Real-Time Traffic Analysis",
      desc: "Monitor network traffic logs and detect abnormal or suspicious activities in real time."
    },
    {
      icon: Database,
      title: "Machine Learning Detection",
      desc: "Identify cyber attacks using trained machine learning models on network datasets."
    },
    {
      icon: Lock,
      title: "Threat Classification",
      desc: "Classify different types of network attacks based on traffic behavior and log analysis."
    },
    {
      icon: Zap,
      title: "Device Trust Scoring",
      desc: "Assign dynamic trust scores to devices based on their network behavior patterns."
    }
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-[#0b0202]" />

      <div className="absolute inset-0">
        <div className="absolute top-20 -right-10 h-80 w-80 rounded-full bg-red-700/25 blur-[120px]" />
        <div className="absolute bottom-10 left-4 h-72 w-72 rounded-full bg-red-500/20 blur-[120px]" />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-8 py-6 bg-gradient-to-b from-black/95 to-transparent">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-red-600/20 p-2 text-red-300 border border-red-600/40">
            <Shield className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold text-white">TrustCast</span>
        </div>

        {/* <button
          onClick={() => onNavigate('/home')}
          className="rounded-xl border border-red-900/40 px-4 py-2 text-sm font-semibold text-gray-200 hover:bg-red-600/20 transition-colors"
        >
          Back to Home
        </button> */}
      </nav>

      <div className="relative z-10 max-w-5xl mx-auto px-8 py-16">

        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <h1 className="text-5xl font-black text-white mb-4">
          About TrustCast
        </h1>

        <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-3xl">
          TrustCast is an intelligent network security analysis platform designed to
          detect malicious activities and assess the trustworthiness of devices
          within a network. Using machine learning and log-based behavioral
          analysis, the system monitors network traffic, identifies anomalies,
          and calculates dynamic trust scores for connected devices to help
          organizations detect threats early and maintain secure network
          environments.
        </p>

        <div className="space-y-10 mb-16">

          <div className="rounded-3xl border border-red-900/30 bg-black/50 p-8 shadow-[0_40px_120px_rgba(220,38,38,0.12)] backdrop-blur-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Our Technology
            </h2>

            <p className="text-gray-300 leading-relaxed">
              TrustCast uses advanced machine learning techniques to analyze
              network traffic logs and detect potential cyber threats. The
              system processes large-scale network datasets, applies
              preprocessing and balancing techniques such as SMOTE, and trains
              deep learning models to classify attack types and detect abnormal
              behavior. By analyzing traffic patterns and device activities,
              the platform generates trust scores that help security teams
              identify suspicious devices and mitigate risks quickly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-900/60 bg-black/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur"
                >
                  <feature.icon className="h-8 w-8 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-900/60 bg-black/50 p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Use Cases
            </h2>

            <ul className="space-y-4 text-gray-300">

              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span>Enterprise network intrusion detection systems</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span>Detection of malicious traffic patterns in corporate networks</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span>Monitoring device behavior through network log analysis</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span>Early identification of cyber attacks and abnormal network activity</span>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;