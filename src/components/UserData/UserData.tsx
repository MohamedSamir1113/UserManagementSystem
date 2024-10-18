import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

const UserData = ({ userData,setUserData  }) => {
    let { firstName, lastName, email, phone, age, id, birthDate } = userData;
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();
    const navigate=useNavigate()
    
    // Pre-populate form fields when userData is passed (for update)
    useEffect(() => {
        if (userData) {
            setValue("firstName", firstName);
            setValue("lastName", lastName);
            setValue("email", email);
            setValue("phone", phone);
            setValue("age", age);
            setValue("birthDate", birthDate);
        }
       
    }, [userData, setValue, firstName, lastName, email, phone, age, birthDate]);
    
    const { setUsers} = useUser();
    const addUser = async (data) => {
    
        try {
            const res = await axios.post(`https://dummyjson.com/users/add`, data);
            console.log(res.data);
            setUsers((prevUsers) => [...prevUsers, res.data]);
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    const updateUser = async (id, data) => {
        try {
            const res = await axios.put(`https://dummyjson.com/users/${id}`, data);
            console.log(res.data);
            setUsers(users => users.map(user => (user.id === id ? { ...user, ...res.data } : user)));

        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const onSubmit = async (data) => {
        if (id) {
            // If the user has an ID, we update the user
            updateUser(id, data);
            setUserData({});
            navigate("/dashboard/users")
        } else {
            // Otherwise, we add a new user
            addUser(data);
            navigate("/dashboard/users")
        }
    };

    return (
        <>
            <section className="container">
                <div className="mb-3">
                    {firstName ? <h3>Update User</h3> : <h3>Add User</h3>}
                </div>
                <hr />
                <div className="pt-4 mt-4 d-flex justify-content-center align-items-center ">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-white shadow shadow-sm py-5 rounded rounded-2 w-75"
                    >
                        <div className="row  m-0 p-4">
                            <div className="col-md-6">
                                <label className="text-muted mb-2">First Name</label>
                                <input
                                    {...register("firstName", { required: "First Name is required" })}
                                    placeholder="Enter Your First Name"
                                    className="form-control mb-3"
                                    type="text"
                                />
                                {errors?.firstName && (
                                    <span className="text-danger">{errors.firstName?.message}</span>
                                )}
                            </div>
                            <div className="col-md-6">
                                <label className="text-muted mb-2">Last Name</label>
                                <input
                                    {...register("lastName", { required: "Last Name is required" })}
                                    placeholder="Enter Your Last Name"
                                    className="form-control mb-3"
                                    type="text"
                                />
                                {errors?.lastName && (
                                    <span className="text-danger">{errors.lastName?.message}</span>
                                )}
                            </div>
                            <div className="col-md-6">
                                <label className="text-muted mb-2">Email</label>
                                <input
                                    {...register("email", { required: "Email is required" })}
                                    placeholder="Enter Your Email"
                                    className="form-control mb-3"
                                    type="text"
                                />
                                {errors?.email && (
                                    <span className="text-danger">{errors.email?.message}</span>
                                )}
                            </div>
                            <div className="col-md-6">
                                <label className="text-muted mb-2">Age</label>
                                <input
                                    {...register("age", {
                                        required: "Age is required",
                                        setValueAs: (value) => Number(value),
                                    })}
                                    placeholder="Enter Your Age"
                                    className="form-control mb-3"
                                    type="number"
                                />
                                {errors?.age && (
                                    <span className="text-danger">{errors.age?.message}</span>
                                )}
                            </div>
                            <div className="col-md-6">
                                <label className="text-muted mb-2">Phone Number</label>
                                <input
                                    {...register("phone", { required: "Phone is required" })}
                                    placeholder="Enter Your Phone Number"
                                    className="form-control mb-3"
                                    type="text"
                                />
                                {errors?.phone && (
                                    <span className="text-danger">{errors.phone?.message}</span>
                                )}
                            </div>
                            <div className="col-md-6">
                                <label className="text-muted mb-2">Date Of Birth</label>
                                <input
                                    {...register("birthDate", { required: "Date of Birth is required" })}
                                    placeholder="Enter Your Date of Birth"
                                    className="form-control mb-3"
                                    type="string"
                                />
                                {errors?.birthDate && (
                                    <span className="text-danger">{errors.birthDate?.message}</span>
                                )}
                            </div>
                        </div>
                        <div className="d-flex my-3 justify-content-center">
                            <button type="submit" className="btn btn-warning w-50 text-white">
                                {firstName?"Update":"Save"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default UserData;
