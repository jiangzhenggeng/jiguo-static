/**
 * Created by wuhongshan on 2017/6/2.
 */

define([ 'jquery', 'ueditor'], function ($, UE) {
    function createUE(id) {
        var _editor = UE.getEditor(id, {
            serverUrl: window.FILE_UPLOAD_URL
        });
        _editor.addListener("beforepaste", function (type, html) {
            if (html.html) {
                html.html = html.html.replace(/<img[^>](\/>|>)/ig, '');
            }
        });
        return _editor;
    }

    return {
        init: createUE
    };
});
