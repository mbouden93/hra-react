function writeCookie(name,value,time) {
    let date, expires;
    if (time) {
        date = new Date();
        date.setTime(date.getTime()+(time*60*1000));
        expires = "; expires=" + date.toGMTString();
    }else{
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    let i, c, ca, nameEQ = name + "=";
    ca = document.cookie.split(';');
    for(i=0;i < ca.length;i++) {
        c = ca[i];
        while (c.charAt(0)===' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return '';
}

function e4() {
    let h=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let k=['x','x','x','x','x','x','x','x','-','x','x','x','x','-',
        '4','x','x','x','-','y','x','x','x','-','x','x','x','x','x','x','x','x','x','x','x','x'];
    let u='',i=0,rb=Math.random()*0xffffffff|0;
    while(i++<36) {
        let c=k[i-1],r=rb&0xf,v=c==='x'?r:((r&0x3)|0x8);
        u+=(c==='-'||c==='4')?c:h[v];rb=i%8===0?Math.random()*0xffffffff|0:rb>>4
    }
    return u
}

function getEmployeeRole() {
    if (localStorage.getItem("roles")) {
        let roles = localStorage.getItem("roles");
        let employee = roles.substring( roles.indexOf("EMPLOYEE("),roles.indexOf(")",roles.indexOf("EMPLOYEE("))+1);
        return employee;
    }
    return "FAILED";
}

function getUserName(user) {
    let value = "";
    if (user.occurrences && user.occurrences.occurrence) {
        let occurrence = user.occurrences.occurrence;
        occurrence.map(item => {
            if (item["@datasection"] === "ZY3Y") {
                let data = item.data;
                data.map( line => {
                    if (line.item === "NMPRES")
                        value = line.value;
                        return value;
                });
                return value;
            } else {
                value = "FAILED";
                return value;
            }
        });
    }
    return value;
}

function createSession(body) {
    let x = e4();
    writeCookie("sessionId", x, 30);
    let roles = [];
    let population = "";
    body.roles.role.map( role => {
        roles.push(role["@name"]);
        if (role["@name"].includes("EMPLOYEE")) {
            population = role["@dossierID"];
        }
        return true;
    });
    localStorage.setItem("roles", roles);
    localStorage.setItem("dossierId", population);
    return true;
}

export { readCookie, writeCookie, e4, getEmployeeRole, getUserName, createSession };