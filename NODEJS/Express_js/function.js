application: This is an object that contains various methods and properties related to the Express application.
 Some of the methods include init, defaultConfiguration, lazyrouter, handle, use, route, engine, param, set, path, enabled, disabled, enable, 
 disable, acl, bind, checkout, connect, copy, delete, get, head, link, lock, m-search, merge, mkactivity, mkcalendar, mkcol, move, notify, options, 
 patch, post, propfind, proppatch, purge, put, rebind, report, search, source, subscribe, trace, unbind, unlink, unlock, unsubscribe, all, del, 
 render, and listen.

request: This is an object that represents the HTTP request received by the Express application.
 It contains various methods and properties related to the request, such as header, get, accepts, acceptsEncodings, acceptsEncoding,
  acceptsCharsets, acceptsCharset, acceptsLanguages, acceptsLanguage, range, param, is, protocol, secure, ip, ips, subdomains, path, hostname,
   host, fresh, stale, and xhr.

response: This is an object that represents the HTTP response that will be sent by the Express application.
 It contains various methods and properties related to the response, such as status, links, send, json, jsonp, sendStatus, sendFile, sendfile, 
 download, type, contentType, format, attachment, append, header, set, get, clearCookie, cookie, location, redirect, vary, and render.

Route: This is a constructor function that is used to create route objects in Express.

Router: This is a constructor function that is used to create router objects in Express.

json: This is a middleware function that parses JSON bodies.

query: This is a middleware function that parses URL-encoded query strings.

raw: This is a middleware function that parses raw bodies.

static: This is a middleware function that serves static files.

text: This is a middleware function that parses text bodies.

urlencoded: This is a middleware function that parses URL-encoded bodies.








In the Express.js framework, there are several core objects and functions that are commonly used. Here is a list of the main objects and functions in Express.js:

1 > Application Object: This is the main object that represents the Express application. It is created by calling the express() function.
 The application object has the following functions:

application.init(): Initializes the application.
application.defaultConfiguration(): Sets the default configuration for the application.
application.lazyrouter(): Creates a lazy router for the application.
application.handle(): Handles requests for the application.
application.use(): Adds middleware to the application.
application.route(): Creates a new route for the application.
application.engine(): Registers a template engine with the application.
application.param(): Adds route parameters to the application.
application.set(): Sets application settings.
application.path(): Gets the application's path.
application.enabled(): Checks if a setting is enabled.
application.disabled(): Checks if a setting is disabled.
application.enable(): Enables a setting.
application.disable(): Disables a setting.
application.acl(): Adds an ACL rule to the application.
application.bind(): Binds a function to the application.
application.checkout(): Adds a checkout route to the application.
application.connect(): Adds a connect route to the application.
application.copy(): Adds a copy route to the application.
application.delete(): Adds a delete route to the application.
application.get(): Adds a get route to the application.
application.head(): Adds a head route to the application.
application.link(): Adds a link route to the application.
application.lock(): Adds a lock route to the application.
application.m-search(): Adds a m-search route to the application.
application.merge(): Adds a merge route to the application.
application.mkactivity(): Adds a mkactivity route to the application.
application.mkcalendar(): Adds a mkcalendar route to the application.
application.mkcol(): Adds a mkcol route to the application.
application.move(): Adds a move route to the application.
application.notify(): Adds a notify route to the application.
application.options(): Adds an options route to the application.
application.patch(): Adds a patch route to the application.
application.post(): Adds a post route to the application.
application.propfind(): Adds a propfind route to the application.
application.proppatch(): Adds a proppatch route to the application.
application.purge(): Adds a purge route to the application.
application.put(): Adds a put route to the application.
application.rebind(): Adds a rebind route to the application.
application.report(): Adds a report route to the application.
application.search(): Adds a search route to the application.
application.source(): Adds a source route to the application.
application.subscribe(): Adds a subscribe route to the application.
application.trace(): Adds a trace route to the application.
application.unbind(): Adds an unbind route to the application.
application.unlink(): Adds an unlink route to the application.
application.unlock(): Adds an unlock route to the application.
application.unsubscribe(): Adds an unsubscribe route to the application.
application.all(): Adds a route that matches all HTTP methods.
application.del(): Adds a delete route to the application.
application.render(): Renders a view template.


2 >Request Object: This object represents the HTTP request received by the Express application. It has the following functions:

request.header(): Gets the value of a request header.
request.get(): Gets the value of a request header.
request.accepts(): Checks if the request accepts a given content type.
request.acceptsEncodings(): Checks if the request accepts a given encoding.
request.acceptsEncoding(): Checks if the request accepts a given encoding.
request.acceptsCharsets(): Checks if the request accepts a given charset.
request.acceptsCharset(): Checks if the request accepts a given charset.
request.acceptsLanguages(): Checks if the request accepts a given language.
request.acceptsLanguage(): Checks if the request accepts a given language.
request.range(): Parses the Range header.
request.param(): Gets the value of a route parameter.
request.is(): Checks if the request's content type matches a given type.
request.protocol: Gets the request's protocol.
request.secure: Checks if the request is secure.
request.ip: Gets the request's IP address.
request.ips: Gets the request's IP addresses.
request.subdomains: Gets the request's subdomains.
request.path: Gets the request's path.
request.hostname: Gets the request's hostname.
request.host: Gets the request's host.
request.fresh: Checks if the request is fresh.
request.stale: Checks if the request is stale.
request.xhr: Checks if the request is an XMLHttpRequest.


3 >response object:

status: Sets the HTTP status code of the response.
links: Adds links to the response headers.
send: Sends a response with optional data.
json: Sends a JSON response.
jsonp: Sends a JSONP response.
sendStatus: Sends the HTTP status code as the response.
sendFile: Sends a file as the response.
sendfile: Alias for sendFile.
download: Initiates a file download.
type: Sets the content type of the response.

contentType: Alias for type.
format: Formats the response using Express format utility.
attachment: Sets the Content-Disposition header to "attachment".
append: Appends additional header fields to the response.
header: Alias for append.
set: Alias for append.
get: Retrieves the value of a response header.
clearCookie: Clears a cookie by name.
cookie: Sets a cookie in the response.
location: Sets the location header for redirection.
redirect: Redirects to a specified URL.
vary: Adds values to the Vary response header.
render: Renders a view template.

4 >Route object:

Route objects do not have directly accessible functions. They are created dynamically based on the route definition.

5 >Router object:

param: Adds a callback function to handle route parameters.
handle: Handles requests for the router.
process_params: Processes parameters for the router.
use: Mounts middleware functions.
route: Creates a new route.
HTTP methods (e.g., get, post, put, delete, etc.): Define routes for corresponding HTTP methods.
json: Middleware function for parsing JSON bodies.

below function are defined outside of any object.
query: Middleware function for parsing URL-encoded query strings.

raw: Middleware function for parsing raw bodies.

static: Middleware function for serving static files.

text: Middleware function for parsing text bodies.

urlencoded: Middleware function for parsing URL-encoded bodies.

