package com.bstek.ureport.definition.datasource;

import com.bstek.ureport.definition.dataset.DatasetDefinition;

import java.util.List;

public class ZbDatasourceDefinition implements DatasourceDefinition {

    private String name;

    private List<DatasetDefinition> datasets;

    @Override
    public String getName() {
        return name;
    }

    @Override
    public List<DatasetDefinition> getDatasets() {
        return null;
    }

    @Override
    public DatasourceType getType() {
        return DatasourceType.zb;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDatasets(List<DatasetDefinition> datasets) {
        this.datasets = datasets;
    }
}
