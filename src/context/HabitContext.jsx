import { createContext, useContext, useState, useEffect } from "react";

const HabitContext = createContext();

export function HabitProvider({ children }) {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  function addHabit(habit) {
    setHabits([...habits, {
      id: Date.now(),
      name: habit.name,
      icon: habit.icon,
      frequency: habit.frequency,
      completedDates: [],
      createdAt: new Date().toISOString(),
    }]);
  }

  function toggleHabit(id) {
    const today = new Date().toISOString().split("T")[0];
    setHabits(habits.map(habit => {
      if (habit.id !== id) return habit;
      const alreadyDone = habit.completedDates.includes(today);
      return {
        ...habit,
        completedDates: alreadyDone
          ? habit.completedDates.filter(d => d !== today)
          : [...habit.completedDates, today],
      };
    }));
  }

  function deleteHabit(id) {
    setHabits(habits.filter(habit => habit.id !== id));
  }

  function editHabit(id, updated) {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, ...updated } : habit
    ));
  }

  return (
    <HabitContext.Provider value={{ habits, addHabit, toggleHabit, deleteHabit, editHabit }}>
      {children}
    </HabitContext.Provider>
  );
}

export function useHabits() {
  return useContext(HabitContext);
}