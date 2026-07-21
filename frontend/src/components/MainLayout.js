
import React,{useState,useEffect} from "react";
import EventForm from "./EventForm";
import EventTable from "./EventTable";
import SearchBar from "./SearchBar";
import {getEvents} from "../services/api";

function MainLayout(){

const [events,setEvents]=useState([]);
const [search,setSearch]=useState("");
const [editing,setEditing]=useState(null);

const fetchEvents = async ()=>{
const res = await getEvents();
setEvents(res.data);
}

useEffect(()=>{
fetchEvents();
},[]);

const filteredEvents = events.filter((event)=>
event.name.toLowerCase().includes(search.toLowerCase())
);

return(

<div className="container">

<h1>Event Management</h1>

<SearchBar
search={search}
setSearch={setSearch}
/>

<EventForm
refresh={fetchEvents}
editing={editing}
setEditing={setEditing}
/>

<EventTable
events={filteredEvents}
refresh={fetchEvents}
editEvent={setEditing}
/>

</div>

)

}

export default MainLayout;