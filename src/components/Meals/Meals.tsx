import React, { Suspense } from 'react'
import MealsList from '../MealsList/MealsList'

const Meals = () => {
     return (
          <Suspense fallback={<p>loading...</p>}>
               <MealsList />
          </Suspense>
     )
}

export default Meals
