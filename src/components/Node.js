import React, { useState, useCallback } from "react";

function Node({ name: orgName, children }) {
  const isFolder = Array.isArray(children);
  const [isOpen, toggleOpen] = useState(false);
  const [isEdit, toggleEdit] = useState(false);
  const [name, setName] = useState(orgName);

  const handleFolderClick = useCallback(() => {
    const newVal = !isOpen;
    console.log({ newVal });
    toggleOpen(newVal);
  }, [toggleOpen, isOpen]);
  console.log({ isOpen, isEdit });
  return (
    <>
      <div onClick={handleFolderClick} style={{ display: "flex", flex: 1 }}>
        {isEdit ? (
          <input
            defaultValue={name}
            onClick={e => {
              e.stopPropagation();
            }}
            onBlur={e => {
              e.stopPropagation();
              setName(e.target.value);
              toggleEdit(false);
            }}
          />
        ) : (
          <>
            <div style={{ marginRight: 50 }}>
              {isFolder && isOpen ? "V" : ">"}:{name}
            </div>
            <div
              onClick={e => {
                e.stopPropagation();
                return toggleEdit(!isEdit);
              }}
            >
              Edit
            </div>
          </>
        )}
      </div>
      <br />
      {isOpen &&
        isFolder &&
        children.map(({ id, name, children }) => {
          return (
            <div style={{ marginLeft: 10 }} key={id}>
              <Node key={id} name={name} children={children} />
            </div>
          );
        })}
    </>
  );
}

// this.functionName = this.functionName.bind(this);

export default Node;
