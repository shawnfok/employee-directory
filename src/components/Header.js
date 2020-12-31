import React from "react";

function Header() {
  return (
    <div className="bg-white shadow text-gray-800">
      <header className="container max-w-6xl px-10 py-3 mx-auto flex flex-wrap flex-col justify-between space-y-3 items-center">
        <div className="flex items-center">
          <h1 className="title text-4xl text-purple-700 mt-1 leading-none">
            Employee Directory
          </h1>
        </div>
        <p className="mb-16 text-md leading-tight">
          You can search for an employee by name / category.
        </p>
      </header>
    </div>
  );
}

export default Header;