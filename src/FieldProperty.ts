export default class FieldProperty {
    public get defFieldValue(): number {
        return (this.index === 0 ? this.DEF_FIELDONEWIDTH : this.DEF_WIDTH);
    }
    public get width(): number {
        if (this.mwidth === 0) { this.mwidth = this.defFieldValue; }
        return (this.mwidth < this.DEF_MINWIDTH ? this.DEF_MINWIDTH : this.mwidth);
    }
    public set width(value: number) {
        this.mwidth = value;
    }
    private get index(): number {
        return this.sourceField.findIndex((o: FieldProperty) => o === this);
    }
    public readonly  DEF_MINWIDTH: number = 50;
    public readonly  DEF_WIDTH: number = 100;
    public readonly  DEF_FIELDONEWIDTH: number = 200;

    private sourceField: FieldProperty[] = [];
    private mwidth: number = 0;
    constructor(fields: FieldProperty[]) {
        this.sourceField = fields;
    }



}
