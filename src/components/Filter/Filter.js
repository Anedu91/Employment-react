import React from "react";

function Filter(props) {
  return (
    <aside className="lg:col-span-1 px-5 pt-10">
      <h2 className="mb-10 text-2xl">Filters</h2>
      <form action="" className="xl:px-8 flex flex-col">
        <label className="mt-5 mb-3 text-2xl" htmlFor="category">
          Category
        </label>
        <select
          name="categroy"
          id="category"
          className="w-100 bg-transparent border-b border-black p-2"
        >
          <option value="#">All</option>
          <option value="#">lol</option>
          <option value="#">Locote</option>
        </select>
        <label className="mt-5 mb-3 text-2xl" htmlFor="category">
          Sub-Category
        </label>
        <select
          name="categroy"
          id="category"
          className="w-100 bg-transparent border-b border-black p-2"
        >
          <option value="#">N/A</option>
          <option value="#">lol</option>
          <option value="#">Locote</option>
        </select>
        <label className="mt-5 mb-3 text-2xl" htmlFor="category">
          Language
        </label>
        <select
          name="categroy"
          id="category"
          className="w-100 bg-transparent border-b border-black p-2"
        >
          <option value="#">English</option>
          <option value="#">lol</option>
          <option value="#">Locote</option>
        </select>
        <label className="mt-5 mb-3 text-2xl" htmlFor="category">
          Contract length
        </label>
        <select
          name="categroy"
          id="category"
          className="w-100 bg-transparent border-b border-black p-2"
        >
          <option value="#">Long (2 Weeks)</option>
          <option value="#">lol</option>
          <option value="#">Locote</option>
        </select>
        <div className="flex justify-between my-5">
          <button className="py-2 flex-grow text-white bg-primary-200 mr-3">
            Filter
          </button>
          <button className="py-2 flex-grow text-black bg-primary-100">
            Clear
          </button>
        </div>
        <label className="mt-5 mb-3 text-2xl" htmlFor="category">
          Sort by
        </label>
        <select
          name="categroy"
          id="category"
          className="w-100 bg-transparent border-b border-black p-2"
        >
          <option value="#">Popularity</option>
          <option value="#">lol</option>
          <option value="#">Locote</option>
        </select>
      </form>
    </aside>
  );
}

export default Filter;
