function Property(parent, definition)
{
    Value.call(this, parent);

    this.definition = definition;
}

util.inherits(Property, Value);
