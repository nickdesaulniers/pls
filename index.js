// Generated by CoffeeScript 1.6.3
(function() {
  var parse;

  parse = function(pls) {
    var i, line, lines, match, numberOfEntries, obj, tracks, _i, _j, _len;
    obj = {};
    tracks = [];
    lines = pls.split('\n');
    for (_i = 0, _len = lines.length; _i < _len; _i++) {
      line = lines[_i];
      match = line.match(/([a-zA-Z0-9]+)\=(.+)\r?$/);
      if (match && match.length >= 2) {
        obj[match[1].toLowerCase()] = match[2];
      }
    }
    numberOfEntries = parseInt(obj.numberofentries, 10) || 0;
    for (i = _j = 1; 1 <= numberOfEntries ? _j <= numberOfEntries : _j >= numberOfEntries; i = 1 <= numberOfEntries ? ++_j : --_j) {
      tracks.push({
        uri: obj["file" + i],
        title: obj["title" + i],
        length: parseInt(obj["length" + i], 10)
      });
    }
    return tracks;
  };

  if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
    module.exports = parse;
  } else if ((typeof window !== "undefined" && window !== null) && window === this) {
    window.PLS = {
      parse: parse
    };
  }

}).call(this);
