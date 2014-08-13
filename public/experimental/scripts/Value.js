function Value(parent)
{
    this.parent = parent;

    this._mouseOverCategoryMenu = false;
    this._hideId = null;

    this.expression = ko.observable("");
    this.activity = ko.observable(null);
    this.categoryMenuVisible = ko.observable(false);
}

Value.prototype.remove = function()
{
    this.parent.remove(this);
}

Value.prototype.onMouseOverCategoryMenu = function()
{
    this._mouseOverCategoryMenu = true;
    if (this._hideId)
    {
        clearTimeout(this._hideId);
        this._hideId = null;
    }
}

Value.prototype.onMouseOutCategoryMenu = function()
{
    this._mouseOverCategoryMenu = false;
    if (this._hideId) clearTimeout(this._hideId);
    var self = this;
    this._hideId = setTimeout(function()
    {
        if (!self._mouseOverCategoryMenu) self.categoryMenuVisible(false);
    }, 1000);
}

Value.prototype.setActivity = function(definition)
{
    var self = this;
    this.activity(new ActivityPresenter(definition, function()
    {
        // Removed:
        self.activity(null);
    }));
}
