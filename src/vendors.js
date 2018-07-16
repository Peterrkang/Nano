import React from "react";

function Vendors({ list, listView }) {
  console.log(list);
  return listView ? (
    <ul className="list-features">
      {list.map(vendor => {
        return (
          <li key={vendor.id}>
            <div>{vendor.name}</div>
            <div>{vendor.product}</div>
            <div>{vendor.location}</div>
            <div>{vendor.createdDate}</div>
            <a href="#">{vendor.url}</a>
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
              <li>{vendor.createdDate}</li>
            </ul>
            <a href="#">{vendor.url}</a>
          </div>
        );
      })}
    </div>
  );
}

export default Vendors;
