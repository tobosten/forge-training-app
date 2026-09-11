import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

/*    
             name: "",
             exercises: [{
                 name: "",
                 id: "",
                 type: "",
                 sets: "",
                 reps: "",
                 notes: "",
                 dates: [
                  {
                    date: "",
                    completed: false,
                  }
               ],
             }],  
*/

const useWorkoutStore = create(
  persist(
    set => ({
      selectedWorkout: null,
      setSelectedWorkout: (selectedWorkout) => set({ selectedWorkout }),

      workoutList: null,
      setWorkoutList: (workoutList) => set({ workoutList }),

      nextUpWorkout: null,
      setNextUpWorkout: (nextUpWorkout) => set({ nextUpWorkout }),

      workoutHistory: [],
      setWorkoutHistory: (workoutHistory) => set(state => ({ workoutHistory: [...state.workoutHistory, ...workoutHistory] })),

      addExercise: {},
      setAddExercise: (addExercise) => set({ addExercise }),

      addedExercises: [],
      setAddedExercises: (newExercises) => set({ addedExercises: newExercises }),

    }), {
    name: 'forge-workout-storage',
    storage: createJSONStorage(() => AsyncStorage),
    partialize: (state) => ({
      selectedWorkout: state.selectedWorkout,
      workoutList: state.workoutList,
      nextUpWorkout: state.nextUpWorkout,
      workoutHistory: state.workoutHistory,
    })
  }),
);

export default useWorkoutStore;

