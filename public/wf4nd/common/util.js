define(['jquery'], function ($) {

    var util = {
        inherits: function (ctor, superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
                constructor: {
                    value: ctor,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
        },
        installTemplate: function (id, html) {
            if (!$('#' + id).length) {
                $('<script />')
                    .attr({
                        id: id,
                        type: 'text/html'
                    })
                    .html(html)
                    .appendTo($('body'));
            }
        }
    }

    return util;
});