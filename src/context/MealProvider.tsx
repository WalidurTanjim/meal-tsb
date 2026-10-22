"use client"
import { Category } from '@/types/category';
import { Meal } from '@/types/meal';
import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

interface MealContextInterface {
     meals: Meal[];
     setMeals: Dispatch<SetStateAction<Meal[]>>;

     mealCategories: Category[];
     setMealCategories: Dispatch<SetStateAction<Category[]>>;

     selectedCategory: string;
     setSelectedCategory: Dispatch<SetStateAction<string>>;

     categoryLoading: boolean;
     setCategoryLoading: Dispatch<SetStateAction<boolean>>;
}

export const MealContext = createContext<MealContextInterface | undefined>(undefined);

const MealProvider = ({ children }: { children: React.ReactNode}) => {
     const [meals, setMeals] = useState<Meal[]>([]);
     const [mealCategories, setMealCategories] = useState<Category[]>([]);
     const [selectedCategory, setSelectedCategory] = useState<string>("Seafood");
     const [categoryLoading, setCategoryLoading] = useState<boolean>(true);

     const value = {
          meals, setMeals,
          mealCategories, setMealCategories,
          selectedCategory, setSelectedCategory,
          categoryLoading, setCategoryLoading
     }

     return <MealContext.Provider value={value}>{ children }</MealContext.Provider>
}

export default MealProvider
