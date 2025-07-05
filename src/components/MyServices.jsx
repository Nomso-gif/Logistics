import { useState } from "react";
import Button from "./Button";

const MyServices = () => {
  const handleClick = () => {
    alert("You clicked me");
  };
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Login App
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Show login/welcome message.
            </p>
            <div>
              <Button
                text={"Please Click me"}
                className="bg-slate-500 mt-3"
                onClick={handleClick}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Toggle Login/Logout
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Toggle login/logout.
            </p>
            <div>
              <Button
                text={"Please Click me"}
                className="bg-pink-900 mt-3"
                onClick={handleClick}
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              My personal developer portfolio.
            </p>
            <div>
              <Button
                text={"Please Click me"}
                className="bg-blue-700 mt-3"
                onClick={handleClick}
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Display Username
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Accept and display user name.
            </p>
            <div>
              <Button
                text={"Please Click me"}
                className="bg-green-700 mt-3"
                onClick={handleClick}
              />
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              UI based on state
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Conditionally renders UI based on state.
            </p>
            <div>
              <Button
                text={"Please Click me"}
                className="bg-purple-900 mt-3"
                onClick={handleClick}
              />
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Pass data from parent to child
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Pass data from parent to child.
            </p>
            <div>
              <Button
                text={"Please Click me"}
                className="bg-emerald-900 mt-3"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
