import React from "react";
import {Link} from "react-router-dom";

const Account = ({accounts,edit,deleteBtn,deleteAcc}) => {


    const editFun = edit ? (
        <>
        <td><Link to={"/edit/" + accounts.id} className="btn btn-warning">Edit</Link></td>
        </>
    ) : null;


    const deleteFun = deleteBtn ? (
        <>
        <td><button onClick={()=>{deleteAcc(accounts.id)}} className="btn btn-danger">Delete</button></td>
        </> 
    ) : null;


    return (
        <tr>
            <td>{accounts.id}</td>
            <td>{accounts.name}</td>
            <td>{accounts.lastname}</td>
            <td>{accounts.phone}</td>
            <td>{accounts.email}</td>
            {editFun}
            {deleteFun}
        </tr>
    )
}





export default Account;
