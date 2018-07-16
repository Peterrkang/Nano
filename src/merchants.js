import React from "react";

function Merchants({ list, viewType }) {
  return viewType ? (
    <ul className="list-features">
      {list.map(merchant => {
        return (
          <li key={merchant.id}>
            <div>{merchant.name}</div>
            <div>{merchant.product}</div>
            <div>{merchant.location}</div>
            <div>{merchant.createdDate}</div>
            <a href="#">{merchant.url}</a>
          </li>
        );
      })}
    </ul>
  ) : (
    <div className="flex-content">
      {list.map(merchant => {
        return (
          <div key={merchant.id} className="merchant">
            <h2>{merchant.name.toUpperCase()}</h2>
            <ul className="features">
              <li>{merchant.product}</li>
              <li>{merchant.location}</li>
              <li>{merchant.createdDate}</li>
            </ul>
            <a href="#">{merchant.url}</a>
          </div>
        );
      })}
    </div>
  );
}

export default Merchants;
