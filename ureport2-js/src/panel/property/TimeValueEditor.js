/**
 * Created by Foxcpu on 2018-11-18
 */
import {setDirty} from '../../Utils.js';

export default class TimeValueEditor{
    constructor(parentContainer,context){
        this.context=context;
        this.container=$(`<div></div>`);
        parentContainer.append(this.container);
        this.container.hide();
        this.init();
    }
    init(){
        const _this=this;
        this.container.append(this.buildDataFormat());
    }

    buildDataFormat(){
        const _this=this;
        const group=$(`<div class="form-group" style="margin-left: 8px;margin-top: 5px;margin-bottom: 5px;"><label>${window.i18n.property.time.format}</label></div>`);
        this.dataFormatSelect=$(`<select class="form-control" style="display: inline-block;width:305px;padding:2px;font-size: 12px;height: 25px">
            <option></option>
        </select>`);
        group.append(this.dataFormatSelect);
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