export default function Home({ onAddHabit }) {
  return (
    <div className="max-w-lg mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
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
    </div>
  );
}