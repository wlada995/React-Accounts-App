import React from "react";
import Account from "./Account/Account"
const AccountsTable = ({accounts}) =>{
    const allAccounts = accounts.map(accounts=>{
        return(
           <Account accounts={accounts} key={accounts.id} />
        )
    })
        return(
           <div className="container">
               <div className="row">
                   <div className="col-10 offset-1">
                       <h3 className="display-4 m-4">Accounts</h3>
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



export default AccountsTable;