import {
  setDoc,
  doc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth, firestore } from "../firebase";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [task, setTask] = useState(); // whatever we will type in textbox will be stored here
  const [list, setList] = useState(); // will hold list of all the tasks stored in db

  // method responsible for posting data into firebase db
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // it will set our taks in tasks collection in firebase and uuid will be used as id of that task
      setDoc(doc(firestore, "tasks", uuidv4()), {
        task,
        user: auth.currentUser.uid,
        createdAt: new Date(),
      }).then(() => {
        getTasks();
      });
      setTask("");
      toast.success("Task is Saved!");
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  };

  // it will fetch all the task docs from the tasks collection
  const getTasks = async () => {
    const querySnapshot = await getDocs(collection(firestore, "tasks"));
    let tasks = [];
    querySnapshot.forEach((doc) => {
      let item = doc.data();
      item.id = doc.id;
      tasks.push(item);
    });
    setList([...tasks]);
  };

  useEffect(() => {
    getTasks();
  }, []);

  // method for removing tasks from the firebase db
  const handleDelete = (id) => {
    deleteDoc(doc(firestore, "tasks", id))
      .then(() => {
        setList(() => list.filter((l) => l.id !== id));
        toast("Document has been deleted");
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  return (
    <div className="mt-10 shadow-md border border-black p-8 rounded-md">
      <p className="text-center font-bold text-lg mb-4">Todo List</p>
      <form className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Enter Todo"
          className="text-xl text-gray-800 placeholder-gray-400 py-2 px-5 bg-gray-100 rounded-l-full outline-gray-300"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="text-xl text-gray-100 placeholder-gray-400 py-2 pr-5 pl-4 bg-black rounded-r-full"
          onClick={handleSubmit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </form>
      <div className="max-h-80 overflow-y-auto">
        <table id="todo_table" className="table w-full">
          <thead>
            <tr>
              <th className="text-center px-1 py-2 bg-black text-gray-100 rounded-tl-xl">
                #
              </th>
              <th className="text-left px-1 py-2 bg-black text-gray-100">
                Details
              </th>
              <th className=" px-1 py-2 bg-black text-gray-100 rounded-tr-xl">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((item, index) => {
                return (
                  <tr
                    className=" bg-gray-50 transition duration-300"
                    key={index}
                  >
                    <td className="text-center  px-1 py-2 text-gray-800">
                      {index + 1}
                    </td>
                    <td className=" px-1 py-2 text-gray-800">{item.task}</td>
                    <td className="text-center  px-1 py-2 text-gray-800 flex gap-3 justify-center">
                      <button
                        className="text-gray-600"
                        onClick={() => handleDelete(item.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
