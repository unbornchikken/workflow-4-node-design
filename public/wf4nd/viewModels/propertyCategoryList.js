function PropertyCategoryList(propertyDefinitions)
{
    Expandable.call(this, false);

    this.title = "Properties";
    this.items = ko.observableArray();
    var grouped = _.groupBy(propertyDefinitions, function(def) { return def.category || "Other" });
    for (var categoryName in grouped)
    {
        this.items.push(new PropertyList(categoryName, grouped[categoryName]));
    }
}

util.inherits(PropertyCategoryList, Expandable);