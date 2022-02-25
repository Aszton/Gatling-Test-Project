var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "180",
        "ok": "180",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "881",
        "ok": "881",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "299",
        "ok": "299",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "219",
        "ok": "219",
        "ko": "-"
    },
    "percentiles1": {
        "total": "141",
        "ok": "141",
        "ko": "-"
    },
    "percentiles2": {
        "total": "550",
        "ok": "550",
        "ko": "-"
    },
    "percentiles3": {
        "total": "681",
        "ok": "681",
        "ko": "-"
    },
    "percentiles4": {
        "total": "846",
        "ok": "846",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 177,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 2
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
        "total": "5.806",
        "ok": "5.806",
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
        "total": "120",
        "ok": "120",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "881",
        "ok": "881",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "371",
        "ok": "371",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "233",
        "ok": "233",
        "ko": "-"
    },
    "percentiles1": {
        "total": "453",
        "ok": "453",
        "ko": "-"
    },
    "percentiles2": {
        "total": "555",
        "ok": "555",
        "ko": "-"
    },
    "percentiles3": {
        "total": "741",
        "ok": "741",
        "ko": "-"
    },
    "percentiles4": {
        "total": "848",
        "ok": "848",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 117,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 3
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
        "total": "3.871",
        "ok": "3.871",
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
        "total": "60",
        "ok": "60",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "473",
        "ok": "473",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "154",
        "ok": "154",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "55",
        "ok": "55",
        "ko": "-"
    },
    "percentiles1": {
        "total": "138",
        "ok": "138",
        "ko": "-"
    },
    "percentiles2": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "percentiles3": {
        "total": "249",
        "ok": "249",
        "ko": "-"
    },
    "percentiles4": {
        "total": "393",
        "ok": "393",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 60,
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
        "total": "1.935",
        "ok": "1.935",
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
