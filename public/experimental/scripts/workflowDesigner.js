function WorkflowDesigner()
{
    this.categories = ko.observableArray([
        {
            name: "Control Flow",
            items: [
                {
                    name: "Block",
                    icon: "style/images/block.png",
                    tagName: "block",
                    canDeclare: true,
                    properties: null,
                    wantArgs: true
                },
                {
                    name: "Parallel",
                    icon: "style/images/parallel.png",
                    tagName: "parallel",
                    canDeclare: true,
                    properties: null,
                    wantArgs: true
                }
            ]
        }
    ]);

    this.rootActivity = ko.observable(new ActivityPresenter(this.categories()[0].items[0]));
}
