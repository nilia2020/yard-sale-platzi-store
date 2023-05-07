import styles from "@styles/Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <a className="title">My orders</a>
        </li>
        <li>
          <a>My account</a>
        </li>
        <li>
          <a>Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
