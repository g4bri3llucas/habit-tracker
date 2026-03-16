export default function ProgressBar({ completed, total }) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  const getColor = () => {
    if (percentage === 100) return "bg-green-500";
    if (percentage >= 50) return "bg-indigo-500";
    return "bg-orange-400";
  };

  const getMessage = () => {
    if (total === 0) return "Adicione hábitos para começar!";
    if (percentage === 100) return "🎉 Parabéns! Todos os hábitos concluídos!";
    if (percentage >= 50) return "💪 Boa! Continue assim!";
    return "🌅 Vamos lá! O dia ainda é longo!";
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-200 mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-700">Progresso de hoje</span>
        <span className="text-2xl font-bold text-indigo-600">{percentage}%</span>
      </div>

      {/* Barra */}
      <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
        <div
          className={`h-4 rounded-full transition-all duration-500 ${getColor()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Mensagem */}
      <p className="text-sm text-gray-500 mt-3">{getMessage()}</p>
    </div>
  );
}