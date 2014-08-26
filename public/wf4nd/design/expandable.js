define(['knockout'], function (ko) {
    function Expandable(expanded) {
        this.isExpanded = ko.observable(expanded ? true : false);
    }

    Expandable.prototype.toggleExpand = function () {
        this.isExpanded(!this.isExpanded());
    }

    return Expandable;
});
