import styles from "./Tabs.module.css"
import { useState } from "react";
export default function Tabs({ children }) {

  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleTabClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  }

  return (
    <div className="mt-14">
      <ul className={styles.tabs}>
        {
          children.map((tab) => (
            <li key={tab.props.label} className={tab.props.label == activeTab ? styles.current : ""}>
              <a href="#" onClick={(e) => { handleTabClick(e, tab.props.label) }}>{tab.props.label}</a>
            </li>
          ))
        }
      </ul>
      {children.map((child) => {
        if (child.props.label == activeTab)
          return (
            <div key={child.props.label} className={`${styles.content} bg-gray-100`}>
              {child.props.children}
            </div>
          )
      })}
    </div>
  );
}
