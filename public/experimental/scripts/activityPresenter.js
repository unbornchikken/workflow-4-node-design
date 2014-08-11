function ActivityPresenter()
{
    this.isExpanded = ko.observable(true);
    this.displayName = ko.observable("");

    this.variables = ko.observable(new Variables(this));
}

ActivityPresenter.prototype.expandClick = function()
{
    this.isExpanded(!this.isExpanded());
}