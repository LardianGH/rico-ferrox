import React from "react";
import Navbar from "../elements/Navbar";

function Error404() {
  return (
    <>
      <div>
        <Navbar>
        </Navbar>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
      </div>
    </>
  );
}

export default Error404;
