import React from 'react'
import sluzba from '../data/sluzba.json'

const Employee = ({employees}) => {
    return (
        <>
            {
                sluzba.map( employee => {
                    return (
                        <tr key={employee.id}>
                            <td> {employee.id} </td>
                            <td> {employee.firstName} </td>
                            <td> {employee.lastName} </td>
                            <td> {employee.dateOfBirth} </td>
                            <td> {employee.function} </td>
                            <td> {employee.experience} </td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default Employee