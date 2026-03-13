import { useHabits } from "../context/HabitContext";

export default function HabitCard({ habit }) {
  const { toggleHabit } = useHabits();
  const today = new Date().toISOString().split("T")[0];
  const isDone = habit.completedDates.includes(today);

  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition cursor-pointer ${
        isDone
          ? "bg-indigo-50 border-indigo-300"
          : "bg-white border-gray-200 hover:border-indigo-200"
      }`}
      onClick={() => toggleHabit(habit.id)}
    >
      {/* Ícone */}
      <div className={`text-3xl w-12 h-12 flex items-center justify-center rounded-xl ${
        isDone ? "bg-indigo-100" : "bg-gray-100"
      }`}>
        {habit.icon}
      </div>

      {/* Info */}
      <div className="flex-1">
        <p className={`font-semibold text-lg ${isDone ? "text-indigo-700 line-through" : "text-gray-800"}`}>
          {habit.name}
        </p>
        <p className="text-xs text-gray-400">
          {habit.frequency === "daily" ? "Diário" : "Semanal"}
        </p>
      </div>

      {/* Checkbox */}
      <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition ${
        isDone
          ? "bg-indigo-500 border-indigo-500 text-white"
          : "border-gray-300"
      }`}>
        {isDone && <span className="text-sm">✓</span>}
      </div>
    </div>
  );
}