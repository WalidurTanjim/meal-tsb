"use client"

import { MealContext } from '@/context/MealProvider'
import React, { useContext } from 'react'

const useMeal = () => {
     const context = useContext(MealContext);

     if (context === undefined) {
          throw new Error("useMeal must be used within a MealProvider");
     }
     
     return context;
}

export default useMeal
