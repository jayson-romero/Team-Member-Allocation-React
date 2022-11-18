
import Header from './components/Header';
import Employee from './components/Employee';
import Footer from './components/Footer';
import './App.css';
import { useState, useEffect} from "react"

function App() {
   // USE STATE  
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");

  const [employees, setEmployees] = useState (JSON.parse(localStorage.getItem('employeeList')) ||
   [{
        id: 1,
        fullName: "Jayson Romero",
        designation: "JavaScript developer",
        gender: "male",
        teamName: "TeamA"

     },
     {
        id: 2,
        fullName: "Jayson Romero",
        designation: "JavaScript developer",
        gender: "male",
        teamName: "TeamA"

     },
     {
        id: 3,
        fullName: "Jayson Romero",
        designation: "JavaScript developer",
        gender: "male",
        teamName: "TeamB"

     },
     {
        id: 4,
        fullName: "Iton Pogi",
        designation: "JavaScript developer",
        gender: "male",
        teamName: "TeamB"

     },
     {
        id: 5,
        fullName: "Iton Pogi",
        designation: "JavaScript developer",
        gender: "male",
        teamName: "TeamB"

     },
     {
        id: 6,
        fullName: "Iton Pogi",
        designation: "JavaScript developer",
        gender: "male",
        teamName: "TeamB"

     },
     {
        id: 7,
        fullName: "Kares Mendez",
        designation: "JavaScript developer",
        gender: "female",
        teamName: "TeamC"

     },
     {
        id: 8,
        fullName: "Kares Mendez",
        designation: "JavaScript developer",
        gender: "female",
        teamName: "TeamC"

     },
     {
        id: 9,
        fullName: "Kares Mendez",
        designation: "JavaScript developer",
        gender: "female",
        teamName: "TeamC"

     },
     {
      id: 10,
      fullName: "Kares Mendez",
      designation: "JavaScript developer",
      gender: "female",
      teamName: "TeamD"

   },
   {
      id: 11,
      fullName: "Kares Mendez",
      designation: "JavaScript developer",
      gender: "female",
      teamName: "TeamD"

   },
   {
      id: 12,
      fullName: "Kares Mendez",
      designation: "JavaScript developer",
      gender: "female",
      teamName: "TeamD"

   }
  ]);

  // USE EFFECT
  useEffect (() => {

      localStorage.setItem('employeeList', JSON.stringify(employees))

   },[employees])

  useEffect (() => {

   localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))

   },[selectedTeam])



  function handleTeamSelectionChange(event) {
      setTeam(event.target.value)
  }


  function handleEmployeeCardClick (event) {
       const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
       ? (employee.teamName === selectedTeam)?{...employee, teamName:''}:{...employee, teamName: selectedTeam}
       :employee);

       setEmployees(transformedEmployees)
  }

  
  return (
    <div>
      <Header selectedTeam = {selectedTeam}
              teamMemberCount = {employees.filter((employee) => employee.teamName === selectedTeam).length}
            />

      <Employee employees = {employees}
                selectedTeam = {selectedTeam}
                handleEmployeeCardClick = {handleEmployeeCardClick}
                handleTeamSelectionChange = {handleTeamSelectionChange}
            /> 
      <Footer />
    </div>
  );
}

export default App;
