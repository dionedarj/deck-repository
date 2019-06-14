
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import routes from "../constants/routes.json";

const useStyles = makeStyles({
    backButton:  {
        position: "absolute"
    },
      
    counter: {
        position: "absolute",
        top: "30%",
        left: "45%",
        fontSize: "10rem",
        fontWeight: "bold",
        letterSpacing: "-0.025em",
    },
      
    btnGroup: {
        position: "relative",
        top: "500px",
        width: "480px",
        margin: "0 auto",
    },
      
    btn: {
        fontSize: "1.6rem",
        fontWeight: "bold",
        backgroundColor: "#fff",
        borderRadius: "50%",
        margin: "10px",
        width: "100px",
        height: "100px",
        opacity: 0.7,
        cursor: "pointer",
        fontFamily: "Arial, Helvetica, Helvetica Neue, sans-serif",
    },
});

type Props = {
  increment: () => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  decrement: () => void,
  counter: number
};

const Counter = (props: Props) => {
    const styles = useStyles();
    const {
        increment,
        incrementIfOdd,
        incrementAsync,
        decrement,
        counter
    } = props;

    return (
        <div>
            <div className={styles.backButton} data-tid="backButton">
                <Link to={routes.HOME}>
                    <i className="fa fa-arrow-left fa-3x" />
                </Link>
            </div>
            <div className={`counter ${styles.counter}`} data-tid="counter">
                {counter}
            </div>
            <div className={styles.btnGroup}>
                <button
                    className={styles.btn}
                    onClick={increment}
                    data-tclass="btn"
                    type="button"
                >
                    <i className="fa fa-plus" />
                </button>
                <button
                    className={styles.btn}
                    onClick={decrement}
                    data-tclass="btn"
                    type="button"
                >
                    <i className="fa fa-minus" />
                </button>
                <button
                    className={styles.btn}
                    onClick={incrementIfOdd}
                    data-tclass="btn"
                    type="button"
                >
            odd
                </button>
                <button
                    className={styles.btn}
                    onClick={() => incrementAsync()}
                    data-tclass="btn"
                    type="button"
                >
            async
                </button>
            </div>
        </div>
    );
};

export default Counter;
