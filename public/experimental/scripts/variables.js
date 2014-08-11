function Variable(variables)
{
    this.variables = variables;

    this.name = ko.observable("");
    this.expression = ko.observable("");
    this.activity = ko.observable(null);
}

function Variables(presenter)
{
    this.presener = presenter;

    this.items = ko.observableArray();
    this.items.push(new Variable(this));
}