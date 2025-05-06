import { BsSearch } from "react-icons/bs";
import styles from "./index.module.css";
import Button from "../button";

export function SearchBar() {
  return (
    <>
      <div className={styles.searchContainer}>
        <BsSearch />
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="input-search"
            placeholder="O que você procura?"
          />
        </div>
        <Button
          to="/"
          text="Ir"
          customClass="btnColor"
          customClass2="btnSearch"
        ></Button>
      </div>
    </>
  );
}

export default SearchBar;
