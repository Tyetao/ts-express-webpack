import { Request, Response, NextFunction } from "express";
// import { User } from "../models/User";
class User {
  constructor() {}
  public login(req: Request,res: Response, next: NextFunction) {
    res.send(req.param('name'))
  }

  public postSignup(req: Request,res: Response, next: NextFunction) {
    console.log(req.body);
    res.json(req.body);
    // let User = new User({
    //   name: 'tanyetao',
    //   password: '123456'
    // });

    // User.save((err, res) => {
    //   console.log(res);
    // })
  }
}

export const UserCtrl = new User();