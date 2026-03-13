import { useHabits } from "../context/HabitContext";
import HabitCard from "../components/HabitCard";

export default function Home({ onAddHabit }) {
  const { habits } = useHabits();
  const today = new Date().toISOString().split("T")[0];
  const completed = habits.filter(h => h.completedDates.includes(today)).length;

  return (
    <div className="max-w-lg mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Habit Tracker</h1>
          <p className="text-gray-500 text-sm mt-1">Acompanhe seus hábitos diários</p>
        </div>
        <button
          onClick={onAddHabit}
          className="bg-indigo-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-indigo-600 transition"
        >
          + Novo
        </button>
      </div>

      {/* Resumo do dia */}
      {habits.length > 0 && (
        <p className="text-sm text-gray-500 mb-4">
          ✅ {completed} de {habits.length} hábitos concluídos hoje
        </p>
      )}

      {/* Lista de hábitos */}
      <div className="flex flex-col gap-3">
        {habits.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-5xl mb-4">🌱</p>
            <p className="font-medium">Nenhum hábito ainda</p>
            <p className="text-sm">Clique em "+ Novo" para começar!</p>
          </div>
        ) : (
          habits.map(habit => (
            <HabitCard key={habit.id} habit={habit} />
          ))
        )}
      </div>
    </div>
  );
}