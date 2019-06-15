
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";
import fs from "fs";
import cheerio from "cheerio";

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

const openSaveDialog = (content) => () => {
    dialog.showSaveDialog(remote.getCurrentWindow(), {}, (fileName: string) => {
        if (!fileName) {
            console.error("No file was saved.");
            return;
        }

        fs.writeFile(fileName, content, (err => {
            if (err) {
                alert(`An error occured ${err.message}`);
            } else {
                alert("File successfully saved.");
            }
        }));
    });
};

const makeRequest = (url: string) => async () => {
    try {
        const httpUrl = url.startsWith("http") ? url : `http://${url}`;
        const request = await fetch(httpUrl);
        if (request.ok) {
            const text = await request.text();
            const $ = cheerio.load(text);
            console.log($("#mtga-textarea").text());
        }
    } catch (error) {
        alert(`An error occured ${error.message}`);
    }
};

const handleChange = setFunction => event => setFunction(event.target.value);

const Home = ({ setHome, home }: HomeProps) => {
    const [text, setText] = useState("");
    const [tappedOutUrl, setTappedOutUrl] = useState("");
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
            <div>
                <Button variant="outlined" onClick={openSaveDialog(text)} >
                    Save Random File In Text?
                </Button>
            </div>
            <div>
                <TextField value={tappedOutUrl} onChange={handleChange(setTappedOutUrl)} />
                <Button variant="outlined" onClick={makeRequest(tappedOutUrl)} >
                    Make dek rekwest
                </Button>
            </div>
        </div>
    );
};

export default Home;
