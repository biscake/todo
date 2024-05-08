import "./style.css";
import toDo, { projectsController } from "./listModule.js";
import ScreenController from "./screenController.js";

toDo.createList("1jlkafds", "askdl", "klad", "sa");
toDo.createList("2", "asasdlkkdl", "klkkad", "asdsa");
toDo.createList("3", "asasdlkkdl", "klkkad", "asdsa");
toDo.createList("4s", "asasdlkkdl", "klkkad", "asdsa");
toDo.createList("5ajalskdfksaffds", "asasdlkkdl", "klkkad", "asdsa");

toDo.deleteList(2);

toDo.createList("6", "ads", "d", "ka");

projectsController.createNewProject("another project");
projectsController.projectCursor = "another project";
toDo.createList("lasd",'asd','asd','a')

projectsController.createNewProject("test");

projectsController.projectCursor = "test";

// console.log(projectsController);
// console.log(projectsController.projects);
// console.log(projectsController.current());

ScreenController.updateDisplay();


