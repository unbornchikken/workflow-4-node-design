function Variable(parent)
{
    Value.call(this, parent);

    this.name = ko.observable("");
}

util.inherits(Variable, Value);
