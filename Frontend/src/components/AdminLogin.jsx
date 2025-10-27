import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const backendUrl = "http://localhost:5001";
      const res = await fetch(`${backendUrl}/api/sessions`, {
        headers: { "x-admin-key": password },
      });
      if (!res.ok) throw new Error("Invalid admin password");
      sessionStorage.setItem("isAdmin", "true");
      sessionStorage.setItem("adminKey", password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Invalid admin password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow p-6 w-full max-w-sm">
        <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Admin Login
        </h1>
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded text-blue-700 text-sm">
          <strong>Admin Password:</strong> 567890
        </div>
        {error && (
          <div className="mb-3 p-2 text-sm rounded bg-rose-50 text-rose-700 border border-rose-200">
            {error}
          </div>
        )}
        <form onSubmit={submit}>
          <label className="block text-sm text-gray-700 mb-1">
            Admin Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-4"
            placeholder="Enter admin password"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white rounded px-3 py-2"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
