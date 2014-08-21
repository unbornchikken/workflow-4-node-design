requirejs.config({
    paths: {
        'jquery': 'lib/jquery-2.1.1',
        'text': 'lib/requirejs-text-2.0.12',
        'knockout': 'lib/knockout-3.2.0',
        'knockout.validation': 'lib/knockout.validation-2.0.0-pre.3.min',
        'kendo': 'lib/kendo.ui.core-2014.2.716.min',
        'knockout.kendo': 'lib/knockout-kendo-0.8.1.min',
        'bluebird': 'lib/bluebird-2.3.0',
        'loadsh': 'lib/lodash-2.4.1',

        // Workflow 4 Node stuff:
        'wf-viewModels': 'wf4nd/viewModels',
        'wf-views': 'wf4nd/views',
        'wf-global': 'wf4nd/global'
    },
    shim: {
        'knockout.validation': {
            deps: ['knockout']
        },
        'knockout.kendo': {
            deps: ['knockout']
        }
    }
});

define(['wf-viewModels/workflowDesigner', 'jquery', 'text', 'knockout', 'knockout.validation', 'kendo', 'knockout.kendo', 'bluebird', 'loadsh'], function(WorkflowDesigner) {
    window.workflowDesigner = new WorkflowDesigner();
});