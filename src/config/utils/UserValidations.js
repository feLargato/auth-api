import UserException from "../../modules/user/exception/UserException.js"
import * as HttpStatus from "../utils/HttpStatus.js"
import bcrypt from "bcrypt"
import User from "../../modules/user/model/User.js";


class UserValidations {

    validateEmail(email) {
        if(!email) {
            throw new UserException(
                HttpStatus.BAD_REQUEST ,
                "Email not informed");
        }
    }

    validateUserNotFound(user) {
        if(!user) {
            throw new UserException(HttpStatus.BAD_REQUEST, "User not found");
        }
    }

    validateAccessData(email, password) {
        if(!email || !password) {
            throw new UserException(HttpStatus.UNAUTHORIZED, "Email and password must be informed.");
        }
    }

    async validatePassword(password, encriptedPassword) {
        if(!await bcrypt.compare(password, encriptedPassword)) {
            throw new UserException(HttpStatus.UNAUTHORIZED, "Wrong password");
        }
    }

    validateUserLoggedIn(user, authenticatedUser) {
        if(!authenticatedUser || user.id !== authenticatedUser.id) {
            throw new UserException(HttpStatus.FORBIDDEN, "You can only see your user data.");
        }
    }

}

export default new UserValidations();