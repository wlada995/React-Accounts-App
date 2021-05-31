import React, { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AccountTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditAcc from "./components/EditAcc/EditAcc";
import EditForm from "./components/EditFrom/EditForm";



function App() {

    const [accounts, setAccounts] = useState([
        {
            id: 1,
            name: "vladimir",
            lastname: "Milosevic",
            phone: "02131",
            email: "vladimir@gmail.com"

        },
        {
            id: 2,
            name: "Dragana",
            lastname: "Milosevic",
            phone: "0231312",
            email: "dragana@gmail.com"

        }
    ])

    const addNewAccountToState = (acc) => {   
        setAccounts([...accounts,acc]) 
    }

    const deleteAcc = (id) => {
        const newCopyAcc = accounts.filter(account => {return account.id !== id}); 
        setAccounts(newCopyAcc)

    }

    const editAcc = (acc) => {
        let accPosition = accounts.map(account => account.id).indexOf(acc.id)
        console.log(accPosition)
        accounts[accPosition] = acc;
        setAccounts(accounts)
    }

    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/">
                <AccountTable accounts={accounts} />
            </Route>
            <Route exact path="/add" >
                <AddAccount addNewAccountToState={addNewAccountToState} />
            </Route>
          
            <Switch>
                <Route exact path="/edit">
                    <EditAcc accounts={accounts} deleteAcc={deleteAcc} />
                </Route>
                <Route path="/edit/:id">
                    <EditForm editAcc={editAcc} accounts={accounts} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
