define(['wf-design/value', 'wf-common/util', 'knockout'], function(Value, util, ko) {
    function Variable(parent) {
        Value.call(this, parent);

        this.typeID = "variable";

        this.name = ko.observable("");
    }

    util.inherits(Variable, Value);

    return Variable;
});
