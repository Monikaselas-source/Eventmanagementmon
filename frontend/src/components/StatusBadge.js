import React from "react";

function StatusBadge({ status }) {

let className="badge";

if(status==="Completed"){
className+=" completed";
}
else if(status==="Pending"){
className+=" pending";
}
else if(status==="Cancelled"){
className+=" cancelled";
}

return(
<span className={className}>
{status}
</span>
)

}

export default StatusBadge;