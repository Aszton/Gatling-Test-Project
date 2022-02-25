package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt

class CheckResponseStatus extends Simulation {

  val httpConf = http.baseUrl("https://httpbin.org/")
    .header("Accept", "application/json")

  val scn = scenario("This is all scenario")

    .exec(http("Get all data - 1st call")
      .get("get")
        .check(status.is(200)))
    .pause(5)

    .exec(http("Get specific status code")
      .get("status/200")
        .check(status.in(200 to 210)))
    .pause(1, 20)

    .exec(http("Get all data - 2nd call")
      .get("get")
        .check(status.not(404), status.not(505)))
    .pause(3000.milliseconds)

  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)
}
