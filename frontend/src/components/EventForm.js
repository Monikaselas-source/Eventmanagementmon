import React,{useState,useEffect} from "react";
import {addEvent,updateEvent} from "../services/api";

function EventForm({refresh,editing,setEditing}){

const [event,setEvent]=useState({
name:"",
date:"",
location:"",
status:"",
capacity:"",
reg:0
});

useEffect(()=>{
if(editing){
setEvent(editing);
}
},[editing]);

const handleChange=(e)=>{
setEvent({...event,[e.target.name]:e.target.value});
}

const handleSubmit=async(e)=>{
e.preventDefault();

if(event._id){
await updateEvent(event._id,event);
setEditing(null);
}else{
await addEvent(event);
}

setEvent({
name:"",
date:"",
location:"",
status:"",
capacity:"",
reg:0
});

refresh();
}

return(

<form onSubmit={handleSubmit}>

<input
name="name"
value={event.name}
placeholder="Event Name"
onChange={handleChange}
/>

<input
name="date"
value={event.date}
placeholder="Date"
onChange={handleChange}
/>

<input
name="location"
value={event.location}
placeholder="Location"
onChange={handleChange}
/>

<input
name="capacity"
value={event.capacity}
placeholder="Capacity"
onChange={handleChange}
/>

<input
name="reg"
value={event.reg}
placeholder="Registered"
onChange={handleChange}
/>

<input
name="status"
value={event.status}
placeholder="Status"
onChange={handleChange}
/>

<button type="submit">
{event._id ? "Save" : "Add"}
</button>

</form>

)

}

export default EventForm;