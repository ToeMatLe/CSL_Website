/**
 * Main AngularJS Web Application
 */

var app = angular.module('cslWebApp', [
  'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
  //$locationProvider.html5Mode(true);

  $routeProvider
    // Home
    .when("/", { templateUrl: "partials/home.html", controller: "PageCtrl" })
    //Opportunities
    .when("/opportunities", { templateUrl: "partials/opportunities.html", controller: "PageCtrl" })
    .when("/opportunities/2022-undergrad-opportunities", { templateUrl: "partials/2022_undergrad_opportunities.html", controller: "PageCtrl" })
    .when("/2022-FPGA-Opportunity", { templateUrl: "partials/2022_FPGA_Opportunity.html", controller: "PageCtrl" })
    // Publications
    .when("/publications", { templateUrl: "partials/publications/publications-overview.html", controller: "PageCtrl" })
    .when("/publications/overview", { templateUrl: "partials/publications/publications-overview.html", controller: "PageCtrl" })
    .when("/publications/journal-publications", { templateUrl: "partials/publications/journal-publications.html", controller: "PageCtrl" })
    .when("/publications/conference-publications", { templateUrl: "partials/publications/conference-publications.html", controller: "PageCtrl" })
    .when("/publications/arxiv-papers", { templateUrl: "partials/publications/arxiv-papers.html", controller: "PageCtrl" })
    .when("/publications/published-codes-and-design-tools", { templateUrl: "partials/publications/published-codes-and-design-tools.html", controller: "PageCtrl" })
    .when("/publications/patents", { templateUrl: "partials/publications/patents.html", controller: "PageCtrl" })
    .when("/publications/dissertations", { templateUrl: "partials/publications/dissertations.html", controller: "PageCtrl" })
    .when("/publications/book-chapters-and-miscellaneous-publications", { templateUrl: "partials/publications/book-chapters-and-miscellaneous-publications.html", controller: "PageCtrl" })
    // Projects
    .when("/projects", { templateUrl: "partials/projects/projects-overview.html", controller: "PageCtrl" })
    .when("/projects/surp", { templateUrl: "partials/projects/surp.html", controller: "PageCtrl" })
    .when("/projects/overview", { templateUrl: "partials/projects/projects-overview.html", controller: "PageCtrl" })
    .when("/projects/nsf-1618272", { templateUrl: "partials/projects/nsf-1618272.html", controller: "PageCtrl" })
    .when("/projects/sa-photonics", { templateUrl: "partials/projects/sa-photonics.html", controller: "PageCtrl" })
    .when("/projects/broadcom-foundation", { templateUrl: "partials/projects/broadcom-foundation.html", controller: "PageCtrl" })
    .when("/projects/nsf-1162501", { templateUrl: "partials/projects/nsf-1162501.html", controller: "PageCtrl" })
    .when("/projects/western-digital", { templateUrl: "partials/projects/western-digital.html", controller: "PageCtrl" })
    // People
    .when("/people/research-group", { templateUrl: "partials/people/research-group.html", controller: "PageCtrl" })
    .when("/people/alumni", { templateUrl: "partials/people/alumni.html", controller: "PageCtrl" })
    .when("/people/2022-plans", { templateUrl: "partials/people/2022-plans.html", controller: "PageCtrl" })
    // Learn
    .when("/learn/news-archive", { templateUrl: "partials/learn/news-archive.html", controller: "PageCtrl" })
    .when("/learn/upcoming-seminars", { templateUrl: "partials/learn/upcoming-seminars.html", controller: "PageCtrl" })
    .when("/learn/past-seminars", { templateUrl: "partials/learn/past-seminars.html", controller: "PageCtrl" })
    .when("/learn/NASIT-2022", { templateUrl: "partials/learn/NASIT-2022.html", controller: "PageCtrl" })

    // Contact Us
    .when("/contact-us", { templateUrl: "partials/contact-us.html", controller: "PageCtrl" })
    // else 404
    .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });


}]);

/**
 * Controls All Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
