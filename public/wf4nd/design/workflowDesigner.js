define(['knockout', 'wf-design/activityDesigner'], function (ko, ActivityDesigner) {

    function WorkflowDesigner() {

        // Sample Data
        this.categories = ko.observableArray([
            {
                name: 'Control Flow',
                items: [
                    {
                        name: 'Block',
                        icon: 'style/images/block.png',
                        tagName: 'block',
                        canDeclare: true,
                        wantArgs: true,
                        hasResult: true,
                        properties: [
                            {
                                category: 'Category1',
                                name: 'anyProp',
                                type: 'expression' // if this is not present, then default is 'expression'
                            },
                            {
                                category: 'Category1',
                                name: 'stringProp',
                                type: 'string'
                            },
                            {
                                category: 'Category1',
                                name: 'numberProp',
                                type: 'number'
                            },
                            {
                                category: 'Category2',
                                name: 'booleanProp',
                                type: 'boolean'
                            },
                            {
                                category: 'Category2',
                                name: 'datetimeProp',
                                type: 'datetime'
                            },
                            {
                                category: 'Category2',
                                name: 'dateProp',
                                type: 'date'
                            },
                            {
                                category: 'Category2',
                                name: 'timeProp',
                                type: 'time'
                            },
                            {
                                category: 'Category3',
                                name: 'enumProp',
                                type: 'enum',
                                values: [
                                    {
                                        value: 1,
                                        name: 'One'
                                    },
                                    {
                                        value: 2,
                                        name: 'Two'
                                    },
                                    {
                                        value: 3,
                                        name: 'Three'
                                    }
                                ]
                            },
                            {
                                category: 'Category3',
                                name: 'setProp',
                                type: 'set',
                                values: [
                                    {
                                        value: 'apple',
                                        name: 'Apple'
                                    },
                                    {
                                        value: 'pear',
                                        name: 'Pear'
                                    },
                                    {
                                        value: 'peach',
                                        name: 'Peach'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Parallel',
                        icon: 'style/images/parallel.png',
                        tagName: 'parallel',
                        canDeclare: true,
                        properties: null,
                        wantArgs: true,
                        hasResult: true
                    }
                ]
            }
        ]);

        this.rootActivity = ko.observable(new ActivityDesigner(this.categories()[0].items[0]));
    }

    return WorkflowDesigner;
});