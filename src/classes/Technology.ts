export class Technology {
    public readonly name: string;
    public readonly color: string;
    public readonly textColor: string;

    constructor(name: string, color: string, textColor = 'ffffff') {
        this.name = name;
        this.color = color;
        this.textColor = textColor;
    }
}