"use client";

import React from "react";
import { useState } from "react";
import { useRef } from "react";

function Alert() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  function changeHandler() {
    console.log("Change");
    if (editorRef.current) {
      const html = editorRef.current.innerText;
      if (html.length > 0) {
        setShowPlaceholder(false);
      } else {
        setShowPlaceholder(true);
      }
    }
  }

  return (
    <>
      <div>
        <p className="font-mono text-sm m-0">Alert/FYI</p>
        <div className="shadow-md shadow-black/50 w-fit rounded">
          <div
            className="py-1 px-2 bg-neutral-100 rounded"
            style={{ width: "40rem" }}
          >
            <div className="flex flex-row space-x-2 items-center py-2">
              <p className="text-xl m-0">💡</p>
              <div
                contentEditable
                className="text-black border-none bg-transparent text-base hover:cursor-text z-10"
                style={{ width: "100%", paddingTop: "0.1em" }}
                ref={editorRef}
                onInput={changeHandler}
              ></div>
              {/* Placeholder */}
              {showPlaceholder && (
                <p className="absolute select-none left-10 text-black/50 italic">
                  "What does freedom really mean, when demanded of you by a
                  god?"
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Alert;
