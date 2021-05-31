import React, { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Linkovi

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

    const addNewAccountToState = (acc) => {   //prihvatamo podatak koji salje addAccount.js
        setAccounts([...accounts,acc]) // ovaj acc posle zareza je podatak koji smo poslali iz addAccount.js
    }

    const deleteAcc = (id) => {
        const newCopyAcc = accounts.filter(account => {return account.id !== id}); // vraca svaki id koji nije isti sa poslatim
        setAccounts(newCopyAcc)

    }

    const editAcc = (acc) => {
        let accPosition = accounts.map(account => account.id).indexOf(acc.id)
        console.log(accPosition)
        accounts[accPosition] = acc;
        setAccounts(accounts)
        // this.setState({acc:copyAcc});
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
            {/* Switch sluzi ako je putanja dobra da pokaze taj sadrzaj ako nije dobra nastavlja da trazi dalje  */}
            {/* Switch smo stavili jer edit su obe putanje pa da bi razlikovao */}
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