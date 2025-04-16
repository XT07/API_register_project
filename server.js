const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const auth = require("./midleware/midleware");

const secret_key = "xyzuabibipopatumqueijo";

app.use(express.json());
app.use(bodyParser.json());

const Project = require("./model/Project");
const Storage = require("./model/ProjectStorage");

app.post("/create", auth, (req, res) => {
    try{
        const data = req.body;
        const idProject = Storage.project();
        let id = '1';

        if(
            data.name == undefined ||
            data.description == undefined ||
            data.startDate == undefined ||
            data.previewDate == undefined ||
            data.finishedDate == undefined ||
            data.status == undefined
        ){
            res.status(400).send(`Nem todos os campos foram definidos`);
        }else if(
            data.name.trim() == "" ||
            data.description.trim() == "" ||
            data.startDate.trim() == "" ||
            data.previewDate.trim() == "" ||
            data.finishedDate.trim() == "" ||
            data.status.trim() == ""
        ){
            res.status(400).send(`Preencha todos os campos`);
        }else {
            const newProject = new Project(
                data.name,
                data.description,
                data.startDate,
                data.previewDate,
                data.finishedDate,
                data.status,
                id = idProject.length + 1
            );
            Storage.add(newProject);
        
            res.json(Storage.project());
        }
    }catch(e){
        res.status(401).send(`Erro ao criar o projeto: ${e}`);
    }
});

app.get("/project/:id", auth, (req, res) => {
    try{
        const id = req.params.id;
        res.status(200).json(Storage.one(id));
    }catch(e){
        res.status(401).send(`Não foi possivel achar o id do projeto requisitado ${e}`)
    }
})

app.get("/projects", auth, (req, res) => {
    try{
        res.status(200).json(Storage.project());
    }catch(e){
        res.status(404).send(`Erro ao coletar os projetos: ${e}`);
    }
});

app.post("/gen", (req, res) => {
    let user = "usuario";
    const token = jwt.sign({ user }, secret_key, { expiresIn: "1h" });
    res.json(token);
});

app.listen(8080, () => {
    console.log("API rodando");
});