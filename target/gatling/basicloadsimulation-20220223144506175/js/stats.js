var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "45",
        "ok": "45",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1513",
        "ok": "1513",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "397",
        "ok": "397",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "347",
        "ok": "347",
        "ko": "-"
    },
    "percentiles1": {
        "total": "185",
        "ok": "185",
        "ko": "-"
    },
    "percentiles2": {
        "total": "611",
        "ok": "611",
        "ko": "-"
    },
    "percentiles3": {
        "total": "958",
        "ok": "958",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1269",
        "ok": "1269",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 36,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.25",
        "ok": "2.25",
        "ko": "-"
    }
},
contents: {
"req_get-all-data-715e9": {
        type: "REQUEST",
        name: "Get all data",
path: "Get all data",
pathFormatted: "req_get-all-data-715e9",
stats: {
    "name": "Get all data",
    "numberOfRequests": {
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1513",
        "ok": "1513",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "509",
        "ok": "509",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "374",
        "ok": "374",
        "ko": "-"
    },
    "percentiles1": {
        "total": "420",
        "ok": "420",
        "ko": "-"
    },
    "percentiles2": {
        "total": "823",
        "ok": "823",
        "ko": "-"
    },
    "percentiles3": {
        "total": "958",
        "ok": "958",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1352",
        "ok": "1352",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 21,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 27
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.5",
        "ok": "1.5",
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
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "428",
        "ok": "428",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "174",
        "ok": "174",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "percentiles1": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "percentiles2": {
        "total": "166",
        "ok": "166",
        "ko": "-"
    },
    "percentiles3": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "percentiles4": {
        "total": "403",
        "ok": "403",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
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
        "total": "0.75",
        "ok": "0.75",
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
