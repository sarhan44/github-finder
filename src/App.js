import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const [user, setUser] = useState({});

  const handleSerach = async (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${input}`)
    .then((result)=>{
      return result.json();
    }).then((value)=>{
      console.log(value);
      setUser(value)
    })
  };

  return (
    <div className="container flex flex-col items-center ">
    <h1 className=" mt-10 mb-3 text-4xl font-extrabold text-indigo-900"> Github Profile Finder </h1>
      <form>
        <label
          for="search"
          class=" text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Your Email
        </label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="search"
            id="search"
            class="block pr-40 p-4 pl-10 w-full mt-50 text-sm text-white bg-indigo-900 rounded-3xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="your username"
            required=""
          />
          <button
            onClick={handleSerach}
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      {/* card component */}
      { Object.keys(user).length > 0 ? (
        <div class="rounded-3xl overflow-hidden shadow-xl max-w-sm my-3 bg-white">
          <img src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg" class="h-48 w-96" />
          <div class="flex justify-center -mt-8">
            <img
              src={user.avatar_url}
              class="rounded-full border-solid border-emerald-200 border-8 -mt-3 w-40"
            />
          </div>
          <div class="text-center px-3 pb-6 pt-2">
            <h3 class="text-black text-sm bold font-bold ">{user.login}</h3>
            <p class="mt-2 font-bold text-2xl text-black">
              {user.name}
            </p>
            <p class="mt-2  font-light text-black">
              {user.created_at}
            </p>
          </div>
          <div class="flex justify-center pb-3 text-black">
            <div class="text-center mr-3 border-r pr-3">
              <h2>{user.public_repos}</h2>
              <span>Repos</span>
            </div>
            <div class="text-center">
              <h2>{user.public_gists}</h2>
              <span>Gists</span>
            </div>
          </div>
        </div>
      ):('')
      }
    </div>
  );
};

export default App;
