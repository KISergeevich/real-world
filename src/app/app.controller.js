import { AppModel } from "./app.model";
import { AppView } from "./app.view";

export class AppController {
    model;
    view;

    constructor(element) {
        this.model = new AppModel();

        this.view = new AppView(element);
        this.view.refresh(this.model);
    }
}