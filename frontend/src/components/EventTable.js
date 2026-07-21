


import React from "react";
import { deleteEvent } from "../services/api";
import StatusBadge from "./StatusBadge";

function EventTable({ events, refresh, editEvent }) {

const handleDelete = async (id) => {
await deleteEvent(id);
refresh();
};

return (
<table border="1">

<thead>
<tr>
<th>Name</th>
<th>Date</th>
<th>Location</th>
<th>Capacity</th>
<th>Registered</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{events.map((e) => (
<tr key={e._id}>
<td>{e.name}</td>
<td>{e.date}</td>
<td>{e.location}</td>
<td>{e.capacity}</td>
<td>{e.reg}</td>
<td><StatusBadge status={e.status} /></td>

<td>

<button onClick={()=>editEvent(e)}>
Edit
</button>

<button onClick={()=>handleDelete(e._id)}>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>
);
}

export default EventTable;