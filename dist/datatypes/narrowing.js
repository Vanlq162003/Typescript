// 1. Union type
// typeof
function print1(a) {
    if (typeof a === "string") {
        return a.toUpperCase();
    }
    return a;
}
// 2. Optional
function optionalFunc(sinhvien) {
    if (sinhvien) {
        return sinhvien.name;
    }
}
optionalFunc();
var ROLE;
(function (ROLE) {
    ROLE[ROLE["STAFF"] = 0] = "STAFF";
    ROLE[ROLE["MANAGER"] = 1] = "MANAGER";
})(ROLE || (ROLE = {}));
function checkAdmin(user) {
    if ("is_admin" in user && user.is_admin) {
        console.log("welcom to Admin");
    }
    else {
        console.log("You are not Admin");
    }
}
var user = {
    username: "van",
    password: "123",
    email: "van@gmail.com",
    is_admin: false,
    role: ROLE.STAFF
};
checkAdmin(user);
