import { useEffect, useState } from "react";

import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import DecisionDetails from "./pages/DecisionDetails";

function App() {
  // ================================
  // LOGIN STATE
  // ================================

  const [loggedIn, setLoggedIn] = useState(false);

  // ================================
  // CURRENT PAGE
  // ================================

  const [page, setPage] = useState("profile");

  // ================================
  // USER PROFILE
  // ================================

  const [profile, setProfile] = useState({
    name: "Rahul Sharma",
    risk: "Medium",
    goal: "Long-term wealth creation",
  });

  // ================================
  // BACKEND CONNECTION STATUS
  // ================================

  const [backendStatus, setBackendStatus] =
    useState("Connecting to STOX backend...");

  // ================================
  // CONNECT TO BACKEND
  // ================================

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend response failed");
        }

        return response.json();
      })
      .then((data) => {
        setBackendStatus(
          data.message || "STOX Backend Connected"
        );
      })
      .catch((error) => {
        console.error("Backend connection error:", error);

        setBackendStatus(
          "Backend connection failed"
        );
      });
  }, []);

  // ================================
  // LOGIN
  // ================================

  const handleLogin = (updatedProfile) => {
    setProfile(updatedProfile);

    setLoggedIn(true);

    setPage("dashboard");
  };

  // ================================
  // LOGOUT
  // ================================

  const handleLogout = () => {
    setLoggedIn(false);

    setPage("profile");
  };

  // ================================
  // PROFILE / LOGIN PAGE
  // ================================

  if (!loggedIn) {
    return (
      <Profile
        profile={profile}
        onLogin={handleLogin}
      />
    );
  }

  // ================================
  // DECISION DETAILS PAGE
  // ================================

  if (page === "decision") {
    return (
      <DecisionDetails
        profile={profile}
        onBack={() => setPage("dashboard")}
        onLogout={handleLogout}
      />
    );
  }

  // ================================
  // DASHBOARD
  // ================================

  return (
    <Dashboard
      profile={profile}
      onViewDetails={() =>
        setPage("decision")
      }
      onLogout={handleLogout}
      backendStatus={backendStatus}
    />
  );
}

export default App;