import FieldProperty from './FieldProperty';
export default class Field {
    public get width(): number {
        return this.fieldProperty[this.index].width;
    }
    public set width(value: number) {
        this.fieldProperty[this.index].width = value;
    }
    public get index(): number {
        return this.sourceField.findIndex((o: Field) => o === this);
    }
    public fieldName: string = '';
    public value: string = '';
    private sourceField: Field[] = [];
    private fieldProperty: FieldProperty[] = [];
    constructor(fields: Field[], fieldProperty: FieldProperty[] ) {
        this.sourceField = fields;
        this.fieldProperty = fieldProperty;
    }
}
