import "./Library.css";
import Program  from "./Program/Program";
function Library() {

  let prog = {
    id: 1,
    name: "Tetris Program",
    description:
      "Basic training program created for getting measurable and constant improvements. this is a highly customizable workout",
    schedule: {
      active: "Monday, Tuesday, Thursday, Friday",
      rest: "Wednesday, Saturday, Sunday",
    },
    equipment: ['Kettlebells', 'Mace']
  };

  return (
    <div className="library">
      <ul className="workouts-list">
        <li>Kettlebells</li>
        <li>Sandbag</li>
        <li>Two hand club</li>
        <li>One hand club</li>
        <li>Mace</li>
      </ul>

      <section>
        <Program program={ prog }/>
      </section>
    </div>
  );
}

export default Library;
