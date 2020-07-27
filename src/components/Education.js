import React from "react";

import { Table } from "reactstrap";

const Education = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Course</th>
          <th>Institution</th>
          <th>Year of Passing</th>
          <th>Grade / Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>B.E (C.S.E)</td>
          <td>Muffakham Jah College of Engineering and Technology</td>
          <td>2020</td>
          <td>8.8</td>
        </tr>
        <tr>
          <td>Intermediate (M.P.C)</td>
          <td>Sri Chaitanya Jr Kalasala</td>
          <td>2016</td>
          <td>95.2 %</td>
        </tr>
        <tr>
          <td>SSC</td>
          <td>Ravindra Bharathi School</td>
          <td>2014</td>
          <td> 9.7</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Education;
