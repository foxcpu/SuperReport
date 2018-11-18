/**
 * Created by Foxcpu on 2018-11-10
 */
import {setDirty} from '../../Utils.js';

export default class DoubleValueEditor{
    constructor(parentContainer,context){
        this.context=context;
        this.container=$(`<div></div>`);
        parentContainer.append(this.container);
        this.container.hide();
        this.init();
    }
    init(){
        const _this=this;
        this.container.append(this.buildDataLength());
        this.container.append(this.buildDataPrecision());
    }

    buildDataLength(){
        const _this=this;
        const group=$(`<div class="form-group" style="margin-left: 8px;margin-top: 5px;margin-bottom: 5px;"><label>${window.i18n.property.number.dataLength}</label></div>`);
        this.dataLengthEditor=$(`<input type="number" class="form-control" placeholder="${window.i18n.property.number.tipLength}" style="display: inline-block;width: 310px;padding: 3px;font-size: 12px;height: 25px;">`);
        group.append(this.dataLengthEditor);
        return group;
    }
    buildDataPrecision(){
        const _this=this;
        const group=$(`<div class="form-group" style="margin-left: 8px;margin-top: 5px;margin-bottom: 5px;"><label>${window.i18n.property.number.dataPrecision}</label></div>`);
        this.dataPrecisionEditor=$(`<input type="number" class="form-control" placeholder="${window.i18n.property.number.tipPrecision}" style="display: inline-block;width: 310px;padding: 3px;font-size: 12px;height: 25px;">`);
        group.append(this.dataPrecisionEditor);
        return group;
    }

    show(cellDef,rowIndex,colIndex,row2Index,col2Index){
        this.cellDef=cellDef;
        this.rowIndex=rowIndex;
        this.colIndex=colIndex;
        this.container.show();
        this.dataLengthEditor.val(cellDef.cellStyle.lineHeight);
        this.dataPrecisionEditor.val(cellDef.cellStyle.lineHeight);
    }
    hide(){
        this.container.hide();
    }
}