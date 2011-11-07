class GeoNames
  constructor: () ->

  findNearByWeather: (latitude, longitude, callback) ->
    $.getJSON "http://ws.geonames.org/findNearByWeatherJSON?lat="+escape(latitude)+"&lng="+escape(longitude)+"&callback=?", (response) ->
      try
        details = response.weatherObservation
        weather = { "temperature": details.temperature }
      catch error
        if console
          console.log error

      callback weather

  postalCodeLookup: (code, country, callback) ->
    $.getJSON "http://ws.geonames.org/postalCodeLookupJSON?postalcode=94103&country="+escape(country)+"&callback=?", (response) ->
      try
        callback response.postalcodes
      catch error
        if console
          console.log error

  timezone: (latitude, longitude, callback) ->
    $.getJSON "http://ws.geonames.org/timezoneJSON?lat="+escape(latitude)+"&lng="+escape(longitude)+"&callback=?", (response) ->
      try
        callback response
      catch error
        if console
          console.log error
