import gql from "graphql-tag";
import { compose } from 'react-compose';
import React from 'react'


export const EMPLOYEE_LIST_QUERY = gql`
  query employeeList {
    employee {
      fullName
      userSkills {
        id
        title
        points
        weight
      }
    }
  }
`;

let EmployeeTable = ({ employeeproperties }) => (
  <Table.Body loading={employeeproperties.loading} data={R.pathOr([], ['employeeList', 'items'], employeeproperties)}>
    {' '}
    (property) => ({employeeproperties.title} )
  </Table.Body>
);

EmployeeTable = compose(
  withModal,
  graphql(EMPLOYEE_LIST_QUERY, { name: 'employeeproperties' })
)(EmployeeTable);

export { EmployeeTable };