import React, { useState } from "react";
import Node from "./components/Node";
import "./style.css";

const data = [
  {
    id: 1,
    name: "File 1"
  },
  {
    id: 2,
    name: "Folder 1",
    children: [
      {
        id: 3,
        name: "File 2"
      },
      {
        id: 4,
        name: "File 3"
      }
    ]
  },
  {
    id: 5,
    name: "Folder 2",
    children: [
      {
        id: 6,
        name: "File 4"
      },
      {
        id: 7,
        name: "Folder 3",
        children: [
          {
            id: 8,
            name: "Folder 4",
            children: [
              {
                id: 9,
                name: "File 5"
              },
              {
                id: 10,
                name: "File 6"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 11,
    name: "File 1"
  }
];

export default function App() {
  // useEffect(()=>{

  // },[])
  return <Node name="Root" children={data} />;
}
