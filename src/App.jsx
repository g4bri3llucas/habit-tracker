import { useState } from "react";
import Home from "./pages/Home";
import HabitForm from "./components/HabitForm";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Home onAddHabit={() => setShowForm(true)} />
      {showForm && <HabitForm onClose={() => setShowForm(false)} />}
    </div>
  );
}