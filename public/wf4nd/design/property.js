define(['wf-design/value', 'wf-common/util', 'knockout'], function (Value, util, ko) {
    function Property(parent, definition) {
        Value.call(this, parent);

        this.typeID = "property";
        this.name = ko.observable(definition.name);
        this.type = ko.observable(definition.type || "expression");
        this.values = ko.observableArray(definition.values || []);
    }

    util.inherits(Property, Value);

    return Property;
});