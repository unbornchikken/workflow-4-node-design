define(
    ['wf-design/expandable', 'wf-design/propertyList', 'wf-common/util', 'knockout', 'lodash', 'text!wf-views/propertyCategoryList.html'],
    function (Expandable, PropertyList, util, ko, _, html) {

        util.installTemplate('wf-property-category-list-tmpl', html);

        function PropertyCategoryList(propertyDefinitions) {
            Expandable.call(this, false);

            this.title = "Properties";
            this.items = ko.observableArray();
            var grouped = _.groupBy(propertyDefinitions, function (def) {
                return def.category || "Other"
            });
            for (var categoryName in grouped) {
                this.items.push(new PropertyList(categoryName, grouped[categoryName]));
            }
        }

        util.inherits(PropertyCategoryList, Expandable);

        return PropertyCategoryList;
    });