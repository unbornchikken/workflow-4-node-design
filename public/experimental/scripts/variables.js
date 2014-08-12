function Variable(variables)
{
    this.variables = variables;

    this.name = ko.observable("");
    this.expression = ko.observable("");
    this.activity = ko.observable(null);
}

Variable.prototype.remove = function()
{
    this.variables.removeVariable(this);
}

function Variables(presenter)
{
    this.presener = presenter;

    this.items = ko.observableArray();
    this.items.push(new Variable(this));
}

Variables.prototype.createVariable = function()
{
    this.items.push(new Variable(this));
}

Variables.prototype.removeVariable = function(variable)
{
    this.items.remove(variable);
}