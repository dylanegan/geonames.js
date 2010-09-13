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
