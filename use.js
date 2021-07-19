let MagicSetterGetter = require('./magicsettergetter');

let m = new MagicSetterGetter();
console.log(m.set("firstName", "Ankita"));
console.log(m.get("firstName"));