import gql from "graphql-tag";

// const employee = gql`
//   query{
//   employee(id: "cjrnnfvx4006v01pd02v6kwvf"){
//     fullName,
//     userSkills{
//       id,
//       title,
//       points,
//       weight,
//     }
//   }
// }`;
const Employee = (userID) => {
    let employee = gql`
    query employeeFullname{
        employee (id: $userID) {
            fullName,
            Level,
            }
        }
    `;
return employee
}
//const Employee = ("cjrnnfvx4006v01pd02v6kwvf") => gql
//     <Query query={employee}>
//       {({ loading, error, data }) => {
//         if (loading) return "Loading...";
//         if (error) return `Error! ${error.message}`;
//         if (data) return(data);
//     }}
// </Query>



const currentJobSkills = (jobID) => gql`
job(id:${jobID}){
    title,
    skill{
      items{
        id,
        title
      }
    }
  }`;

const goalJobSkills = (jobID) => gql`
jobList{
    title,
    skill{
        items{
            id,
            title
        }
    }
}`;

const jobOpnings = () => gql`
jobsList(filter:{openings : {gt : 0}}){
    items{
      id,
      title
    }
  }`;

const UserSkillList = (employeeID) => gql`
employee(id:${employeeID}){
    userSkills{
      id,
      title,
      points,
      weight
    }
  }
`

export { jobOpnings, goalJobSkills, currentJobSkills, Employee, UserSkillList }