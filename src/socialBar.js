import React from "react";
import styles from "./styles.module.css";


const SocialBar = () => {
  const copyToClipboard = e => {
    e.preventDefault();
    const textField = document.createElement("textarea");
    textField.innerText = e.target.text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <ul className={styles["flex-footer"]}>
      <li className={styles["address"]}>
        <a onClick={e => copyToClipboard(e)}>
          xrb_1qda5qf73sc8rkan3i5zo1nc1a9bxo6zwefbebcg6gn3ziuz1naxhz6u37yz
        </a>
      </li>
      <li className={styles["social"]}>
        <a href="http://github.com/peterrkang/Nano">
          <i className="fa fa-github" />
        </a>
      </li>
      <li className={styles["social"]}>
        <a href="http://linkedin.com/in/peterrkang">
          <i className="fa fa-linkedin" />
        </a>
      </li>
    </ul>
  );
};

export default SocialBar;
