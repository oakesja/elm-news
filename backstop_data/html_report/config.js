report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/prod_test_Newsletter_0_document_0_phone.png",
        "test": "../bitmaps_test/20161221-193357/prod_test_Newsletter_0_document_0_phone.png",
        "selector": "document",
        "fileName": "prod_test_Newsletter_0_document_0_phone.png",
        "label": "Newsletter",
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -54,
            "height": -207
          },
          "misMatchPercentage": "59.78",
          "analysisTime": 201,
          "getDiffImage": null
        },
        "diffImage": "../bitmaps_test/20161221-193357/failed_diff_prod_test_Newsletter_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/prod_test_Newsletter_0_document_1_tablet_h.png",
        "test": "../bitmaps_test/20161221-193357/prod_test_Newsletter_0_document_1_tablet_h.png",
        "selector": "document",
        "fileName": "prod_test_Newsletter_0_document_1_tablet_h.png",
        "label": "Newsletter",
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "100.00",
          "analysisTime": 1002,
          "getDiffImage": null
        },
        "diffImage": "../bitmaps_test/20161221-193357/failed_diff_prod_test_Newsletter_0_document_1_tablet_h.png"
      },
      "status": "fail"
    }
  ]
});