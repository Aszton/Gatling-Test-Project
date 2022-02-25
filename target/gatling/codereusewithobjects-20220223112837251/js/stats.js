var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7",
        "ok": "7",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "746",
        "ok": "746",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "201",
        "ok": "201",
        "ko": "-"
    },
    "percentiles1": {
        "total": "194",
        "ok": "194",
        "ko": "-"
    },
    "percentiles2": {
        "total": "311",
        "ok": "311",
        "ko": "-"
    },
    "percentiles3": {
        "total": "621",
        "ok": "621",
        "ko": "-"
    },
    "percentiles4": {
        "total": "721",
        "ok": "721",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.538",
        "ok": "0.538",
        "ko": "-"
    }
},
contents: {
"req_get-all-data----c2e85": {
        type: "REQUEST",
        name: "Get all data - 1st call",
path: "Get all data - 1st call",
pathFormatted: "req_get-all-data----c2e85",
stats: {
    "name": "Get all data - 1st call",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "746",
        "ok": "746",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "283",
        "ok": "283",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "218",
        "ok": "218",
        "ko": "-"
    },
    "percentiles1": {
        "total": "174",
        "ok": "174",
        "ko": "-"
    },
    "percentiles2": {
        "total": "295",
        "ok": "295",
        "ko": "-"
    },
    "percentiles3": {
        "total": "642",
        "ok": "642",
        "ko": "-"
    },
    "percentiles4": {
        "total": "725",
        "ok": "725",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.462",
        "ok": "0.462",
        "ko": "-"
    }
}
    },"req_get-specific-st-f97e3": {
        type: "REQUEST",
        name: "Get specific status code",
path: "Get specific status code",
pathFormatted: "req_get-specific-st-f97e3",
stats: {
    "name": "Get specific status code",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "percentiles2": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "percentiles3": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "percentiles4": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.077",
        "ok": "0.077",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
