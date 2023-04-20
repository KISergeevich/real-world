import { AppModel } from "./app.model";
import { AppView } from "./app.view";

export class AppController {
    model;
    view;

    constructor(element) {
        this.model = new AppModel();

        this.view = new AppView(element);

        this.view.subscribeSwitchToSignup(this.onSwitchToSignup.bind(this));
        this.view.subscribeSwitchToLogin(this.onSwitchToLogin.bind(this));
        this.view.subscribeSwitchToLogout(this.onSwitchToLogout.bind(this));


        this.view.refresh(this.model);

    }

    onSwitchToSignup() {
        this.model.state = 'signup';
        this.view.refresh(this.model);
    }

    onSwitchToLogin() {
        this.model.state = "login";
        this.view.refresh(this.model);
    }

    onSwitchToLogout() {
        this.model.token = undefined;
        this.model.state = "login";
        this.view.refresh(this.model);
    }

}