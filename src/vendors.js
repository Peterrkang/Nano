import React from "react";

const Vendors = ({ list, listView }) => {
  return listView ? (
    <ul className="list-features">
      <li className="vendor-props">
        <div>Name</div>
        <div>Product</div>
        <div>Location</div>
        <div>Website</div>
      </li>
      {list.map(vendor => {
        return (
          <li key={vendor.id}>
            <div>{vendor.name}</div>
            <div>{vendor.product}</div>
            <div>{vendor.location}</div>
            <a href={vendor.url}>Visit {vendor.name}</a>
          </li>
        );
      })}
    </ul>
  ) : (
    <div className="flex-content">
      {list.map(vendor => {
        return (
          <div key={vendor.id} className="vendor">
            <h2>{vendor.name.toUpperCase()}</h2>
            <ul className="features">
              <li>{vendor.product}</li>
              <li>{vendor.location}</li>
            </ul>
            <a href={vendor.url}>Visit {vendor.name}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Vendors;
