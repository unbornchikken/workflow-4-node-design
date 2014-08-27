requirejs.config({
    paths: {
        'jquery': 'lib/jquery-2.1.1',
        'text': 'lib/requirejs-text-2.0.12',
        'knockout': 'lib/knockout-3.2.0',
        'knockout.validation': 'lib/knockout.validation-2.0.0-pre.3.min',
        'kendo': 'lib/kendo.ui.core-2014.2.716.min',
        'knockout.kendo': 'lib/knockout-kendo-0.8.1.min',
        'bluebird': 'lib/bluebird-2.3.0',
        'lodash': 'lib/lodash-2.4.1',

        // Workflow 4 Node stuff:
        'wf-design': 'wf4nd/design',
        'wf-views': 'wf4nd/views',
        'wf-common': 'wf4nd/common'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'kendo': {
            deps: ['jquery']
        },
        'knockout.kendo': {
            deps: ['kendo', 'knockout']
        },
        'knockout.validation': {
            deps: ['knockout']
        }
    }
});

define(['wf-design/workflowDesigner', 'knockout', 'jquery', 'text', 'knockout.validation', 'kendo', 'knockout.kendo', 'bluebird', 'lodash'], function (WorkflowDesigner, ko) {
    var designer = new WorkflowDesigner();
    ko.applyBindings(designer, $('#designer').get()[0]);
});