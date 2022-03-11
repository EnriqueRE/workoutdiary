import './home.css'
function HomeScreen() { 

  return (
    <div className="home">

      <section className="welcome-section">
        <h1 className="welcome-message">Welcome Dude</h1>
      </section>

      <section className="history-sections">
        <ul className="workouts">
          <li className="todays-workout card">
            <h3>Todays workout</h3>
            <p>
              <strong>Duration: </strong> 60 minutes
            </p>
            <p>
              <strong>Exercises:</strong>
              <ul>
                <li>
                  <p>Turkish getups</p>
                  <p>Reps: 5</p>
                  <p>Sets: 5</p>
                  <p>Weight: 16kg</p>
                  <p>Work capacity (sets x reps x weight): 400kg </p>
                </li>
                <li>
                  <p>Swings</p>
                  <p>Reps: 5</p>
                  <p>Sets: 5</p>
                  <p>Weight: 16kg</p>
                  <p>Work capacity (sets x reps x weight): 400kg </p>
                </li>
              </ul>
            </p>
          </li>

          <li className="workout card">
            <h3>Last workout</h3>
            <p>
              <strong>Duration: </strong> 60 minutes
            </p>
            <p>
              <strong>Exercises:</strong>
              <ul>
                <li>
                  <p>Turkish getups</p>
                  <p>Reps: 5</p>
                  <p>Sets: 5</p>
                  <p>Weight: 16kg</p>
                  <p>Work capacity (sets x reps x weight): 400kg </p>
                </li>
                <li>
                  <p>Swings</p>
                  <p>Reps: 5</p>
                  <p>Sets: 5</p>
                  <p>Weight: 16kg</p>
                  <p>Work capacity (sets x reps x weight): 400kg </p>
                </li>
              </ul>
            </p>
          </li>
        </ul>
      </section>
    </div>
  );

}

export default HomeScreen;