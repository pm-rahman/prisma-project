"use client";
import Modal from "@/component/core/modal";
import { useState } from "react";

const AddModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    setError("")
    e.preventDefault();
    const from = e.target;
    const title=from.title.value;
    const description = from.description.value;
    if(!title.length>0&&!description.length>0){
        return setError(true)
    }
    fetch('/api/item',{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({title,description})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setIsOpen(false);
        location.reload();
    })
    console.log(title,description);
  };

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="mb-4 inline-block bg-blue-500 px-8 py-3 rounded text-white cursor-pointer"
      >
        Add Item
      </button>
      <Modal title="Add Item" isOpen={isOpen} setIsOpen={setIsOpen}>
        <form onSubmit={onSubmit} className="mt-4">
          <input
            placeholder="Title"
            name="title"
            type="text"
            className="w-full py-1 px-2 rounded border"
          />
          <input
            placeholder="Description"
            name="description"
            type="text"
            className="w-full mt-3 py-1 px-2 rounded border"
          />
          {error&&<span className="mt-2 text-red-500">require</span>}
          <div className="grid grid-cols-2 gap-2 mt-2">
            <button
              type="submit"
              className="bg-green-500 text-white w-full py-2 rounded"
            >
              ADD
            </button>
            <button
              onClick={closeModal}
              type="button"
              className="bg-red-500 text-white w-full py-2 rounded"
            >
              Close
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddModal;
