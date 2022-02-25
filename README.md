Gatling 3 Fundamentals
=========================

Course code for the Gatling Fundamentals Udemy course - updated for Gatling v3

https://www.udemy.com/gatling-fundamentals

How to run:\
mvn gatling:test -Dgatling.simulationClass=simulations.RunTimeParameters

mvn gatling:test -Dgatling.simulationClass=simulations.RunTimeParameters -DUSERS=10 -DRAMP_DURATION=5 -DDURATION=30


or simply:

mvn gatling:test