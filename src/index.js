import "./style.css";
import toDo, { projectsController } from "./listModule.js";
import ScreenController from "./screenController.js";

toDo.createToDo("a", "a", " b", " c");
toDo.createToDo("a", "a", " b", " c");
projectsController.createNewProject("new");

window.onload = () => {
    ScreenController.updateProjectSelector();
    ScreenController.updateDisplay();
}