function Variable(parent)
{
    Value.call(this, parent);

    this.typeID = "variable";

    this.name = ko.observable("");
}

util.inherits(Variable, Value);
