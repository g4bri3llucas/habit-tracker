import { useState } from "react";
import { useHabits } from "../context/HabitContext";

const ICONS = ["💧", "📚", "🏋️", "🧘", "🎯", "🍎", "😴", "✍️", "🚶", "💻"];

export default function HabitForm({ onClose }) {
  const { addHabit } = useHabits();
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("💧");
  const [frequency, setFrequency] = useState("daily");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    addHabit({ name, icon, frequency });
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Novo Hábito</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Nome */}
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">Nome</label>
            <input
              type="text"
              placeholder="Ex: Beber água"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Ícone */}
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">Ícone</label>
            <div className="flex flex-wrap gap-2">
              {ICONS.map(i => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIcon(i)}
                  className={`text-2xl p-2 rounded-lg border-2 transition ${
                    icon === i
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>

          {/* Frequência */}
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">Frequência</label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setFrequency("daily")}
                className={`flex-1 py-2 rounded-lg border-2 font-medium transition ${
                  frequency === "daily"
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                    : "border-gray-300 text-gray-600 hover:border-gray-400"
                }`}
              >
                Diário
              </button>
              <button
                type="button"
                onClick={() => setFrequency("weekly")}
                className={`flex-1 py-2 rounded-lg border-2 font-medium transition ${
                  frequency === "weekly"
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                    : "border-gray-300 text-gray-600 hover:border-gray-400"
                }`}
              >
                Semanal
              </button>
            </div>
          </div>

          {/* Botões */}
          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 py-2 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
            >
              Criar Hábito
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}