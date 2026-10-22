import { fetchMealById } from '@/lib/fetcher';
import { Meal } from '@/types/meal';
import Link from 'next/link';
import React, { Suspense } from 'react';

interface MealParams {
     params: Promise<{
          idMeal: string;
     }>;
}

const DynamicMealDetails = async ({ params }: MealParams) => {
     const { idMeal } = await params;
     const dynamicMealById: Meal | null = await fetchMealById(idMeal);
     console.log(dynamicMealById);

     // যদি মিল বা ডেটা না পাওয়া যায়
     if (!dynamicMealById) {
          return (
               <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Meal Not Found</h2>
                    <p className="text-gray-500 mb-4">The meal you are looking for does not exist.</p>
                    <Link href="/" className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition-colors">
                         Back to Home
                    </Link>
               </div>
          );
     }

     // ইনগ্রেডিয়েন্টস এবং মেজারমেন্টগুলো ডায়নামিক্যালি অ্যারেতে রূপান্তর করার লজিক
     const ingredients: { ingredient: string; measure: string }[] = [];
     for (let i = 1; i <= 20; i++) {
          const ingredient = dynamicMealById[`strIngredient${i}` as keyof Meal] as string | null;
          const measure = dynamicMealById[`strMeasure${i}` as keyof Meal] as string | null;

          if (ingredient && ingredient.trim() !== "") {
               ingredients.push({
                    ingredient: ingredient,
                    measure: measure || "",
               });
          }
     }

     return (
          <div className="max-w-5xl mx-auto px-4 py-8">
               {/* Back Button */}
               <div className="mb-6">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors">
                         <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                         </svg>
                         Back to Meals
                    </Link>
               </div>

               {/* Top Section: Image & Basic Info */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Meal Thumbnail */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg h-[350px] md:h-[420px] bg-gray-100">
                         <img 
                              src={dynamicMealById.strMealThumb} 
                              alt={dynamicMealById.strMeal} 
                              className="w-full h-full object-cover"
                         />
                    </div>

                    {/* Meal Meta info */}
                    <div className="flex flex-col justify-between">
                         <div>
                              <div className="flex items-center gap-2 mb-3">
                                   {dynamicMealById.strCategory && (
                                        <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                                             {dynamicMealById.strCategory}
                                        </span>
                                   )}
                                   {dynamicMealById.strArea && (
                                        <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                                             {dynamicMealById.strArea} Cuisine
                                        </span>
                                   )}
                              </div>

                              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                                   {dynamicMealById.strMeal}
                              </h1>

                              {dynamicMealById.strTags && (
                                   <p className="text-sm text-gray-500 mb-4">
                                        <span className="font-semibold text-gray-700">Tags:</span> {dynamicMealById.strTags}
                                   </p>
                              )}
                         </div>

                         {/* Ingredients Section */}
                         <div className="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                              <h3 className="text-md font-bold text-gray-800 mb-3">Ingredients</h3>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 max-h-44 overflow-y-auto pr-1">
                                   {ingredients.map((item, index) => (
                                        <li key={index} className="flex items-center justify-between bg-white px-3 py-1.5 rounded-md shadow-sm">
                                             <span className="font-medium text-gray-800">• {item.ingredient}</span>
                                             <span className="text-orange-600 text-xs font-semibold">{item.measure}</span>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                    </div>
               </div>

               {/* Instructions Section */}
               <div className="mt-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Instructions</h2>
                    <div className="text-gray-600 leading-relaxed whitespace-pre-line space-y-3">
                         {dynamicMealById.strInstructions}
                    </div>
               </div>

               {/* YouTube Video Link */}
               {dynamicMealById.strYoutube && (
                    <div className="mt-8 text-center">
                         <a 
                              href={dynamicMealById.strYoutube} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-xl shadow hover:bg-red-700 transition-colors"
                         >
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              </svg>
                              Watch Video Recipe
                         </a>
                    </div>
               )}
          </div>
     );
};

const DynamicMealById = async ({ params }: MealParams) => {
     return (
          <div>
               <Suspense fallback={<p>Dynamic meal by id is loading...</p>}>
                    <DynamicMealDetails params={params} />
               </Suspense>
          </div>
     );
};

export default DynamicMealById;