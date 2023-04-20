import { newElement } from "../utils/new-element";


export class AppView {
    element;
    switchToSignupCallback;
    switchToLoginCallback;
    switchToLogoutCallback;


    constructor(element) {
        this.element = element;
    }

    refresh(model) {
        this.element.innerHTML = "";

        this.element.append(this.createHeaderElement(model));

        this.element.append(this.createMainElement(model));
    } // Перерисовывает view'ху

    createHeaderElement(model) {
        const header = newElement("section", "header");
        if (model.state === 'signup') {
            const login = newElement("button", "header__login", "login");
            login.addEventListener("click", () => {
                this.emitSwitchToLogin();
            });
            header.append(login);
        }

        if (model.state === 'login') {
            const signup = newElement("button", "header__signup", "signup");
            signup.addEventListener("click", () => {
                this.emitSwitchToSignup();
            });
            header.append(signup);
        }

        if (model.state === 'auth') {
            const logout = newElement("button", "header__logout", "logout");
            logout.addEventListener("click", () => {
                this.emitSwitchToLogout();
            });
            header.append(logout);
        }
        return header;
    }

    createMainElement(model) {
        const main = newElement("section", "main", model.state);
        return main;
    }

    subscribeSwitchToSignup(callback) {
        this.switchToSignupCallback = callback;
    }

    emitSwitchToSignup() {
        if (this.switchToSignupCallback !== undefined) {
            this.switchToSignupCallback();
        }
    }

    subscribeSwitchToLogin(callback) {
        this.switchToLoginCallback = callback;
    }

    emitSwitchToLogin() {
        if (this.switchToLoginCallback !== undefined) {
            this.switchToLoginCallback();
        }
    }

    subscribeSwitchToLogout(callback) {
        this.switchToLogoutCallback = callback;
    }

    emitSwitchToLogout() {
        if (this.switchToLogoutCallback !== undefined) {
            this.switchToLogoutCallback();
        }
    }


}