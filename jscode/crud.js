import { System } from "./system.js";
export class CRUD {
    constructor() { }
    static addObj(user) {
        fetch("https://api.jsonbin.io/v3/b", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": "$2b$10$hCfALhvnLKW4zh59E2pxD.EoRlxJSxEf2R70ogzKtK.DO0WrQIxeG",
                "X-Bin-Name": user.name,
            },
            body: JSON.stringify([user]),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    static deleteObj(objId) {
        fetch("https://api.jsonbin.io/v3/b/" + objId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": "$2b$10$hCfALhvnLKW4zh59E2pxD.EoRlxJSxEf2R70ogzKtK.DO0WrQIxeG ",
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    static putObj(objId) {
        fetch("https://api.jsonbin.io/v3/b/" + objId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": "$2b$10$hCfALhvnLKW4zh59E2pxD.EoRlxJSxEf2R70ogzKtK.DO0WrQIxeG ",
            },
            body: JSON.stringify(System.allUsers),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    
}
