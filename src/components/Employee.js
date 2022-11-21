
import Teams from './Teams';
import TeamMembers from './TeamMembers';

const Employee = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {



  return (
    <main className="container">

        {/* Selection Button Dispaly  */}
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-6">
                {/* Onchange Dispaly  */}
                <Teams selectedTeam= {selectedTeam} 
                        handleTeamSelectionChange = {handleTeamSelectionChange}/>
            </div>
        </div>    

        {/* employee Cards  */}
       <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8">
                <div className="card-collection">

                {/* display employee  */}
                {
                   <TeamMembers employees={employees}
                                handleEmployeeCardClick = {handleEmployeeCardClick}
                                selectedTeam = {selectedTeam}
                                    />
                                
                                }


                </div>
         </div>
      </div>
    </main>
 
  )

}

export default Employee