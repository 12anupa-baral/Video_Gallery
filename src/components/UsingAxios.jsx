// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const Axios = () => {
//   const [meals, setMeals] = useState([0]);

//   useEffect(() => {
//     axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
//       .then((res) => {
//         setMeals(res.data.meals);
//       })
//       .catch((error) => {
//         console.error('Error fetching meals:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {Array.isArray(meals) && meals.map((meal) => (
//         <img key={meal.idMeal} src={meal.strMealThumb} alt={meal.strMeal} width={400} />
//       ))}
//     </div>
//   );
// }

// export default Axios;
