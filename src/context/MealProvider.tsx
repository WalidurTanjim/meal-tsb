"use client"
import { fetchMealByFirstLetter } from '@/lib/fetcher';
import { Category } from '@/types/category';
import { Meal } from '@/types/meal';
import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'

interface MealContextInterface {
     meals: Meal[];
     setMeals: Dispatch<SetStateAction<Meal[]>>;

     loading: boolean;
     setLoading: Dispatch<SetStateAction<boolean>>;

     mealCategories: Category[];
     setMealCategories: Dispatch<SetStateAction<Category[]>>;

     selectedCategory: string;
     setSelectedCategory: Dispatch<SetStateAction<string>>;

     categoryLoading: boolean;
     setCategoryLoading: Dispatch<SetStateAction<boolean>>;
}

export const MealContext = createContext<MealContextInterface | undefined>(undefined);

const MealProvider = ({ children }: { children: React.ReactNode}) => {
     // all meals state
     const [meals, setMeals] = useState<Meal[]>([]);
     const [loading, setLoading] = useState<boolean>(true);

     // category meals state
     const [mealCategories, setMealCategories] = useState<Category[]>([]);
     const [selectedCategory, setSelectedCategory] = useState<string>("Seafood");
     const [categoryLoading, setCategoryLoading] = useState<boolean>(true);

     // fetch default meals
     useEffect(() => {
          const fetchDefaultMeals = async() => {
               try{
                    const data = await fetchMealByFirstLetter("a");
                    setMeals(data);
               }catch(err) {
                    console.error("Default fetch error:", err);
               }finally {
                    setLoading(false);
               }
          }

          fetchDefaultMeals();
     }, []);

     const value = {
          meals, setMeals,
          loading, setLoading,
          mealCategories, setMealCategories,
          selectedCategory, setSelectedCategory,
          categoryLoading, setCategoryLoading
     }

     return <MealContext.Provider value={value}>{ children }</MealContext.Provider>
}

export default MealProvider
