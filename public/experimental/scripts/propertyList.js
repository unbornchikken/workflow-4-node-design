function PropertyList(categoryName, propertyDefinitions)
{
    ValueList.call(this, {
        title: categoryName,
        createNewText: "N/A"
    });

    var self = this;

    _.forEach(propertyDefinitions, function(pd)
    {
        self.items.push(new Property(this, pd));
    });
}

util.inherits(PropertyList, ValueList);

PropertyList.prototype.createNew = function()
{
    // Do nothing ...
}