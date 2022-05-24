import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>RPG </span> World
      </h1>
      <p className={headerStyles.description}>Create your own world</p>
    </div>
  );
};
export default Header;
