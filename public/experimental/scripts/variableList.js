function VariableList()
{
    ValueList.call(this, {
        title: "Variables",
        createNewText: "Create variable"
    });
}

util.inherits(VariableList, ValueList);

VariableList.prototype.createNew = function()
{
    this.items.push(new Variable(this));
}