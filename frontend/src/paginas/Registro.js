import React, {useState, useEffect} from "react";
import {useNavigate , useParams} from 'react-router-dom'
import axios from "axios";
import './Registro.css';
import { toast } from "react-toastify";


const initialState = {
    Nombreuser:"",
    Passworduser:""

};


const Registro = ()=>{

    const [state, setState] = useState(initialState);
    const {Nombreuser,Passworduser} = state;

    const navigate = useNavigate();
    const {id} =useParams();

    useEffect(() => {
        if(id){
            getSingleUser(id);
        }

    },[id])

    const getSingleUser = async(id) =>{

        const response = await axios.get(`http://localhost:3005/${id}`);

        if(response.status===200){
            setState({...response.data});
        }
    }






    const addContact =async(data) =>{
        const response = await axios.post("http://localhost:3005/" , data);
        if (response.status===200){
            toast.success("Registro creado correctamente");
        }
    };


    const updateUser =async(data,id) =>{
        const response = await axios.put(`http://localhost:3005/${id}` , data);
        if (response.status===200){
            toast.success("Registro actualizado correctamente");
        }
    };
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(!Nombreuser || !Passworduser ){
            toast.error("Los campos no deben estar vacios");
        }else{

            if(!id){
                addContact(state);
            }else{
                updateUser(state,id) 
            }
           
            setTimeout(()=>navigate("/"), 500);
        }
    };



    const handleInputChange =(e)=>{
        const {name,value} =e.target;
        setState({...state,[name]:value});

    }

    return(
        <div style={{marginTop:"100px"}}>
            <form onSubmit={handleSubmit}
            style={{
                margin:"auto",
                padding:"15px",
                maxWidth:"400px",
                alignContent:"center",
            
            }}
            > 


            <label htmlFor="Nombreuser">Usuario</label>
            <input
            type="text"
            id="Nombreuser"
            name="Nombreuser"
            placeholder="Digite usuario"
            onChange={handleInputChange}
            value={Nombreuser}
            
            />

            
            <label htmlFor="Passworduser">Contraseña</label>
            <input
            type="Password"
            id="Passworduser"
            name="Passworduser"
            placeholder="Digite contraseña"
            onChange={handleInputChange}
            value={Passworduser}
            
            />
           <input type="submit" value={id ? "Editar" :"Registrar"}/>


            </form>

           
        </div>

    )
}

export default Registro;

