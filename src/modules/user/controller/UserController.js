import UserService from "../service/UserService.js"

class UserController {

    async getAccessToken(req, res) {
        let getAccessToken = await UserService.getAccessToken(req);
        return res.status(getAccessToken.status).json(getAccessToken);
    }

    async findByEmail(req, res) {
        let user = await UserService.findByEmail(req);

        return res.status(user.status).json(user);
    }
}

export default new UserController();