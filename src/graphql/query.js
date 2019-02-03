import gql from "graphql-tag";


const employeeList = gql`{
    employeesList{
        items{
            id,
            fullName,
            currentJob {
                id
            },
            goalJob {
                id
            },
        }
    }
}`;

const employee = (userID) => gql`
  user(id: {${userID}) {
    firstName
    lastName
    groups {
      name
    }
  }`;

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

export { jobOpnings, goalJobSkills, currentJobSkills, employee, employeeList, UserSkillList }