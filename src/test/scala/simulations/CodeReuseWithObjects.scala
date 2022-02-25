package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CodeReuseWithObjects extends Simulation {

  val httpConf = http.baseUrl("https://httpbin.org/")
    .header("Accept", "application/json")

  def getAllData() = {
    repeat(3) {
      exec(http("Get all data - 1st call")
        .get("get")
        .check(status.is(200)))
    }
  }

  def getSpecificStatusCode() = {
    exec(http("Get specific status code")
      .get("status/200")
      .check(status.is(200)))
  }

  val scn = scenario("Code reuse")
    .exec(getAllData())
    .pause(5)
    .exec(getSpecificStatusCode())
    .pause(5)
    .exec(getAllData())


  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)
}
