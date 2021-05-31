import React from "react";
import Account from "../AccountsTable/Account/Account";

const EditAcc = ({accounts,deleteAcc}) => {

    const allAccounts = accounts.map(accounts=>{
        return (
            <Account accounts={accounts} edit={true} deleteBtn={true} deleteAcc={deleteAcc} key={accounts.id} />
        )
    })


    return (
        <div className="container">
        <div className="row">
            <div className="col-10 offset-1">
                <h3 className="display-4 m-4">Edit Accounts</h3>
             <div className="row">
                 <div className="col-10 offset-1">
                     <table className="table">
                         <thead>
                             <tr>
                                 <th>Id</th>
                                 <th>Name</th>
                                 <th>Lastname</th>
                                 <th>Phone</th>
                                 <th>Email</th>
                                 <th>Edit</th>
                                 <th>Delete</th>
                             </tr>
                         </thead>
                         <tbody>
                            {allAccounts}
                         </tbody>
                     </table>
                 </div>
             </div>
            </div>
        </div>
    </div>
    )
}



export default EditAcc;