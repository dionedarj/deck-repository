
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
    container: {
        top: "30%",
        textAlign: "center"
    }
});

const Home = () => {
    const [text, setText] = useState("");
    const [disabledText, setDisabledText] = useState("");
    const classes = styles();

    const handleChange = setFunction => event => setFunction(event.target.value);

    return (
        <div className={classes.container} data-tid="container">
            <h2>Home</h2>
            <div>
                <TextField 
                    value={text}
                    onChange={handleChange(setText)}
                />
            </div>
            <div>
                <TextField
                    disabled
                    value={disabledText}
                />
            </div>
            <Button
                variant="outlined"
                onClick={() => setDisabledText(text)}
            >
                Hello worlds!
            </Button>
        </div>
    );
};

export default Home;
