define(
    ['wf-common/util', 'wf-design/expandable', 'wf-design/value', 'knockout', 'text!wf-views/valueList.html'],
    function (util, Expandable, Value, ko, html) {

        util.installTemplate('wf-value-list-tmpl', html);

        function ValueList(options) {
            Expandable.call(this, options.expanded);
            this.items = ko.observableArray();
            if (this.createNew) this.createNew();
            this.title = options.title || "";
            this.createNewText = options.createNewText || "";
        }

        util.inherits(ValueList, Expandable);

        ValueList.prototype.createNew = function () {
            this.items.push(new Value(this));
        }

        ValueList.prototype.remove = function (variable) {
            this.items.remove(variable);
        }

        ValueList.prototype.showCategories = function (variable) {
            if (variable.categoryMenuVisible()) {
                variable.categoryMenuVisible(false);
                return;
            }
            _.forEach(this.items(), function (item) {
                item.categoryMenuVisible(item === variable);
            });
        }

        return ValueList;
    });