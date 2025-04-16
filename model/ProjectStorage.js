const Project = require("./Project");

class ProjectStorage {
    constructor() {
        this.projects = []
    }

    add(project) {
        try{
            this.projects.push(project);
        }catch(e){
            return `Não foi possivel adicionar o projeto: ${e}`;
        }
    }

    project() {
        return this.projects;
    }

    one(id) {
        for(let i = '1'; i <= this.projects.length; i++){
            if(this.projects[i - 1].id == id){
                let index = i -1;
                return [this.projects[i -1], index];
            }
        }
    }

    delete(index) {
        this.projects.splice(index, 1);
    }
}

module.exports = new ProjectStorage();