import React from "react"

const HouseCount=({data})=>{
    return(
        <div>
            {data.map(house=>{
                return (<div key={house.id}>{house.id}</div>)
            })}
        </div>
    )
}

export default HouseCount;