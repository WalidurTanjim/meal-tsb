import { Meal } from "@/types/meal";

// getMeals
export const getMeals = async(): Promise<Meal[]> => {
     try{
          const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);

          if(!res.ok) {
               throw new Error("Failed to fetch meals")
          }

          return res.json();
     }catch(err) {
          console.error(err);
          throw err;
     }
}
