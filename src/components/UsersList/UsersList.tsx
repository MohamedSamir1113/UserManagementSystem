import { useEffect, useState } from "react";
import styles from "./UsersList.module.css"
import axios from "axios";
import User from "../User/User";
import { toast, ToastContainer } from "react-toastify";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorFound, setError] = useState(false);

    async function getUsers() {
        try {
            const res = await axios.get(`https://dummyjson.com/users`); // Intentionally incorrect URL to trigger error
            console.log(res.data.users);
            setUsers(res.data.users);
        } catch (error) {
            console.log("Error fetching users:", error.message);
            setError(true);  // Set the error state if the request fails
        } finally {
            setIsLoading(false);  // Ensure loading state is turned off
        }
    }
    async function deleteUser(id) {
        const res = await axios.delete(`https://dummyjson.com/users/${id}`)
        console.log(res.data);
        setUsers(users => users.filter((user) => user.id !== id))
        toast.success("User Deleted Successfully 🚮");

    }

    useEffect(() => {
        setIsLoading(true);
        getUsers();
    }, []);
    return (
        <section className={`${styles.sectionBg} container `}>
             <ToastContainer theme="dark"/>
            <div className="d-flex justify-content-between mb-3">
                <h3>UserList</h3>
                <button style={{ backgroundColor: "#FEAF00" }} className="btn text-white">Add New User</button>
            </div>
            <hr />
            {errorFound ?
                <div className="d-flex justify-content-center align-items-center vh-100"> error fetching users</div>
                : isLoading ? <div className="d-flex fs-1 justify-content-center align-items-center vh-100"> <i className={`fa-solid fa-spinner ${styles.spin}`}></i></div> :
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
            }

        </section>
    )
}
export default UsersList;