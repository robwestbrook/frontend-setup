import "core-js/stable";
import "regenerator-runtime/runtime";

import Controller from "./Controllers/index.controller";
import Model from "./Models/index.model";
import View from "./Views/index.view";

const app = new Controller(new Model(), new View());
