import './reset.css';
import "./style.css";
import toDo, { projectsController } from "./listModule.js";
import ScreenController from "./screenController.js";

window.onload = () => {
    projectsController.importJSON();
    ScreenController.updateDisplay();
}