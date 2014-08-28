define(['wf-design/value', 'wf-common/util', 'knockout', 'lodash'], function (Value, util, ko, _) {
    function Property(parent, definition) {
        Value.call(this, parent);

        this.typeID = "property";
        this.name = ko.observable(definition.name);
        this.type = ko.observable(definition.type || "expression");
        this.values = ko.observableArray(definition.values || []);
        this.expression(_.isUndefined(definition.defaultValue) ? null : definition.defaultValue);
        this.nullable = ko.observable(_.isUndefined(definition.nullable) ? true : (definition.nullable ? true : false));
        this.isNull = ko.pureComputed(function() {
            return this.expression() === null;
        }, this);
    }

    util.inherits(Property, Value);

    Property.prototype.toNull = function() {
        if (this.nullable()) this.expression(null);
    }

    return Property;
});