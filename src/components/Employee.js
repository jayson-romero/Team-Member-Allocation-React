import { useState } from "react"
import femaleProfile from '../imges/femaleProfile.jpg';
import maleProfile from '../imges/maleProfile.jpg';

const Employee = () => {

   const [employees, setEmployees] = useState ([
      {
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
         fullName: "Kares Mendez",
         designation: "JavaScript developer",
         gender: "female",
         teamName: "TeamC"

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

      }
   ]);



  return (
    <main className="container">

       <div class="row justify-content-center mt-3 mb-3">
         <div class="col-8">
            <div class="card-collection">
            {
               employees.map((employee) => (
                  <div id={employee.id} className="card m-2" style={{cursor:"pointer"}}>
                     <img src={femaleProfile} className="card-img-top"/>
                     <div className="card-body">
                        <h5 className="card-title">Full Name: {employee.fullName}</h5>
                        <p className="card-text"><b>Designation:</b> {employee.designation}</p>
                     </div>
                  </div>
               ))
            }
            </div>
         </div>
      </div>
    </main>
 
  )
}

export default Employee