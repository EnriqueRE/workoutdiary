function Exercise(props) { 

  let exercise = props.exercise;

  return (
    <li className="exercise">
      <h4>{exercise.name}</h4>
      <div className="exercise-content">
        <img
          alt="exercise-img"
          src="http://placecorgi.com/150"
          className="exercise-image"
        />
        <div className="exercise-data">
          <p>
            <strong>Duration: </strong>
            {exercise.time} <br />
            <strong>Type: </strong>
            {exercise.type}
            <br />
            <strong>Weight: </strong>
            {exercise.weight}
            <br />
            <strong>Reps-per-round: </strong>
            {exercise.rpr}
            <br />
            <strong>Rounds: </strong>
            {exercise.rounds}
            <br />
          </p>
        </div>
      </div>
    </li>
  );
}

export default Exercise;