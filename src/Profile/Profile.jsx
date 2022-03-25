function Profile() { 

  let user = {
    name: "Dude Dudeson",
    username: "dude.dudeson@mail.com",
    goal: "build mass",
    email: "dude.dudeson@mail.com",
    birth: "01/01/01",
    weight: "80kg",
    height: "180cm",
    programs: [
      {
        id: 1,
        name: "Tetris Program",
        description:
          "Basic training program created for getting measurable and constant improvements. this is a highly customizable workout",
        schedule: {
          active: "Monday, Tuesday, Thursday, Friday",
          rest: "Wednesday, Saturday, Sunday",
        },
        equipment: ["Kettlebells", "Mace"],
        workCapacity: [
          {date: '01/01/22', workCapacity:'500 kg'}
        ]
      },
    ],
  };

  return (
    <div>
      <div className="profile-data">
        <img
          alt="exercise-img"
          src="http://placecorgi.com/250"
          className="exercise-image"
        />
        <h3>{user.name}</h3>
        <p>{user.username}</p>
      </div>
      <h2>Your data</h2>
      <div className="profile-details">
        <p>Goal: {user.goal}</p>
        <p>email: {user.email}</p>
        <p>birthdate: {user.birth}</p>
        <p>height: {user.height}</p>
        <p>weight: {user.weight}</p>

      </div>
      <div className="your-workouts">
        <h2>Your registered programs</h2>
        <ul>
          {user.programs.map(prog => { 
            return (
              <li key={prog.id}>
                <p>{prog.name}</p>
                <p>{prog.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Profile