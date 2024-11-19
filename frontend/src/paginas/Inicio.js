import React, { useEffect , useState} from "react";
import {Link}  from 'react-router-dom'
import "./Inicio.css";
import axios from 'axios';
import {toast} from 'react-toastify'


const Inicio = ()=>{

    const [data ,setData] = useState([]);

    useEffect(() => {

        getUsers();
}, []);




    

    const getUsers=async()=>{
        const response =await axios.get("http://localhost:3005/");
        if(response.status===200){
            setData(response.data);
        }
    };
    console.log("data=>" , data);

    const onDeleteUser=async(id)=>{
        if(window.confirm("¿Estas seguro de eliminar el Registro seleccionado")){
            const response = await axios.delete(`http://localhost:3005/${id}`);
            if(response.status===200){
                toast.success("El registro fue eliminado correctamente");
                getUsers();
            

    }
}
    } 
    

    



    return(
        <div style={{marginTop:"100px"}}>

            <table className="styled-table">
            <thead>

<tr>
    <th style={{textAlign:"center"}}>ID</th>
    <th style={{textAlign:"center"}}>Usuario</th>
    <th style={{textAlign:"center"}}>Contraseña</th>
    <th style={{textAlign:"center"}}>Acciones</th>
</tr>
</thead>
<tbody>

    {data&&

    data.map((item,index) =>{
return(
    <tr key ={index}>
        <th>{index + 1}</th>
        <td>{item.Nombreuser}</td>
        <td>{item.Passworduser}</td>
        <td>
<Link to={`/update/${item._id}`}>
<button className="btn btn-edit">Editar</button>
</Link>
<button className="btn btn-delete" onClick={()=> onDeleteUser(item._id)}>Eliminar</button>

       </td>
     </tr>
);
    
    })
    
    }
</tbody>



            </table>

            
        </div>

    )
}

export default Inicio;
