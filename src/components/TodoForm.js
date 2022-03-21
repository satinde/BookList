import React from 'react'

const TodoForm=({
    name,
    email,
    mobile,
    setName,
    setMobile,
    setEmail,
    handleSubmit
})=>{
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
          <input
          type="number"
          placeholder="Enter Mobile"
          value={mobile}
          onChange={(e)=>setMobile(e.target.value)}
          />
          <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <button type="submit" style={{padding:"2px 10px",color:'white',backgroundColor:'green',border:'0px'}}>Add</button>
        </form>
        </div>
    )
}
export default TodoForm