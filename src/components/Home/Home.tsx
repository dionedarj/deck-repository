
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";

const { remote } = require("electron");

const { dialog } = remote;

const styles = makeStyles({
    container: {
        top: "30%",
        textAlign: "center"
    }
});

type HomeProps = {
    setHome(home: string): void,
    home: string
};


const handleChange = setFunction => event => setFunction(event.target.value);

const Home = ({ setHome, home }: HomeProps) => {
    const [text, setText] = useState("");
    const classes = styles();

    return (
        <div className={classes.container} data-tid="container">
            <h2>Home</h2>
            <div>
                <TextField value={text} onChange={handleChange(setText)} />
            </div>
            <div>
                <TextField disabled value={home} />
            </div>
            <div>
                <Button variant="outlined" onClick={() => setHome(text)} >
                    Hello worlds!
                </Button>
            </div>
        </div>
    );
};

export default Home;
