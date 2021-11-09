class Project {
    constructor(name, description, url, url_type){
        this.name = name;
        this.description = description;
        this.url = url;
        this.url_type = url_type;
    }
}

$(function(){
    let projects = [];
    projects.push(new Project("osu!Achieved", "A chromium based stat tracker for the osu! game", "https://github.com/EngineerMark/OsuAchievedOverlay", "repo"));
    projects.push(new Project("OsuHelper", "A helper library providing classes and calculators for scores of osu! game", "https://github.com/EngineerMark/OsuHelper", "repo"));

    let projectNode = $('#projectObjectPrefab');
    let projectGroupNode = projectNode.parent();

    for(let i=0;i<projects.length;i++){
        let project = projects[i];
        let newProjectNode = projectNode.clone();

        newProjectNode.attr("id", "projectObject_"+i);

        let localNodeTitle = newProjectNode.find("#projectObjectTitle");
        localNodeTitle.text(project.name);

        let localNodeDesc = newProjectNode.find("#projectObjectDescription");
        localNodeDesc.text(project.description);

        let localNodeUrl = newProjectNode.find("#projectObjectUrl");
        if(project.url_type=="repo"){
            localNodeUrl.html("Visit repository <i class=\"fas fa-external-link-alt\"></i>");
        }else{
            localNodeUrl.html("Visit website <i class=\"fas fa-external-link-alt\"></i>");
        }
        localNodeUrl.attr("href", project.url);


        newProjectNode.append("<br/>");
        projectGroupNode.append(newProjectNode);
    }

    projectNode.remove();
});