(function() {
  var GeoNames;
  GeoNames = (function() {
    function GeoNames() {}
    GeoNames.prototype.findNearByWeather = function(latitude, longitude, callback) {
      return $.getJSON("http://ws.geonames.org/findNearByWeatherJSON?lat=" + escape(latitude) + "&lng=" + escape(longitude) + "&callback=?", function(response) {
        var details, weather;
        try {
          details = response.weatherObservation;
          weather = {
            "temperature": details.temperature
          };
        } catch (error) {
          if (console) {
            console.log(error);
          }
        }
        return callback(weather);
      });
    };
    GeoNames.prototype.postalCodeLookup = function(code, country, callback) {
      return $.getJSON("http://ws.geonames.org/postalCodeLookupJSON?postalcode=94103&country=" + escape(country) + "&callback=?", function(response) {
        try {
          return callback(response.postalcodes);
        } catch (error) {
          if (console) {
            return console.log(error);
          }
        }
      });
    };
    GeoNames.prototype.timezone = function(latitude, longitude, callback) {
      return $.getJSON("http://ws.geonames.org/timezoneJSON?lat=" + escape(latitude) + "&lng=" + escape(longitude) + "&callback=?", function(response) {
        try {
          return callback(response);
        } catch (error) {
          if (console) {
            return console.log(error);
          }
        }
      });
    };
    return GeoNames;
  })();
}).call(this);
