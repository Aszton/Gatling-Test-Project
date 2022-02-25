package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._
import scala.language.postfixOps

class RunTimeParameters extends Simulation {

  private def getProperty(propertyName: String, defaultValue: String) = {
    Option(System.getenv(propertyName))
      .orElse(Option(System.getProperty(propertyName)))
      .getOrElse(defaultValue)
  }

  def userCount: Int = getProperty("USERS", "5").toInt
  def rampDuration: Int = getProperty("RAMP_DURATION", "10").toInt
  def testDuration: Int = getProperty("DURATION", "60").toInt

  before {
    println(s"Running test with ${userCount} users")
    println(s"Ramping users over ${rampDuration} seconds")
    println(s"Total test duration: ${testDuration} seconds")
  }

  val httpConf = http.baseUrl("https://httpbin.org/")
    .header("Accept", "application/json")

  def getAllData()= {
    exec(
      http("Get all data")
        .get("get")
        .check((status.is(200)))
    )
  }
  val scn = scenario("Basic Load Simulation")
    .forever(){
      exec(getAllData())
    }
  setUp(
    scn.inject(
      nothingFor(5.seconds),
      rampUsers(userCount) during (rampDuration.second),
    )
  ).protocols(httpConf)
    .maxDuration(testDuration.seconds)
}
