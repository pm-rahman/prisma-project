import { useEffect } from "react";

const DeleteItem = ({ id }) => {
  const deleteHandler = () => {
    fetch(`/api/item/${id}`,{
        method:"DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        location.reload()
      })
      .catch((err) => console.log(err));
  };
  return (
    <button
      type="button"
      onClick={deleteHandler}
      className="inline-block bg-red-500 py-1 w-full rounded text-white cursor-pointer"
    >
      Delete
    </button>
  );
};

export default DeleteItem;
