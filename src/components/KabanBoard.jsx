import React from 'react'
import { useState } from 'react'
import { DragDropContext } from "react-beautiful-dnd"

export default function KabanBoard() {


    const [completed, setCompleted] = useState([]);
    const [incomplete, setInomplete] = useState([]);

  return (
    <DragDropContext>
        <h2 style={{textAlign: "center"}}>Progress Board</h2>
        <div
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
        }}        
        >

        </div>
    </DragDropContext>
  )
}

