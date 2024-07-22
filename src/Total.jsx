const Total = ({ parts }) => {
    const totalExercises = parts.reduce(
      (total, part) => total + part.exercises,
      0,
    );
    return <p>Total of {totalExercises} exercises</p>;
  };
  
  export default Total;
  