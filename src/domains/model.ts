import fs from 'fs';
import existUsers from '../fake_repo/users.json';

const usersJSONPath = 'src/fake_repo/users.json'

export interface User {
    readonly id: String;
}

export function addUser(user: User) {
    const jsonString = fs.readFileSync(usersJSONPath, 'utf-8');
    const existUsers: User[] = JSON.parse(jsonString);

    // console.log(user)
    // console.log(jsonString)

    existUsers.push(user)

    // console.log(existUsers)

    fs.writeFileSync(usersJSONPath, JSON.stringify(existUsers), 'utf-8');
}

export function getUser(id: String) {
    const jsonString = fs.readFileSync(usersJSONPath, 'utf-8');
    const existUsers: User[] = JSON.parse(jsonString);
    const check = existUsers.filter((user) => user.id == id)[0]
    return check;
}


export interface Discussion {
    readonly tags: String[];
    readonly responses: String[]
}


addUser({ id: "hiiii" })
getUser("hiiii")
// export class User {
//     id: String;

//     constructor(id: String) {
//         this.id = id;
//     }
// }
