import { useState } from "react";

export const TodoList = () => {
  const [data, setData] = useState();
  const [addData, setAddData] = useState([]);

  const handleAddData = () => {
    // if(data !== ""){
    setAddData((prev) => [...prev, { text: data, done: false }]);
    setData("");
  // }
  };
  const handleDone = (item) => {
    const findData = addData.map((i) =>
      i === item ? { ...item, done: true } : i
    );
    setAddData(findData);
  };
  const handleDelete = (item) => {
    const deleteData = addData.filter((d) => d !== item);
    setAddData(deleteData);
  };

  return (
    <>
      <input
        value={data}
        type="text"
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleAddData}>add</button>
      {addData?.map((item, i) => {
        return (
          <>
            <div>
              {item.done === true ? (
                <s>{item.text}</s>
              ) : (
                <span>{item.text}</span>
              )}
              <button onClick={() => handleDone(item)}>Done</button>
              <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
          </>
        );
      })}
    </>
  );
};
