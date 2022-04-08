import bcrypt from "bcrypt";
import User from "../../modules/user/model/User.js";

export async function createMockedData() {
    await User.sync({
        force: true
    });

    let mockedPassword = await bcrypt.hash("qwerty", 10);

    await User.create({
        name: "fernando",
        email: "fernando@gmail.com",
        password: mockedPassword, 
    });

    User.create({
        name: "carla",
        email: "carla@gmail.com",
        password: mockedPassword, 
    });

}