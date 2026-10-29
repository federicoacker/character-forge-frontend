import { Link } from "react-router";
import styles from "./NotFound.module.css";
function NotFound() {
    return (
        <div className={`text-center py-5 ${styles.card}`}>
            <h1 className={`display-1 fw-bold ${styles.notFound}`}>404</h1>
            <p className={styles.lead}>Page not found</p>
            <Link className={`btn ${styles.actionButton}`} to="/">Return to home</Link>
        </div>
    );
}
export default NotFound;