import { Meal } from "@/types/meal";

// base url
const URL = process.env.NEXT_PUBLIC_MEAL_BASE_URL;
// console.log(URL)

// fetchMeals
export const fetchMeals = async(url: string): Promise<Meal[]> => {
     try{
          const res = await fetch(url);

          if(!res.ok) {
               throw new Error(`Network response was not ok: ${res.statusText}`)
          }

          const data = await res?.json();
          const meals = await data?.meals;
          return meals || [];
     }catch(err) {
          console.error("API fetch error:", err);
          throw err;
     }
}

// fetchMealsByName function
export const fetchMealsByName = async(name: string): Promise<Meal[]> => {
     return fetchMeals(`${URL}/search.php?s=${name}`);
}

// fetchMealByCategory
export const fetchMealByCategory = async(category: string): Promise<Meal[]> => {
     return fetchMeals(`${URL}/filter.php?c=${category}`);
}

// fetchMealByFirstLetter
export const fetchMealByFirstLetter = async(letter: string): Promise<Meal[]> => {
     return fetchMeals(`${URL}/search.php?f=${letter}`)
}

// fetchMealByArea
export const fetchMealByArea = async(area: string): Promise<Meal[]> => {
     return fetchMeals(`${URL}/filter.php?a=${area}`);
}

// fetchMealByID
export const fetchMealById = async(id: string): Promise<Meal | null> => {
     const meal = await fetchMeals(`${URL}/lookup.php?i=${id}`);;
     return meal?.length > 0 ? meal[0]: null
}
