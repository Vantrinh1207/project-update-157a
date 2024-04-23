import React, { useState, useEffect } from "react";

import "./Table.css";
import { MdStarBorderPurple500 } from "react-icons/md";

const fetchData = async () => {
  const response = await fetch("http://localhost:3000")
  const json = await response.json()
  return json
}

export const Table = () => {
  const [data, setData] = useState(undefined)
  useEffect(() => {
    fetchData().then(setData)
    setData([
      {
        name: "Name1",
        id: 1,
        ingredients: "GOOD",
        instruction: "do it",
      },
      {
        name: "Name1",
        id: 1,
        ingredients: "GOOD",
        instruction: "do it",
      },
      {
        name: "Name1",
        id: 1,
        ingredients: "GOOD",
        instruction: "do it",
      }

    ])
  }, [])

  return <div className="table-box">
    <div className="box-container rounded-lg border border-gray-900 bg-white p-4 shadow-sm transition sm:p-6">
      <table className="mx-auto min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Recipe ID</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Ingredients</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Instruction</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Review</th>
          </tr>
        </thead>


        <tbody className="divide-y divide-gray-200">
          {
            data === undefined
              ? "Loading..."
              : data.map(row => {
                return <tr className="odd:bg-gray-50 h-5">
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{row.id}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{row.name}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{row.ingredients}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{row.instruction}</td>
                  <span className="actions">
                    <MdStarBorderPurple500 />
                    <MdStarBorderPurple500 />
                    <MdStarBorderPurple500 />
                    <MdStarBorderPurple500 />
                    <MdStarBorderPurple500 />
                  </span>
                </tr>

              })
          }
        </tbody>
      </table>
    </div>
  </div>

}