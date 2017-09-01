import React from 'react';

const Students = (props) => {

  const students = props.students;

  return (
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {
          students && students.map(student => (
            <tr key={ student.id }>
              <td>{ student.id }</td>
              <td>{ student.name }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Students;
