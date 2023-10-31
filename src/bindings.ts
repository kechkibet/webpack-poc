
declare function displayMenuJs(menuItems: string[]): number;

export function displayMenu(header: string, menus:string[]): number {
    let x = []
    x[0] = header
    menus.forEach(value => x.push(value))
    return displayMenuJs.apply(this, x)
}

// duktape.d.ts
export enum InputType {
    Currency = 1,
    Text = 2
}

export declare function getInput(header: string, prompt: string, inputType: InputType): string;
