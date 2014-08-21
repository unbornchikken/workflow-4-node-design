function PropertyList(categoryName, propertyDefinitions)
{
    ValueList.call(this, {
        title: categoryName,
        createNewText: "N/A",
        expanded: true
    });

    var self = this;

    _.forEach(propertyDefinitions, function(pd)
    {
        self.items.push(new Property(this, pd));
    });
}

util.inherits(PropertyList, ValueList);

PropertyList.prototype.createNew = null;