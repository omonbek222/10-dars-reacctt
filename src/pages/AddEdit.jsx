import React from 'react';

function AddEdit() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">"Kontent qo'shish yoki tahrirlash"</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
      />
      <textarea
        placeholder="Content"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
      />
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
        Save
      </button>
    </div>
  );
}

export default AddEdit;
