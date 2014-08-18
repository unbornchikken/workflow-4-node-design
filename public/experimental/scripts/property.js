function Property(parent, definition)
{
    Value.call(this, parent);

    this.typeID = "property";

    this.definition = definition;
    this.name = ko.observable(definition.name);
    this.type = ko.observable(definition.type || "expression");
}

util.inherits(Property, Value);
