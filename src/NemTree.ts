import TreeNode from './TreeNode';
import FieldProperty from './FieldProperty';
export default class NemTree {
    public nodes: TreeNode[] = [];
    public fieldProperty: FieldProperty[] = [];
    constructor() {
        for (let i: number = 0 ; i < 100; i++ ) {
            const fldProp: FieldProperty = new FieldProperty(this.fieldProperty);
            this.fieldProperty.push(fldProp);
        }
    }

}
