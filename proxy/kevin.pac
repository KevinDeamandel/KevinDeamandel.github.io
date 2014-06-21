function FindProxyForURL(url, host) {

var patterns = [{"name":"MGO","url":"*.mgo.com/*","regex":".*\\.mgo\\.com\\/.*","enabled":true,"temp":false,"whitelist":"Inclusive","type":"wildcard"}, {"name":"ATT","url":"*.att.net/*","regex":".*\\.att\\.net\\/.*","enabled":true,"temp":false,"whitelist":"Inclusive","type":"wildcard"}, {"name":"HBOGO","url":"*.hbogo.com/*","regex":".*\\.hbogo\\.com\\/.*","enabled":true,"temp":false,"whitelist":"Inclusive","type":"wildcard"}, {"name":"ATT.Com","url":"*.att.com/*","regex":".*\\.att\\.com\\/.*","enabled":true,"temp":false,"whitelist":"Inclusive","type":"wildcard"}, {"name":"ATT Edgesuite","url":"*.att.com.edgesuite.net/*","regex":".*\\.att\\.com\\.edgesuite\\.net\\/.*","enabled":true,"temp":false,"whitelist":"Inclusive","type":"wildcard"}], white = -1;
for (var i=0, sz=patterns.length; i<sz; i++) {
// ProxyPattern instances
var p = patterns[i];
if (p.enabled) {
if (RegExp(p.regex).test(url)) {
if (p.whitelist != "Inclusive") {
// Black takes priority over white -- skip this pattern
return "DIRECT";
}
else if (white == -1) {
white = i; // store first matched index and continue checking for blacklist matches!
}
}
}
}
if (white != -1) return "PROXY US3.hideipvpn.com:81";

var patterns = [{"name":"BBC","url":"*.bbc.com/*","regex":".*\\.bbc\\.com\\/.*","enabled":true,"temp":false,"whitelist":"Inclusive","type":"wildcard"}, {"name":"*.bbc.co.uk","url":"*.bbc.co.uk/*","regex":".*\\.bbc\\.co\\.uk\\/.*","enabled":true,"temp":false,"whitelist":"Inclusive","type":"wildcard"}, {"name":"BBC Streaming","url":"*.bbc.co.uk.edgesuite.net/*","regex":".*\\.bbc\\.co\\.uk\\.edgesuite\\.net\\/.*","enabled":true,"temp":false,"whitelist":"Inclusive","type":"wildcard"}, {"name":"*.bbc.net.uk","url":"*.bbc.net.uk/*","regex":".*\\.bbc\\.net\\.uk\\/.*","enabled":true,"temp":false,"whitelist":"Inclusive","type":"wildcard"}, {"name":"Sky","url":"*.Sky.com/*","regex":".*\\.Sky\\.com\\/.*","enabled":true,"temp":false,"whitelist":"Inclusive","type":"wildcard"}], white = -1;
for (var i=0, sz=patterns.length; i<sz; i++) {
// ProxyPattern instances
var p = patterns[i];
if (p.enabled) {
if (RegExp(p.regex).test(url)) {
if (p.whitelist != "Inclusive") {
// Black takes priority over white -- skip this pattern
return "DIRECT";
}
else if (white == -1) {
white = i; // store first matched index and continue checking for blacklist matches!
}
}
}
}
if (white != -1) return "PROXY UK3.hideipvpn.com:81";


/* Default FoxyProxy PAC */
return "DIRECT";
}