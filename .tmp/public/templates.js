angular.module('templates-app', ['news-post/index.tpl.html', 'news/index.tpl.html']);

angular.module("news-post/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("news-post/index.tpl.html",
    "<div ng-show=\"currentUser\">\n" +
    "\n" +
    "  <div style=\"margin-left:20%;margin-right:20%;\">\n" +
    "    <form class=\"committee-input\" role=\"form\" ng-submit=\"createBill(newBill)\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <input type=\"text\" placeholder= \"bill title\" ng-model=\"newBill.title\" class=\"form-control\">\n" +
    "        <input type=\"text\" placeholder= \"bill content\" ng-model=\"newBill.bill_content\" class=\"form-control\">\n" +
    "      </div>\n" +
    "      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"bill-list-container\">\n" +
    "  <br><br>\n" +
    "  <div class=\"bill-container\" ng-repeat=\"bill in bills | orderBy:'-createdAt'\">\n" +
    "    <h1 class=\"title\"><a href=\"/committee/{{committee.url_title}}\">{{bill.title}}</a></h1>\n" +
    "    <i ng-click=\"changeVote(vote, 'up')\" class=\"fa fa-arrow-circle-up fa-2x\" ng-class=\"{true:'up', false:''}[vote=='up']\"></i>\n" +
    "    <br>\n" +
    "    <i ng-click=\"changeVote(vote, 'down')\" class=\"fa fa-arrow-circle-down fa-2x\"  ng-class=\"{true:'down', false:''}[vote=='down']\"></i>\n" +
    "    <br>Vote: {{vote}}\n" +
    "\n" +
    "  </div>\n" +
    "  <br><br>\n" +
    "</div>");
}]);

angular.module("news/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("news/index.tpl.html",
    "<h1>{{committee}}</h1>\n" +
    "\n" +
    "<p>committee heirarchy</p>\n" +
    "<p>bylaws</p>\n" +
    "<p>submitted bills</p>\n" +
    "<p>polls</p>\n" +
    "\n" +
    "\n" +
    "<br><br><br>\n" +
    "\n" +
    "<a>edit committee</a>\n" +
    "\n" +
    "<br><br><br>\n" +
    "\n" +
    "<a>delete committee</a>\n" +
    "\n" +
    "\n" +
    "\n" +
    "submit bill\n" +
    "<br><br><br>\n" +
    "<div ng-show=\"currentUser\">\n" +
    "\n" +
    "  <div style=\"margin-left:20%;margin-right:20%;\">\n" +
    "    <form class=\"committee-input\" role=\"form\" ng-submit=\"createBill(newBill)\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <input type=\"text\" placeholder= \"bill title\" ng-model=\"newBill.title\" class=\"form-control\">\n" +
    "        <input type=\"text\" placeholder= \"bill content\" ng-model=\"newBill.bill_content\" class=\"form-control\">\n" +
    "      </div>\n" +
    "      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"bill-list-container\">\n" +
    "  <br><br>\n" +
    "  <div class=\"bill-container\" ng-repeat=\"bill in bills | orderBy:'-createdAt'\">\n" +
    "    <h1 class=\"title\"><a href=\"/committee/{{committee.url_title}}\">{{bill.title}}</a></h1>\n" +
    "    <i ng-click=\"changeVote(vote, 'up')\" class=\"fa fa-arrow-circle-up fa-2x\" ng-class=\"{true:'up', false:''}[vote=='up']\"></i>\n" +
    "    <br>\n" +
    "    <i ng-click=\"changeVote(vote, 'down')\" class=\"fa fa-arrow-circle-down fa-2x\"  ng-class=\"{true:'down', false:''}[vote=='down']\"></i>\n" +
    "    <br>Vote: {{vote}}\n" +
    "\n" +
    "  </div>\n" +
    "  <br><br>\n" +
    "</div>");
}]);
