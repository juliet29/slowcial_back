import fs from 'fs';


export interface User {
    readonly id: String;
}


export interface Discussion {
    readonly id: String;
    readonly tags: String[];
    readonly responses: String[]
}

type EntityName = "User" | "Discussion" | "Response" | "Tag"
type Entity = User | Discussion

export function accessRepo(entity: EntityName) {
    const path = `src/fake_repo/${entity}.json`
    const jsonString = fs.readFileSync(path, 'utf-8');
    return JSON.parse(jsonString)
}

export function overwriteRepo(entity: EntityName, data: Entity[]) {
    const path = `src/fake_repo/${entity}.json`
    fs.writeFileSync(path, JSON.stringify(data), 'utf-8');
    return true
}

export function addEntity(entityName: EntityName, entity: Entity) {
    const existEntities: Entity[] = accessRepo(entityName)
    // check that the types are the same
    if (!existEntities.every(item => typeof item === typeof entity)) throw new Error("Entity types do not match!")

    existEntities.push(entity)
    overwriteRepo(entityName, existEntities)
}

export function getEntityById(entity: EntityName, id: String) {
    const existEntities: Entity[] = accessRepo(entity)
    const check = existEntities.filter((entity) => entity.id == id)[0]
    // TODO ids should be unique..
    return check;
}

export function resetAllFakeRepos() {
    const entities = ["User", "Discussion", "Response", "Tag"]
    entities.forEach(entity => {
        const path = `src/fake_repo/${entity}.json`
        fs.writeFileSync(path, JSON.stringify([]), 'utf-8');
    })

}




// addUser({ id: "hiiii" })
// getUser("hiiii")
// export class User {
//     id: String;

//     constructor(id: String) {
//         this.id = id;
//     }
// }
