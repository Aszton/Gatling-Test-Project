var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "911",
        "ok": "911",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "463",
        "ok": "463",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "317",
        "ok": "317",
        "ko": "-"
    },
    "percentiles1": {
        "total": "257",
        "ok": "257",
        "ko": "-"
    },
    "percentiles2": {
        "total": "584",
        "ok": "584",
        "ko": "-"
    },
    "percentiles3": {
        "total": "846",
        "ok": "846",
        "ko": "-"
    },
    "percentiles4": {
        "total": "898",
        "ok": "898",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 67
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 33
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
        "total": "0.25",
        "ok": "0.25",
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
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "257",
        "ok": "257",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "911",
        "ok": "911",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "584",
        "ok": "584",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "327",
        "ok": "327",
        "ko": "-"
    },
    "percentiles1": {
        "total": "584",
        "ok": "584",
        "ko": "-"
    },
    "percentiles2": {
        "total": "748",
        "ok": "748",
        "ko": "-"
    },
    "percentiles3": {
        "total": "878",
        "ok": "878",
        "ko": "-"
    },
    "percentiles4": {
        "total": "904",
        "ok": "904",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 50
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
        "total": "0.167",
        "ok": "0.167",
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
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "percentiles2": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "percentiles3": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "percentiles4": {
        "total": "220",
        "ok": "220",
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
        "total": "0.083",
        "ok": "0.083",
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
