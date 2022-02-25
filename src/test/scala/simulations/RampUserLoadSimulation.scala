package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._
import scala.language.postfixOps

class RampUserLoadSimulation extends Simulation{
  val httpConf = http.baseUrl("https://httpbin.org/")
    .header("Accept", "application/json")

  def getAllData()= {
    exec(
      http("Get all data")
        .get("get")
        .check((status.is(200)))
    )
  }
  def getSpecificStatusCode() = {
    exec(http("Get specific status code")
      .get("status/200")
      .check(status.is(200))
    )
  }

  val scn = scenario("Basic Load Simulation")
    .exec(getAllData())
    .pause(5)
    .exec(getSpecificStatusCode())
    .pause(5)
    .exec(getAllData())

  setUp(
    scn.inject(
      nothingFor(5 seconds),
    //  constantUsersPerSec(10) during(10 seconds)
      rampUsersPerSec(1) to (5) during (20 seconds)
    ).protocols(httpConf.inferHtmlResources())
  )
}
