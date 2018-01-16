import { UserCtrl } from "../controllers/user";

module.exports = (app) =>{
    app.get("/login", UserCtrl.login);
    app.post("/signup", UserCtrl.postSignup);
}
