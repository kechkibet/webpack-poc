import {displayMenu, getInput, InputType} from "./bindings";

export function handleLinkCard() {
    var bank = displayMenu("Link Card | Customer Bank",["Bank of Oromia"])
    if (bank === -1) return;
    const customerAccount = getInput(
        "Link Card",
        "Enter customer account number",
        InputType.Text
    );

}
