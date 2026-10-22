"use client"

import useMeal from "@/hooks/useMeal"
import { Meal } from "@/types/meal";
import MealCard from "../Meal/Meal";

const MealsList = () => {
     const { meals } = useMeal();
     // console.log(meals)

     return (
          <div className="px-2 md:px-5 lg:px-8 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
               {
                    meals?.map((meal: Meal) => <MealCard key={meal?.idMeal} meal={meal} />)
               }
          </div>
     )
}

export default MealsList
