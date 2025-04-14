import React from "react";

const RoutingComponent = ({ className, heading, description }) => {
  return (
    <div className={className}>
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export default RoutingComponent;
