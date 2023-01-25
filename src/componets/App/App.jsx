import './App.css';

function App() {

  const salaries =  {
    Progger: { 
    salary: 1000, 
    tax: "15%" 
    },
    Tester: {
    salary: 1000,
    tax: "10%"
    }
    }

    const team = [
      {
      name: "Masha",
      specialization: "Progger" 
      },
      {
      name: "Vasya",
      specialization: "Tester"
      },
      {
      name: "Taras",
      specialization: "Tester"
      },
      ]

  function calculateTeamFinanceReport(salaries, team){
    console.log(salaries, team)
  }
  calculateTeamFinanceReport(salaries, team)

  return (
    <div className="App">
      <header className="App-header">
        <p>start app</p>
      </header>
    </div>
  );
}

export default App;
