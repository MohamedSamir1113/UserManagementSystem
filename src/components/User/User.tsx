
const User = ({user,onDelete}) => {
    const {email,firstName,image,phone,birthDate,id}=user
    return (
        <>
            <tr>
                <th ><img src={image} alt="" className="rounded rounded-1" style={{ width: "40px", height: "40px" }} /></th>
                <th>{firstName}</th>
                <td className="col-1">{email}</td>
                <td>{phone}</td>
                <td>{birthDate}</td>
                
                <td><i className="fa-solid fa-pen text-warning"></i></td>
                <td><i style={{cursor:"pointer"}} onClick={()=>onDelete(id)} className="fa-solid fa-trash-can text-warning"></i></td>
            </tr>
        </>
    );
}

export default User;