"use client"

import { MealContext } from '@/context/MealProvider'
import React, { useContext } from 'react'

const useMeal = () => {
     const meals = useContext(MealContext);
     return meals;
}

export default useMeal
