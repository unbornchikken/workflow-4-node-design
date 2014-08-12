function ActivityPresenter(options)
{
    this.isExpanded = ko.observable(true);
    this.displayName = ko.observable("");
    this.tagName = ko.observable(options.tagName);

    this.variables = ko.observable(new Variables(this));
}

ActivityPresenter.prototype.expandClick = function()
{
    this.isExpanded(!this.isExpanded());
}
