#! node
var backstop = require('backstopjs');
var nock = require('nock');

var resp = {
    "start_date": "December 12",
    "end_date": "December 18",
    "year": "2016",
    "articles": [{
        "url": "https://groups.google.com/d/msg/elm-discuss/A1FDy820DdA/0nLvSUTSDQAJ",
        "hits": "17",
        "author": "Manu Rosa",
        "tag": "elm-discuss",
        "title": "Design concepts. Too many Msg's?"
    }]
};
nock('https://raw.githubusercontent.com')
    .get('/oakesja/elm-news-newsletters/master/newsletters/2016-12-19.json')
    .reply(200, resp);

backstop('reference')
