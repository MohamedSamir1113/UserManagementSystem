
const UserData = () => {
    return (<>
        <section className="container">
            <div className="mb-3">
                <h3>Add User</h3>
            </div>
            <hr />
            <div className="pt-4 mt-4 d-flex justify-content-center align-items-center ">
                <form action="" className="bg-white shadow shadow-sm py-5 rounded rounded-2 w-75">
                    <div className="row  m-0 p-4">
                        <div className="col-md-6">
                            <label htmlFor="" className="text-muted mb-2">First Name</label>
                            <input className="form-control  mb-3" type="text" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="" className="text-muted mb-2">Last Name</label>
                            <input className="form-control  mb-3" type="text" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="" className="text-muted mb-2">Email Name</label>
                            <input className="form-control  mb-3" type="text" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="" className="text-muted mb-2">Age</label>
                            <input className="form-control  mb-3" type="text" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="" className="text-muted mb-2">Phone Number</label>
                            <input className="form-control  mb-3" type="text" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="" className="text-muted mb-2">Date Of Birth</label>
                            <input className="form-control  mb-3" type="text" />
                        </div>
                    </div>
                    <div className="d-flex my-3 justify-content-center">
                        <button className="btn btn-warning w-50 text-white">Save</button>
                    </div>

                </form>
            </div>
        </section>
    </>);
}

export default UserData;