class Project {
    constructor(name, desc, startDate, previewDate, finishedDate, status, id) {
        this.name = name,
        this.description = desc,
        this.startDate = startDate,
        this.previewDate = previewDate,
        this.finishedDate = finishedDate,
        this.status = status,
        this.id = id
    }
}

module.exports = Project;