define(['wf-design/valueList', 'wf-design/variable', 'wf-common/util'], function (ValueList, Variable, util) {
    function VariableList() {
        ValueList.call(this, {
            title: "Variables",
            createNewText: "Create variable"
        });
    }

    util.inherits(VariableList, ValueList);

    VariableList.prototype.createNew = function () {
        this.items.push(new Variable(this));
    }

    return VariableList;
});