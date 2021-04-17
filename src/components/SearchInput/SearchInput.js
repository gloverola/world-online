import SearchRounded from "@material-ui/icons/SearchRounded";
import styles from "./SearchInput.module.css";

const SearchInput = ({ ...props }) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded color='inherit' />
      <input className={styles.input} {...props} />
    </div>
  );
};

export default SearchInput;
