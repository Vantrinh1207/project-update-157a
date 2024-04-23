import "./AddRecipe.css"

import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const options2 = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' }
]

const AddRecipe = () => {
  return (
    <div className="add-recipe">
      <div className="box-container rounded-lg border border-gray-400 bg-white p-4 shadow-sm transition sm:p-6">
        <div className="box">

          <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Add a new recipe 🦑
          </h1>

          <p class="mt-4 leading-relaxed text-gray-500">
            This is where you add a new recipe to our munchkin menu and it's gonna be great.
          </p>
          <div>
            <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Name </label>
            <input
              type="text"
              id="UserEmail"
              placeholder="Recipe Name"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Ingredients </label>
            <Select className="basic-multi-select" options={options} isMulti classNamePrefix="select" />
          </div>
          <div style={{ marginTop: "15px" }}>
            <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Review </label>
            <Select className="basic-multi-select" options={options2} classNamePrefix="select" />
          </div>
        </div>
        {/* Second box  */}
        <div className="box">
          <div>
            <label htmlFor="OrderNotes" className="block text-sm font-medium text-gray-700"> Instructions </label>

            <textarea
              id="OrderNotes"
              className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
              rows="4"
              placeholder="Enter any additional intructions..."
            ></textarea>
          </div>
        </div>

      </div>
      <div className="box-save flex justify-end">
        <button
          class="inline-block shrink-0 rounded-md  bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring active:text-blue-500"
        >
          Save Recipe
        </button>
      </div>
    </div>
  )
}

export { AddRecipe }