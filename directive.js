//define a directive

app.directive("headerDirective", function() {
    return {
        restrict : "A",
        templateUrl : "modules/common/header.html"
    };
});

app.directive("footerDirective", function() {
    return {
        restrict : "A",
        templateUrl : "modules/common/footer.html"
    };
});

app.directive("leftDirective", function() {
    return {
        restrict : "A",
        templateUrl : "modules/common/left_bar.html"
    };
});

