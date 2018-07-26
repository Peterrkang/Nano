import React from "react";
import styles from "./styles.module.css";


const Vendors = ({ list, listView }) => {
  return listView ? (
    <ul className={styles.listFeatures}>
      <li className={styles.vendorsProps}>
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
    <div className={styles.flexContent}>
      {list.map(vendor => {
        return (
          <div key={vendor.id} className={styles.vendor}>
            <h2>{vendor.name.toUpperCase()}</h2>
            <ul className={styles.features}>
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
