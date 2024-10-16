import { useEffect, useState } from "react";
import styles from "./UsersList.module.css"
import axios from "axios";
import User from "../User/User";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    async function getUsers() {
        const res = await axios.get(`https://dummyjson.com/users`)
        console.log(res.data.users);
        setUsers(res.data.users)

    }
    async function deleteUser(id) {
        const res = await axios.delete(`https://dummyjson.com/users/${id}`)
        console.log(res.data);
        setUsers(users=>users.filter((user)=>user.id!==id))

    }
    
    useEffect(() => {
        try {
            getUsers()
        } catch (error) {
            console.log(error);

        }
    }, [])
    return (
        <section className={`${styles.sectionBg} container `}>
            <div className="d-flex justify-content-between mb-3">
                <h3>UserList</h3>
                <button style={{ backgroundColor: "#FEAF00" }} className="btn text-white">Add New User</button>
            </div>
            <hr />
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr className="text-muted">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>BirthDate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{users.map((user) => <User onDelete={deleteUser} key={user.id} user={user} />)}</tbody>
                </table>
            </div>

        </section>
    )
}
export default UsersList;