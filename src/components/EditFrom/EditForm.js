import React, {useState} from "react";
import {withRouter} from "react-router-dom"; 

function EditForm(props){

        const [account, setAccount] = useState(props.accounts.filter(accounts => accounts.id === props.match.params.id)[0])


        const editAcc=()=>{
           props.editAcc(account); 
           props.history.push("/");
        }

        return(
            <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Edit Account</h2>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input type="text" onChange={e=>{setAccount({...account,name:e.target.value})}}  id="name" placeholder="name" value={account.name} className="form-control" /> <br />
                            <input type="text" onChange={e=>{setAccount({...account,lastname:e.target.value})}}  id="lastname" placeholder="lastname" value={account.lastname} className="form-control" /> <br />
                            <input type="text" onChange={e=>{setAccount({...account,phone:e.target.value})}}  id="phone" placeholder="phone" value={account.phone} className="form-control" /> <br />
                            <input type="text" onChange={e=>{setAccount({...account,email:e.target.value})}}  id="email" placeholder="email" value={account.email} className="form-control" /> <br />
                            <button onClick={editAcc} className="btn btn-warning form-control">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}


export default withRouter(EditForm);