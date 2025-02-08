import fs from 'fs';


export interface User {
    readonly id: String;
}


export interface Discussion {
    readonly tags: String[];
    readonly responses: String[]
}

type EntityName = "User" | "Discussion" | "Response" | "Tag"
type Entity = User | Discussion

export function accessRepo(entity:EntityName) {
    const path = `src/fake_repo/${entity}.json`
    const jsonString = fs.readFileSync(path, 'utf-8');
    return JSON.parse(jsonString)
}

export function overwriteRepo(entity:EntityName, data:Entity[]) {
    const path = `src/fake_repo/${entity}.json`
    fs.writeFileSync(path, JSON.stringify(data), 'utf-8');
    return true
}

function addEntity(entity:EntityName) {
    const existEntities: Entity[] = accessRepo(entity)
    existEntities.push()
    overwriteRepo(entity, existEntities)
}




export function addUser(user: User) {
    const existUsers: User[] = accessRepo("User")
    existUsers.push(user)
    overwriteRepo("User", existUsers)
}

export function getUser(id: String) {
    const existUsers: User[] = accessRepo("User")
    const check = existUsers.filter((user) => user.id == id)[0]
    return check;
}
export function getUser(id: String) {
    const existUsers: User[] = accessRepo("User")
    const check = existUsers.filter((user) => user.id == id)[0]
    return check;
}




// addUser({ id: "hiiii" })
// getUser("hiiii")
// export class User {
//     id: String;

//     constructor(id: String) {
//         this.id = id;
//     }
// }
