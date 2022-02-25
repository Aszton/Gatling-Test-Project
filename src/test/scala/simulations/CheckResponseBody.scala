package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CheckResponseBody extends Simulation {

    val httpConf = http.baseUrl("https://httpbin.org/")
      .header("Accept", "application/json")

    val scn = scenario("Check JSON path")
      .exec(http("get all data")
      .get("get")
        .check(jsonPath("$.origin").is("89.64.100.131")))

    setUp(
      scn.inject(atOnceUsers(1))
    ).protocols(httpConf)
}

