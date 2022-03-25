import Exercise from "./Exercise/Exercise";
function Program(props) {

  let program = props.program;

  // TODO: get this from server
  let execises = [
    {
      id: 0,
      name: "Kettlebell swing",
      time: "10 minutes",
      type: "EMOM",
      weight: "16 kg",
      rpr: "10 reps", // reps per round
      rounds: "10 rounds",
    },
    {
      id: 1,
      name: "Turkish getups",
      time: "10 minutes",
      type: "Reps",
      weight: "17 kg",
      rpr: "5 reps per side", // reps per round
      rounds: "5 rounds",
    },
  ];


  return (
    <div>
      <div className="plan-details">
        <h2>{program.name}</h2>
        <h4>Description</h4>
        <p>
          {program.description}
        </p>
        <h4>Details</h4>
        <ul>
          <li>
            <strong>Active days: </strong> {program.schedule.active}
          </li>
          <li>
            <strong>Rest days: </strong> {program.schedule.rest}
          </li>
          <li>
            <strong>Equipment: </strong>{program.equipment.join(', ')}
          </li>
        </ul>
      </div>
      <div className="exercises">
        <ul className="exercise-list">
          {execises.map((ex) => (
            <Exercise exercise={ex} key={ex.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Program;
