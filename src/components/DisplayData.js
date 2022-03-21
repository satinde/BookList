import React from 'react'

const DisplayData = ({
    deleteTodo,
    editTodo,
    search,
    setSearch,
    filteredTodo
}) => {

    const searchData = res => {
        return (
            <>
                <tr key={res.id}>
                    <td>{res.name}</td>
                    <td>{res.email}</td>
                    <td>{res.mobile}</td>
                    <td>
                        <button onClick={() => editTodo(res.id)}
                        style={{padding:"2px 10px",color:'white',backgroundColor:'green',border:'0px'}}
                        >Edit</button>
                        <button onClick={() => deleteTodo(res.id)}
                        style={{padding:"2px 10px",color:'white',backgroundColor:'red',border:'0px'}}
                        >delete</button>
                    </td>
                </tr>
            </>
        );
    };
    return (

        <div style={{
            width: "46%", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            borderRadius: "10px", padding: "20px"
        }}>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <table class="table table-striped" style={{ borderTop: '2px solid' }}>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTodo.map(res => searchData(res))}
                </tbody>
            </table>
        </div>
    )
}
export default DisplayData