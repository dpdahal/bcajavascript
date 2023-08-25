import header from "./components/header.js";
import footer from "./components/footer.js";
import menu from "./components/menu.js";
function app(){
    let outPut="<div>";
    outPut+=header('JavaScript');
    outPut+=menu();
    outPut+="<h1>Hello JavaScript</h1>";
    outPut+=footer();
    outPut+="</div>";
    return outPut;
}

export default app;