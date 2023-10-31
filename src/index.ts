import {displayMenu} from "./bindings";
import {handleLinkCard} from "./linkCard";

while (true) {
    const response = displayMenu("Quantum Ethiopia", ["Sale",
        "Supervisor",
        "Admin",
        "Logout",]);
    let logout = false;
    switch (response) {
        case 0:
            handleLinkCard();
            break;
        // case 1:
        //     handleSupervisor();
        //     break;
        // case 2:
        //     handleAdmin();
        //     break;
        case 3:
            logout = true;
            break;
        default:
            break;
    }
    if (logout) break;
}
