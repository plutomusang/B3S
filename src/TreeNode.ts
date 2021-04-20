import NemTree from './NemTree';
import Field from './Field';
export default class TreeNode {
    public get totalFieldWidth(): number {
        // console.log ('totalFieldWidth');
        const obj = this.fields;
        const total =  Object.keys(obj).reduce((sum: any, key: any) => {
            return sum + obj[key].width;
        }, 0);
        return total;
    }
    public get descendants(): TreeNode[] {
        return this.sourceNode.filter((o: TreeNode) => o.code.startsWith(this.code + '-'));
    }

    public get motherNode(): number {
        return parseInt(('0-' + this.code).split('-').reverse()[1], 10);
    }
    public get id(): number {
        return  parseInt(this.code.split('-').reverse()[0], 10);
    }
    public get level(): number {
        return ('0-' + this.code).split('-').length - 2;
    }
    public get siblings(): TreeNode[] {
        return this.sourceNode.filter((o: TreeNode) => o.motherNode === this.motherNode);
    }
    public get child(): TreeNode[] {
        return this.sourceNode.filter((o: TreeNode) => o.motherNode === this.id);
    }
    public get withChild(): boolean {
        return this.child.length > 0 ? true : false;
    }
    public get seq(): number {
        return this.siblings.findIndex((o: TreeNode) => o === this) + 1;
    }
    public get index(): number {
        return this.siblings.findIndex((o: TreeNode) => o === this);
    }
    public get open(): boolean {
        return this.mOpen;
    }
    public set open(value: boolean) {
        this.mOpen = value;
        this.descendants.forEach((node) => {
            node.visible = value;
        });
        const NodeClosed: TreeNode[] = this.descendants.filter((o: TreeNode) => o.open === false);
        NodeClosed.forEach((node) => {
            node.descendants.forEach((subnode) => {
                subnode.visible = false;
            });
        });
    }
    public sourceNode: TreeNode[] = [];
    public sourceTree: NemTree;
    public code: string = '';
    public visible: boolean = true;
    public showAddNew: boolean = false;
    public fields: Field[] = [];

    private mOpen: boolean = true;
    constructor( nemtree: any) {
        this.sourceNode = nemtree.nodes;
        this.sourceTree = nemtree;
    }
    public addField(fieldName: string, value: string) {
        const field: Field = new  Field(this.fields, this.sourceTree.fieldProperty);
        field.fieldName = fieldName;
        field.value = value;
        this.fields.push(field);
    }



}
