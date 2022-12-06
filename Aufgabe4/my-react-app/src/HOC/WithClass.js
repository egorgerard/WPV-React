import React from "react.js";

const withClass = (props) => {
  <div className={props.classes}>
    <WrappedComponent {...props} />
  </div>;
};

export default withClass;
