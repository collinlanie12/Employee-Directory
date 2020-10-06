import React, { useEffect, useState } from "react";
import API from "../../utils/API";


function EmployeeContainer() {
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);
    // const [error, setError] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    function loadUsers() {
        API.search('?results=20&?nat=us')
            .then((res) => {
                console.log(res.data.results)
                setUsers(res.data.results);
            })
            .catch(err => console.log(err));
    }


    return (
        <div className="container">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(item => (
                        <tr>
                            <th scope="row"><img src={item.picture.thumbnail} alt={item.picture.thumbnail} ></img></th>
                            <td>{item.name.first} {item.name.last}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default EmployeeContainer;