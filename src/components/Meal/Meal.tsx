import { Meal } from '@/types/meal';
import Image from 'next/image';
import Link from 'next/link';

const MealCard = ({ meal }: { meal: Meal }) => {
     const { idMeal, strMeal, strCategory, strArea, strMealThumb, strInstructions } = meal;

     return (
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100">
               {/* Meal Image Container */}
               <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image 
                         src={strMealThumb} 
                         alt={strMeal} 
                         width={500}
                         height={500}
                         className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    {strCategory && (
                         <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                              {strCategory}
                         </span>
                    )}
               </div>

               {/* Content Container */}
               <div className="p-5 flex flex-col flex-grow">
                    {/* Area / Country */}
                    {strArea && (
                         <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">
                              {strArea} Cuisine
                         </span>
                    )}

                    {/* Meal Title */}
                    <h3 className="text-lg font-bold text-gray-800 line-clamp-1 mb-2">
                         {strMeal}
                    </h3>

                    {/* Short Instructions Preview */}
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">
                         {strInstructions}
                    </p>

                    {/* Action Button / Link */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                         <span className="text-xs text-gray-400">ID: {idMeal}</span>
                         <Link 
                              href={`/meals/${idMeal}`} 
                              className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                         >
                              View Recipe 
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default MealCard;