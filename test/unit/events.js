module("Events");

(function() {
  var ds = new DS({}),
      result = 0,
      increment = function(by) {
        by = (by || 1);
        result += by;
      };
  ds.bind('ping', increment);

  test("binding and firing an event", function() {
    result = 0;
    ds.trigger('ping', 1);
    equal(result, 1);
  });

  test("unbinding and firing an event", function() {
    result = 0;
    ds.trigger('ping');
    ds.unbind('ping', increment)
    equal(result, 1);
  });

}());
